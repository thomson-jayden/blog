import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(["Tech", "Travel", "Projects", "Life"]),
    readTime: z.number().int().positive(),
    author: z.string().default("Jayden Thomson"),
    featured: z.boolean().default(false),
  }),
})

export const collections = { blog }
