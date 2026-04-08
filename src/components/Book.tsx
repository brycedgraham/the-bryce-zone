import React, { useState } from "react"
import "./Book.css"

interface BookProps {
  path: string
  title: string
  quote: string
  goodreads?: string
}

const Book = ({ path, title, quote, goodreads }: BookProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showQuote, setShowQuote] = useState(false)

  return (
    <div className="book-container">
      <div
        className={`book-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowQuote(!showQuote)}
      >
        <div className="book-cover">
          <img src={path} alt={title} loading="lazy" />
          <div className="book-overlay">
            <div className="book-title">{title}</div>
            <div className="book-hint">Click for quote</div>
          </div>
        </div>
      </div>

      {showQuote && (
        <div className="quote-modal" onClick={() => setShowQuote(false)}>
          <div className="quote-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="quote-close"
              onClick={() => setShowQuote(false)}
              aria-label="Close quote"
            >
              ×
            </button>
            <h3>{title}</h3>
            <blockquote>{quote}</blockquote>
          </div>
        </div>
      )}
      {goodreads && (
        <a href={goodreads} target="_blank" rel="noopener noreferrer">
          View on Goodreads
        </a>
      )}
    </div>
  )
}

export default Book