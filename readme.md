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
  git clone <repository-url>
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

