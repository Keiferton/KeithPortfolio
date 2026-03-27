import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteMeta } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about/",
  "/contact/",
  "/work/",
  "/projects/",
  "/designs/",
  "/products/",
  "/community/",
  "/side-quests/",
];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL(siteMeta.url);
  const [projects, designs, products, community, sidequests] = await Promise.all([
    getCollection("projects"),
    getCollection("designs"),
    getCollection("products"),
    getCollection("community"),
    getCollection("sidequests"),
  ]);

  const urls: Array<{ loc: string; lastmod?: string }> = [
    ...staticRoutes.map((path) => ({ loc: new URL(path, siteUrl).toString(), lastmod: undefined })),
    ...projects.map((entry) => ({
      loc: new URL(`/projects/${entry.slug}/`, siteUrl).toString(),
      lastmod: entry.data.date,
    })),
    ...designs.map((entry) => ({
      loc: new URL(`/designs/${entry.slug}/`, siteUrl).toString(),
      lastmod: entry.data.date,
    })),
    ...products.map((entry) => ({
      loc: new URL(`/products/${entry.slug}/`, siteUrl).toString(),
      lastmod: entry.data.date,
    })),
    ...community.map((entry) => ({
      loc: new URL(`/community/${entry.slug}/`, siteUrl).toString(),
      lastmod: entry.data.date,
    })),
    ...sidequests.map((entry) => ({
      loc: new URL(`/side-quests/${entry.slug}/`, siteUrl).toString(),
      lastmod: entry.data.date,
    })),
  ];

  const body = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls.map(
      ({ loc, lastmod }) =>
        `<url><loc>${escapeXml(loc)}</loc>${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ""}</url>`,
    ),
    `</urlset>`,
  ].join("");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
