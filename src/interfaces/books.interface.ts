export interface IBooks{
id:number
name:string
pages: number
category?:string
createdAt?: Date |undefined
updatedAt: Date
}
export interface IEditBook{
    name:string
    pages: number
    category:string
}