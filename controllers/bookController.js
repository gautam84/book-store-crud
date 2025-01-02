/**

MIT License

Copyright (c) 2025 Gautam Hazarika

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


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
  