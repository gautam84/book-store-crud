const Book = require("../models/book");

const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const createBook = async (req, res) => {
    const book = new Book(req.body);
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      console.log(err)

      res.status(400).json({ message: err.message });
    }
  };
  
  const updateBook = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  const deleteBook = async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json({ message: "Book deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Export all functions
  module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
  };
  