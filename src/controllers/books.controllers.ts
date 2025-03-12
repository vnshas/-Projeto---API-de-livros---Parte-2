import {  Request, Response } from "express"
import { BooksServices } from "../services/books.services"


export class BooksControllers{
    
    getBooks(req:Request, res:Response):Response{
        const booksServices = new BooksServices()

        const response = booksServices.getBooks(req.query.search as string)

        return res.status(200).json(response)

        
    }
    getOneBook(req:Request, res:Response){
        const booksServices = new BooksServices()

        const response = booksServices.getOneBook(req.params.id,)

        res.status(200).json(response)

        return
    }
    
    
    createBook( req:Request,res:Response){
        
        const booksServices = new BooksServices()

        
        const response = booksServices.createBook(req.body)
        
        res.status(201).json(response)

        return
    }

    updateBook( req:Request,res:Response){
        const booksServices = new BooksServices()
        
        const id = Number(req.params.id)
        const response = booksServices.updateBook(id,req.body)

        res.status(200).json(response)
        
        return
    }

    deleteBook(req:Request, res:Response){
        const booksServices = new BooksServices()

        booksServices.deleteBook(req.params.id)

        res.status(204).json()
    }
}