import { useState, useEffect } from "react";
import { type Book } from "../types/books";

function AllBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(books);

  const handleDelete = (id: string) => {
    try {
      fetch(`http://localhost:3000/api/books/${id}`, {
        method: "DELETE",
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">All Books</h1>
        <p className="mt-1 text-slate-500">Your personal library collection</p>
      </header>

      {books.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <p className="text-lg font-medium text-slate-600">No books found</p>
          <p className="mt-1 text-sm text-slate-400">Add a book to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book._id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-slate-900">{book.title}</h2>
                <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                  {book.genre}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-700">{book.author}</p>
              <p className="mt-3 flex-1 text-sm text-slate-500 line-clamp-4">{book.summary}</p>
              <button
                onClick={() => handleDelete(book._id)}
                className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBooks;
