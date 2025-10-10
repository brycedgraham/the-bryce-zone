import React from "react"

const linkImageStyle: React.CSSProperties = {
  width: "100px",
  marginBottom: 0,
}

export default () => (
  <>
    <h1>Greetings Fellow Sapients</h1>
    <p>
      Welcome to a quick glimpse into the life, hobbies and skills of Bryce
      Graham
    </p>
    <fieldset
      style={{
        backgroundColor: "lightgray",
        border: "4px outset groove white",
        display: "inline",
      }}
    >
      <legend>
        <h4>Additional Links</h4>
      </legend>
      <div>
        <a href="https://www.linkedin.com/in/bryce-graham-34590a49/">
          <img
            src="/images/LinkImages/LinkedIn.png"
            alt="LinkedIn Logo"
            style={linkImageStyle}
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/physeo/">
          <img
            src="/images/LinkImages/GitHub.png"
            alt="GitHub Logo"
            style={linkImageStyle}
          />
        </a>
      </div>
    </fieldset>
  </>
)
