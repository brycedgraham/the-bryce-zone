import React from "react"

interface BookProps {
  path: string
  title: string
  quote: string
  onHover: () => void
  offHover: () => void
}

interface BookState {
  clicked: boolean
}

class Book extends React.Component<BookProps, BookState> {
  constructor(props: BookProps) {
    super(props)
    this.state = { clicked: false }
  }

  onClick = () => this.setState(prevState => ({ clicked: !prevState.clicked }))
  onMouseEnter = () => this.props.onHover()

  onMouseLeave = () => this.props.offHover()

  render() {
    const { path, title, quote } = this.props

    const popUpMessageStyle: React.CSSProperties = {
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      position: "absolute",
      left: "200px",
      margin: "-200px",
      padding: "1em",
      textAlign: "center",
    }

    return (
      <div>
        <div
          className="book-cover-flex-item"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        >
          <img src={path} alt={title}></img>
        </div>
        {this.state.clicked ? (
          <div
            className="mobile-quote"
            style={popUpMessageStyle}
            onClick={this.onClick}
          >
            <p>{quote}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default Book
