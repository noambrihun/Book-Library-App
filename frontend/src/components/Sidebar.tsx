import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="bg-gray-800 text-white min-h-screen w-64 p-4">
            <h1 className="text-2xl font-bold">Sidebar</h1>
            <Link to="/" className="block p-2 text-white hover:bg-gray-700 rounded-md my-2">All Books</Link>
            <Link to="/add-book" className="block p-2 text-white hover:bg-gray-700 rounded-md my-2">Add Book</Link>
            <Link to="/search-book" className="block p-2 text-white hover:bg-gray-700 rounded-md my-2">Search Book</Link>
        </div>
    )
}

export default Sidebar;