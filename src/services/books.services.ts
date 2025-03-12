import { booksDatabase, generateId } from "../database/database"
import { IBooks, IEditBook,} from "../interfaces/books.interface"

export class BooksServices {
  getBooks(search?:string) {
    if(search){
      const book = booksDatabase.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()) )
      return book
    }
    return booksDatabase
  }

  getOneBook(id: string,) {
    
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
    const product = booksDatabase.find((book) => book.id === Number(id)) as IBooks

    const updatedAt = new Date()
    const newBook = { ...product, ...data, updatedAt }
    const index = id - 1
    booksDatabase.splice(index, 1, newBook) 
    return newBook
  }

  deleteBook(id: string) {
    const index = booksDatabase.findIndex((book) => book.id === Number(id))

    booksDatabase.splice(index, 1)
  }
}
