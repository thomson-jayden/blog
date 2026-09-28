import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(['Tech', 'Travel', 'Projects', 'Life']),
    readTime: z.number().int().positive(),
    author: z.string().default('Jayden Thomson'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
