import express, { json } from "express";
import { booksRouters } from "./routers/books.router";
import { HandleErrors } from "./erros/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books", booksRouters)

app.use(HandleErrors.execute)