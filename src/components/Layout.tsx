import React from "react"
import Header from "./Header"
import "./layout.css"
import SideNav from "./navigation/SideNav"
import { Outlet } from "react-router-dom"

const Layout = () => (
  <div className="app-container">
    <SideNav />
    <div className="main-wrapper">
      <Header siteTitle="The Bryce Zone" />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} • Built with{" "}
          <a href="https://www.vitejs.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
          {" "}and{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </footer>
    </div>
  </div>
)

export default Layout