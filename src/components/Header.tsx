import { Link } from "react-router-dom"
import React from "react"

interface HeaderProps {
  siteTitle?: string
}

const Header = ({ siteTitle = "" }: HeaderProps) => (
  <header className="site-header">
    <div className="header-content">
      <h1 className="site-title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="header-accent"></div>
    </div>
  </header>
)

export default Header