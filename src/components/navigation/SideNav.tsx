import React from "react"
import { Link } from "react-router-dom"
import "./SideNav.css"

const Nav = () => (
  <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/Toolbox/">Toolbox</Link>
    <Link to="/Education/">Education</Link>
    <Link to="/Photography/">Photography</Link>
    <Link to="/FavoriteBooks/">Favorite Books</Link>
  </div>
)

export default Nav
