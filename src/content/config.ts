import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
      title: z.string(),
      img: z.string(),
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
    })
  })
  
  export const collections = { projects }