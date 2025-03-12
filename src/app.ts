import "express-async-errors"
import express, { json } from "express";
import { booksRouters } from "./routers/books.router";
import { HandleErrors } from "./erros/handleErrors.middleware";
import helmet from "helmet";


export const app = express();

app.use(helmet())

app.use(json());

app.use("/books", booksRouters)

app.use(HandleErrors.execute)