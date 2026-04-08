import React from "react"
import Book from "../components/Book"
import bookInfo from "../data/BookInfo"
import "./FavoriteBooks.css"

const FavoriteBooks = () => {
  return (
    <div className="favorite-books-page">
      <div className="page-header">
        <h1>Favorite Books</h1>
        <p className="page-subtitle">
          A collection of books that have shaped my perspective and imagination
        </p>
      </div>

      <div className="books-grid">
        {bookInfo.map((book) => (
          <Book
            key={book.title}
            path={book.path}
            title={book.title}
            quote={book.quote}
            goodreads={book.goodreads}
          />
        ))}
      </div>
    </div>
  )
}

export default FavoriteBooks