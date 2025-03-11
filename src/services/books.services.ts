import { booksDatabase, generateId } from "../database/database"
import { IBooks, IEditBook,} from "../interfaces/books.interface"

export class BooksServices {
  getBooks() {
    return booksDatabase
  }

  getOneBook(id: string) {
    const findBook = booksDatabase.find((book) => book.id === Number(id))

    return findBook
  }

  createBook(data: IEditBook): IBooks {
    const createdAt = new Date()
    const updatedAt = new Date()

    const newBook: IBooks = {
      id: generateId(),
      ...data,
      createdAt: createdAt,
      updatedAt: updatedAt,
    }
    booksDatabase.push(newBook)
    return newBook
  }

  updateBook(id: number, data: IEditBook): IBooks {
    const product = booksDatabase.find((book) => book.id === Number(id))

    const updatedAt = new Date()
    const newBook = { id, ...product, ...data, updatedAt }
    const index = id - 1
    booksDatabase.splice(index, 1, newBook)
    return newBook
  }

  deleteBook(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id))

    booksDatabase.splice(index, 1)
  }
}
