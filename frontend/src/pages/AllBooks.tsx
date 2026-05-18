import { useState, useEffect } from "react";
import {type Book } from "../types/books";
function AllBooks() {
    const [books,setBooks] = useState<Book[]>([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/books")
          .then(response => response.json())
          .then(data => setBooks(data))
          .catch(error => console.error(error))
      }, [])
      console.log(books)
   
      const handleDelete = (id: string) => {
        try {
            fetch(`http://localhost:3000/api/books/${id}`, {
                method: "DELETE"
            })
            setBooks(prevBooks => prevBooks.filter(book => book._id !== id))
            console.log("Book deleted successfully")
        } catch (error) {
            console.error("Error deleting book:", error)
        }
      }

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {books.length === 0 ? (
  <p className="text-white text-xl animate-pulse">No books found</p>
) : (
  books.map((book) => (
    <div key={book._id} className="bg-gray-600 text-white p-4 rounded-md shadow-md hover: transition-all duration-300">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-white-600">{book.author}</p>
      <p className="text-white-600">{book.genre}</p>
      <p className="text-white-600">{book.summary}</p>
      <button onClick={() => handleDelete(book._id)}
       className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all duration-300">Delete</button>
    </div>
  
  ))
)}  
</div>
    )
}

export default AllBooks;