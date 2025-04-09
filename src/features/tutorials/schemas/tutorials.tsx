import { z } from 'zod';

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.union([
    z.literal('language'),
    z.literal('framework'),
    z.literal('library'),
    z.literal('tool'),
    z.literal('platform'),
  ]),
});

export const tutorialsSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
  videoDuration: z.string(),
  author: z.string(),
  language: z.string(),
  framework: z.string(),
  library: z.string(),
  categories: z.array(categorySchema),
});

export const tutorialFiltersSchema = z.object({
  query: z.string(),
  languages: z.array(z.string()),
  frameworks: z.array(z.string()),
  libraries: z.array(z.string()),
});

export type Tutorial = z.infer<typeof tutorialsSchema>;
export type Category = z.infer<typeof categorySchema>;
export type TutorialFilters = z.infer<typeof tutorialFiltersSchema>;
