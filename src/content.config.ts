import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      author: z
        .object({
          name: z.string(),
          handle: z.string().optional(),
          avatar: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog };
