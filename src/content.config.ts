import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './posts', pattern: '*.md' }),
  schema: z.looseObject({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date().optional(),
    // Accept the previous field name when bringing in existing Markdown.
    pubDate: z.coerce.date().optional(),
    owner: z.string().trim().min(1).default('Vijayasankar Ravindran'),
    tags: z.array(z.string().trim().min(1)).default([]),
    updatedDate: z.coerce.date().optional(),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
    .refine(data => data.date || data.pubDate, { message: 'Add a publication date with the date field.' })
    .transform(data => ({ ...data, pubDate: (data.date || data.pubDate)! })),
});

export const collections = { blog };
