const express = require("express")
const Router = express.Router()
const Book = require("../books/books")
const { generateText } = require("ai")
const { openai } = require("@ai-sdk/openai")

Router.get("/", async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(e){
        res.status(500).json({message: "Error fetching books", error: e.message});
    }
});

Router.post("/", async (req, res) => {
    const {title, author, genre, summary} = req.body;
    const newBook = new Book({title, author, genre, summary});
    try{
        await newBook.save();
        res.status(201).json(newBook);
    }catch(e){
        res.status(500).json({message: "Error creating book", error: e.message});
    }
});

Router.delete("/:id", async (req, res) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if(!deletedBook){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json({message: "Book deleted successfully", deletedBook});
    }catch(e){
        res.status(500).json({message: "Error deleting book", error: e.message});
    }
})

Router.post("/summarize", async (req, res) => {
    try{
    const {title, author, genre} = req.body;
    const { text } = await generateText({
        model: openai("gpt-4o-mini"),
        prompt: `create a summary for the book ${title} by ${author} in the genre ${genre}.maximum 20 words.`
    });
        res.status(200).json({ summary: text });
    }catch(e){
        res.status(500).json({message: "Error summarizing book", error: e.message});
    }
})

module.exports = Router;