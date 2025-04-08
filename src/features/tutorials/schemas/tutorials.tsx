import { z } from 'zod';

export const tutorialsSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  createdAt: z.string().datetime(),
  thumbnailUrl: z.string().url(),
  videoDuration: z.string(),
  creatorName: z.string(),
  language: z.string(),
});

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

export const tutorialSearchSchema = z.object({
  query: z.string(),
  languages: z.array(z.string()),
  frameworks: z.array(z.string()),
  libraries: z.array(z.string()),
});

export type Tutorial = z.infer<typeof tutorialsSchema>;
export type Category = z.infer<typeof categorySchema>;
export type TutorialSearch = z.infer<typeof tutorialSearchSchema>;
