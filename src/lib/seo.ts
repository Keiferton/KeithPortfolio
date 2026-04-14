import { siteMeta } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type CreativeWorkOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  date?: string;
  keywords?: string[];
  section?: string;
  type?: "CreativeWork" | "Article";
};

type ProductOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  date?: string;
  tags?: string[];
};

const siteUrl = new URL(siteMeta.url);

const personSchema = {
  "@type": "Person",
  name: siteMeta.name,
  url: siteMeta.url,
  sameAs: [siteMeta.links.github, siteMeta.links.linkedin],
};

const websiteSchema = {
  "@type": "WebSite",
  name: siteMeta.name,
  url: siteMeta.url,
};

const compactObject = <T extends Record<string, unknown>>(value: T) =>
  Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== "")) as T;

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const absoluteImage = (image?: string) => (image ? absoluteUrl(image) : undefined);

export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const buildCreativeWorkJsonLd = ({
  title,
  description,
  path,
  image,
  date,
  keywords = [],
  section,
  type = "CreativeWork",
}: CreativeWorkOptions) =>
  compactObject({
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteImage(image),
    datePublished: date,
    dateModified: date,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    author: personSchema,
    creator: personSchema,
    isPartOf: websiteSchema,
    articleSection: section,
  });

export const buildProductJsonLd = ({
  title,
  description,
  path,
  image,
  date,
  tags = [],
}: ProductOptions) =>
  compactObject({
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteImage(image),
    releaseDate: date,
    category: tags.length > 0 ? tags.join(", ") : undefined,
    brand: {
      "@type": "Brand",
      name: siteMeta.name,
    },
    manufacturer: personSchema,
  });
