# Bookstore CRUD App

This is a simple RESTful API for managing books in a bookstore. The app allows you to perform basic CRUD (Create, Read, Update, Delete) operations on books using the following endpoints.

## Technologies Used
- Node.js
- Express.js
- MongoDB (or any database of your choice)
- Mongoose (for MongoDB ODM)

## Endpoints

### Get All Books
- **URL:** `/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books.
- **Response:**

  ```json
  [
    {
      "_id": "book_id",
      "title": "Book Title",
      "author": "Book Author",
      "genre": "Book Genre",
      "publishedYear": 2021
    }
  ]
   ```