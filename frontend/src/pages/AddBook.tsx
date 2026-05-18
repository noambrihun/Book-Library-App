import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

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
            if (title.length < 1 || title.length > 20) {
                alert("Title invalid")
                return
            }
            if (author.length < 1 || author.length > 20) {
                alert("Description invalid")
                return
            }
            if (genre.length < 1 || genre.length > 20) {
                alert("Genre invalid")
                return
            }
          console.error(error)
        }
      }

      const handleGenerateSummary = async () => {
          fetch("http://localhost:3000/api/books/summarize", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, genre })
          })

         .then(response => response.json())
         .then(data => {
            console.log(data)
            setSummary(data.summary)
         })
         .catch(error => console.error(error))
    }

    return (
        <div className="mx-auto max-w-2xl space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-slate-900">Add Book</h1>
          <p className="mt-1 text-slate-500">Add a new book or generate an AI summary</p>
        </header>

        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={fieldClass}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={fieldClass}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className={fieldClass}
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className={`${fieldClass} min-h-36 resize-y`}
        />
        <button onClick={handleAddBook} className="rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700">Add Book</button>
        <button onClick={handleGenerateSummary} className="rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700">Generate Summary</button>
        </div>
      </div>
    )
}

export default AddBook;
