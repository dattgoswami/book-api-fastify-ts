export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Novel",
    publishedYear: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic, Bildungsroman",
    publishedYear: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian, Political fiction, Social science fiction",
    publishedYear: 1949,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure, Sailor's narrative",
    publishedYear: 1851,
  },
];
