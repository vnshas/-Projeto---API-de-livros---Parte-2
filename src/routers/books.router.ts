import { Router } from "express"
import { BooksControllers } from "../controllers/books.controllers"
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware"
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware"
import { ValidateRequest } from "../middlewares/validateRequest.middleware"
import { createBookSchema, editBookSchema } from "../schemas/books.schema"


export const booksRouters = Router()

const booksControllers = new BooksControllers()

booksRouters.get("/" ,booksControllers.getBooks)

booksRouters.get("/:id", IsBookIdValid.execute , booksControllers.getOneBook)

booksRouters.post("/", ValidateRequest.execute({body: createBookSchema}),IsBookNameValid.execute,booksControllers.createBook)

booksRouters.patch("/:id", ValidateRequest.execute({body:editBookSchema}),IsBookIdValid.execute ,IsBookNameValid.execute, booksControllers.updateBook)

booksRouters.delete("/:id", IsBookIdValid.execute  , booksControllers.deleteBook)