import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string().optional(),
			discipline: z.array(z.string()),
			year: z.number(),
			location: z.string().default("London"),
			// 20–160 chars: this doubles as the page's meta description.
			summary: z.string().min(20).max(160),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			images: z
				.array(
					z.object({
						src: image(),
						// alt is required: no image ships without it.
						alt: z.string(),
					}),
				)
				.optional(),
			order: z.number(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { projects };
