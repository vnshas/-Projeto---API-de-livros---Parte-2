import { z } from "zod"

export const bookSchema = z.object({
    id:z.number(),
name:z.string().min(3),
pages: z.number().min(1),
category:z.string().optional(),
createdAt: z.string(),
updatedAt: z.string() 
})

export const createBookSchema = bookSchema.pick({name:true,pages:true,category:true})
export const editBookSchema = bookSchema.pick({name:true,pages:true,category:true}).partial()