import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [summary, setSummary] = useState("");
    const navigate = useNavigate();
    const handleAddBook = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              author,
              genre,
              summary,
            }),
          })
      
          const data = await response.json()
      
          console.log(data)
      
          setTitle("")
          setAuthor("")
          setGenre("")
          setSummary("")
          navigate("/")
        } catch (error) {
          console.error(error)
        }
      }
      
    return (
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-md border"
        />
      
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-3 rounded-md border"
        />
      
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-3 rounded-md border"
        />
      
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="p-3 rounded-md border h-40"
        />
        <button onClick={handleAddBook} className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300">Add Book</button>
      </div>
    )
}

export default AddBook;