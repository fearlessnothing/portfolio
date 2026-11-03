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
    // Optional project overview cards (shown instead of the one-line meta when `focus` is set).
    system: z.string().optional(),
    focus: z.array(z.string()).optional(),
    environment: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    technologiesNote: z.string().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };