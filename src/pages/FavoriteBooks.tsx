import React from "react"
import Book from "../components/Book"
import "./favorite-books.css"
import MyBooks from "../components/BookInfo"

interface FavoriteBooksState {
  SelectedBookQuote: string
}

class FavoriteBooks extends React.Component<{}, FavoriteBooksState> {
  constructor(props: {}) {
    super(props)
    this.state = { SelectedBookQuote: "" }
  }

  render() {
    const { SelectedBookQuote } = this.state
    const bookComponents = MyBooks.map((b, index) => (
      <Book
        key={index}
        path={b.path}
        title={b.title}
        quote={b.quote}
        onHover={() => this.setState({ SelectedBookQuote: b.quote })}
        offHover={() => this.setState({ SelectedBookQuote: "" })}
      />
    ))
    return (
      <>
        <div style={{ fontSize: ".8em" }}>
          (Hover or tap for deep, insightful wisdom)
        </div>
        <div className="book-cover-flex-container">{bookComponents}</div>
        <div>{SelectedBookQuote === "" ? "" : SelectedBookQuote}</div>
      </>
    )
  }
}

export default FavoriteBooks
