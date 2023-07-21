import type { RequestContext } from "@vercel/edge";

export const config = {
  runtime: "edge", // this is a pre-requisite
};

const API_URL = process.env["VITE_API_URL"];

async function refresh() {
  const res = await fetch(API_URL);
  return res.ok;
}

export default (request: Request, context: RequestContext) => {
  context.waitUntil(refresh().then((ok) => console.log({ ok })));

  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};
