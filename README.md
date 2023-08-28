# Fastify TypeScript CRUD API

A TypeScript-powered REST API using Fastify to perform CRUD operations on a dataset of books.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation and Setup](#installation-and-setup)
3. [File Structure and Descriptions](#file-structure-and-descriptions)
4. [Running the Server](#running-the-server)
5. [Endpoints](#endpoints)

## Project Overview

This project serves as a demonstration of creating a high-performance REST API using Fastify combined with the power of TypeScript. The primary function is to allow CRUD operations on a collection of books.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dattgoswami/book-api-fastify-ts
   ```

2. **Navigate to the Directory**:

   ```bash
   cd book-api-fastify-ts
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## File Structure and Descriptions

- **src/models/book.ts**: Defines the `Book` interface and provides an initial array of book data.
- **src/routes/bookRoutes.ts**: Sets up the routes and their handlers for CRUD operations on the book dataset.

- **src/server.ts**: Contains the main server configuration, imports routes, and starts the Fastify server.

## Running the Server

To start the server, run:

```bash
npm start
```

The server will be up and running on `http://localhost:3000`.

## Endpoints

1. **Get All Books**:

   - Method: `GET`
   - Endpoint: `/books`

2. **Get a Specific Book by ID**:

   - Method: `GET`
   - Endpoint: `/books/:id`

3. **Add a New Book**:

   - Method: `POST`
   - Endpoint: `/books`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<title>",
       "author": "<author_name>",
       "genre": "<genre>",
       "publishedYear": <year>
     }
     ```

4. **Update a Book by ID**:

   - Method: `PUT`
   - Endpoint: `/books/:id`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<updated_title>",
       "author": "<updated_author_name>",
       "genre": "<updated_genre>",
       "publishedYear": <updated_year>
     }
     ```

5. **Delete a Book by ID**:
   - Method: `DELETE`
   - Endpoint: `/books/:id`
