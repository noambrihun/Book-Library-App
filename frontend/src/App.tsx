import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllBooks from "./pages/AllBooks"
import AddBook from "./pages/AddBook"
import SearchBook from "./pages/SearchBook"
import Sidebar from "./components/Sidebar"
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/search-book" element={<SearchBook />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App