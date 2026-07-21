import { z } from 'zod';

// now define schema based on api response
/*
    {
        "id": 1,
        "title": "The Pragmatic Programmer",
        "author": "Andrew Hunt",
        "category": "Programming",
        "price": 42.99
    },
    */

const BookSchema = z.object({
  id: z.number(), // this is not type script number, this is zod library number
  title: z.string(),
  author: z.string(),
  category: z.string(),
  price: z.number()
});

// since, api return array, conver bookschema into array
const BooksSchema = z.array(BookSchema);

// for single book
type Book = z.infer<typeof BookSchema>; // Schema to Type conversion

// const heading = document.getElementById('heading') as HTMLElement;
const button = document.getElementById('btn') as HTMLButtonElement;

let data = [];
button.addEventListener('click', async () => {
  const response = await fetch("https://tsapidemo.lwhh.org/api/v2/books");
  const books = await response.json();

  // ======== working with zod now ============

  // Zod's .safeParse() method validates data without throwing errors. 
  // It returns a simple object. If it works, you get { success: true, data: value }. 
  // If it fails, you get { success: false, error: ZodError }. This prevents app crashes and avoids messy try/catch blocks.

  const result = BooksSchema.safeParse(books);

  if (!result.success) {
    console.error(result.error.issues);
    return;
  }

  data = books;
  console.log(books); // display all books
  printBookDetail(books[1]); // display single books
});

function printBookDetail(book: Book) {
  console.log(book);
}