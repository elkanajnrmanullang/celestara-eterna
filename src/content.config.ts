import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const portofolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portofolio" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    date: z.coerce.date()
  })
});

export const collections = {
  portofolio: portofolioCollection,
};