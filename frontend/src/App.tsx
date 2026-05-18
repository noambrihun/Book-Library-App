import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllBooks from "./pages/AllBooks"
import AddBook from "./pages/AddBook"
import Sidebar from "./components/Sidebar"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
            <Routes>
              <Route path="/" element={<AllBooks />} />
              <Route path="/add-book" element={<AddBook />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
