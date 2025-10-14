import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    summary: z.string(),
    cover: z.string().optional(),
    thumbs: z.array(z.string()).optional(), 
    featured: z.boolean().default(false),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
      categories: z.array(z.string()).optional(),
  }),
});

const designs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tool: z.array(z.string()).default([]),
    summary: z.string().optional(),
    cover: z.string().optional(),
    thumbs: z.array(z.string()).optional(),
    glb: z.boolean().default(false),
    glbPath: z.string().optional(),
    links: z.object({
      source: z.string().url().optional(),
    }).optional(),
  }),
});

const community = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),                    // "YYYY-MM-DD"
    summary: z.string().optional(),
    cover: z.string().optional(),        // hero photo
    thumbs: z.array(z.string()).optional(),
    org: z.string().optional(),          // e.g., "ACM@SFSU", "SF Hacks", "NIH URISE"
    role: z.string().optional(),         // e.g., "Organizer", "Outreach Chair"
    links: z.object({
      site: z.string().url().optional(),
      gallery: z.string().url().optional(),
    }).optional(),
  }),
});

const sidequests = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    thumbs: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]), // e.g., ["3D printing","Go","electronics"]
    glb: z.boolean().default(false),
    glbPath: z.string().optional(),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }).optional(),
  }),
});

export const collections = { projects, designs, community, sidequests };
