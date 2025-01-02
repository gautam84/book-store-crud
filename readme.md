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
      "_id": "<book_id>",
      "title": "Book Title",
      "author": "Book Author",
      "genre": "Book Genre",
      "publishedYear": 2021
    }
  ]
   ```


### Create a New Book
- **URL:** `/books`
- **Method:** `POST`
- **Description:** Creates a new book.
- **Request Body:**

  ```json
  {
    "title": "Book Title",
    "author": "Book Author",
    "genre": "Book Genre",
    "publishedYear": 2021
  }
   ```
- **Response:**

  ```json
    {
    "_id": "<book_id>",
    "title": "Book Title",
    "author": "Book Author",
    "genre": "Book Genre",
    "publishedYear": 2021
    }
   ```



### Update a Book
- **URL:** `/books/:id`
- **Method:** `PUT`
- **Description:** Updates an existing book by ID.
- **Request Body:**

  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "genre": "Updated Genre",
    "publishedYear": 2022
  }
   ```
- **Response:**

  ```json
  {
    "_id": "<book_id>",
    "title": "Updated Title",
    "author": "Updated Author",
    "genre": "Updated Genre",
    "publishedYear": 2022
  }
   ```



### Delete a Book
- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a book by ID.
- **Response:**

  ```json
  {
    "message": "Book deleted"
  }
   ```

## Setup

1. Clone the repository:

```sh
  git clone https://github.com/gautam84/book-store-crud.git
```

2. Install dependencies:

```sh
  npm install
```

3. Create a `.env` file in the root directory and add your MongoDB URI and port:
``` 
  MONGO_URI=your_mongodb_uri
  PORT=5000
```


2. Start the server:
```sh
  npm start
```


## License

```
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
```
