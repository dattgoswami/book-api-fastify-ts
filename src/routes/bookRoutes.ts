import { FastifyInstance, FastifyRequest } from "fastify";
import { Book, books } from "../models/book";

interface RouteParams {
  id: string;
}

export default async function bookRoutes(fastify: FastifyInstance) {
  fastify.get("/books", async () => {
    return books;
  });

  fastify.get<{ Params: RouteParams }>("/books/:id", async (request) => {
    const id = parseInt(request.params.id, 10);
    const book = books.find((b) => b.id === id);
    if (!book) throw new Error("Book not found");
    return book;
  });

  fastify.post<{ Body: Book }>("/books", async (request, reply) => {
    const book = request.body;
    books.push(book);
    reply.code(201);
    return book;
  });

  fastify.put<{ Params: RouteParams; Body: Book }>(
    "/books/:id",
    async (request) => {
      const id = parseInt(request.params.id, 10);
      const index = books.findIndex((b) => b.id === id);
      if (index === -1) throw new Error("Book not found");
      const updatedBook = request.body;
      books[index] = updatedBook;
      return updatedBook;
    }
  );

  fastify.delete<{ Params: RouteParams }>("/books/:id", async (request) => {
    const id = parseInt(request.params.id, 10);
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) throw new Error("Book not found");
    books.splice(index, 1);
    return { success: true };
  });
}
