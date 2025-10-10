import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./SideNav.css"

const Nav = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/Toolbox/", label: "Toolbox", icon: "🔧" },
    { to: "/Experience/", label: "Experience", icon: "🎓" },
    { to: "/Photography/", label: "Photography", icon: "📷" },
    { to: "/FavoriteBooks/", label: "Favorite Books", icon: "📚" },
  ]

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={isActive(item.to) ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

export default Nav