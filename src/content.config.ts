import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int(),
    role: z.string(),
    duration: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    results: z.array(z.string()),
  }),
});

export const collections = { 'case-studies': caseStudies };