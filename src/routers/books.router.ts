import { Router } from "express"
import { BooksControllers } from "../controllers/books.controllers"
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware"
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware"

export const booksRouters = Router()

const booksControllers = new BooksControllers()

booksRouters.get("/", booksControllers.getBooks)

booksRouters.get("/:id", IsBookIdValid.execute , booksControllers.getOneBook)

booksRouters.post("/", IsBookNameValid.execute,booksControllers.createBook)

booksRouters.patch("/:id", IsBookIdValid.execute ,IsBookNameValid.execute, booksControllers.updateBook)

booksRouters.delete("/:id", IsBookIdValid.execute  , booksControllers.deleteBook)