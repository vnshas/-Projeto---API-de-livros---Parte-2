import { AnyZodObject } from "zod"

export interface IBooks{
id:number
name:string
pages:number
category?:string
createdAt: Date 
updatedAt: Date
}
export interface IEditBook{
    name:string
    pages: number
    category:string
}

export interface IRequestSchemas{
    params?: AnyZodObject
    body?: AnyZodObject
    query?: AnyZodObject
}