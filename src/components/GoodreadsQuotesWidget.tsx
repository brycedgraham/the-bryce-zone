import { useEffect, useRef } from "react"

const GoodreadsQuotesWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.goodreads.com/quotes/widget/43072653-bryce-graham?v=2"
    script.type = "text/javascript"
    script.async = true

    if (widgetRef.current) {
      widgetRef.current.appendChild(script)
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "" // Clean up on unmount
      }
    }
  }, [])

  return (
    <div
      style={{
        padding: "0px 7px",
      }}
    >
      <div id="gr_quote_body" ref={widgetRef}></div>
      <div style={{ textAlign: "right" }}>
        <a
          href="https://www.goodreads.com/quotes"
          style={{
            color: "#382110",
            textDecoration: "none",
            fontSize: "10px",
          }}
          rel="nofollow"
        >
          Goodreads Quotes
        </a>
      </div>
    </div>
  )
}

export default GoodreadsQuotesWidget