import sharp from 'sharp';
import { readFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../brand.config.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

let built = 0;
let skipped = 0;

for (const asset of config.assets) {
  const src = resolve(root, asset.source);
  if (!existsSync(src)) {
    console.log(`SKIP ${asset.name} -- no source at ${asset.source}`);
    skipped++;
    continue;
  }
  for (const out of asset.outputs) {
    const dst = resolve(root, out.path);
    mkdirSync(dirname(dst), { recursive: true });
    if (out.format === 'svg') {
      copyFileSync(src, dst);
      console.log(`COPY ${asset.source} -> ${out.path}`);
    } else if (out.format === 'png') {
      await sharp(readFileSync(src), { density: 144 })
        .resize(out.width, out.height)
        .png({ compressionLevel: 9 })
        .toFile(dst);
      console.log(`PNG  ${asset.source} -> ${out.path} (${out.width}x${out.height})`);
    } else {
      console.log(`WARN unknown format "${out.format}" for ${asset.name}`);
      continue;
    }
    built++;
  }
}

console.log(`\nDone. ${built} outputs written, ${skipped} sources missing.`);
