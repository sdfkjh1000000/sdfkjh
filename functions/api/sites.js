// Read-only directory of the live, hand-built sites under sdfkjh.com.
// This is the apex's genuine machine-readable data: the portfolio it is the
// parent of. No auth, no writes, no PII. Mirrored by the MCP server (sdfkjh-mcp).
// Documented at /.well-known/sites-openapi.json and advertised via the API Catalog.

const SITES = [
  {
    name: "sdfkjh",
    url: "https://sdfkjh.com",
    summary:
      "Single-page craft showcase: a live Markdown renderer, format switcher, design-token editor, effects lab, and JavaScript REPL. Every section a working artifact. The page is the portfolio.",
    tags: ["showcase", "brand", "web"],
    stack: "static HTML, vanilla JS, Cloudflare Pages",
  },
  {
    name: "BYOB",
    url: "https://byob.sdfkjh.com",
    summary:
      "Be Your Own Broker. A car-buying advocacy site that walks shoppers through purchasing without the dealership F&I middleman, keeping the deal in the buyer's hands.",
    tags: ["advocacy", "cars", "guide"],
    stack: "static HTML, Cloudflare Pages",
  },
  {
    name: "Tank Talks",
    url: "https://tanktalks.sdfkjh.com",
    summary:
      "Freshwater aquarium editorial site: how-to and troubleshooting articles on fish, shrimp, plants, and water chemistry, with disclosed Amazon affiliate gear roundups.",
    tags: ["editorial", "aquariums", "affiliate"],
    stack: "static HTML, Cloudflare Pages",
  },
  {
    name: "Business Internet Quotes",
    url: "https://businessinternetsearch.sdfkjh.com",
    summary:
      "Free lookup that finds business-grade internet providers serviceable at a specific commercial address and returns quotes. Carriers pay a referral commission; the business pays nothing.",
    tags: ["lead-gen", "b2b", "internet"],
    stack: "static HTML + Cloudflare Worker form backend",
  },
];

export async function onRequest() {
  const body = JSON.stringify(
    {
      name: "sdfkjh.com site directory",
      description:
        "The live, hand-built sites published under sdfkjh.com. Read-only, public, no authentication.",
      contact: "info@sdfkjh.com",
      count: SITES.length,
      sites: SITES,
    },
    null,
    2
  );
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Content-Signal": "search=yes, ai-input=yes, ai-train=no",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
