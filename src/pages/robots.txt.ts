import type { APIRoute } from "astro";
import { siteMeta } from "@/lib/site";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(siteMeta.url);
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}`].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
