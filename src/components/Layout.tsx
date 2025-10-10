import React from "react"
import Header from "./Header"
import "./layout.css"
import SideNav from "./navigation/SideNav"
import { Outlet } from "react-router-dom"

const Layout = () => (
  <div>
    <SideNav />
    <div className="main">
      <Header siteTitle="The Bryce Zone" />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ marginBottom: "26px" }}>
          <Outlet />
        </main>
        <footer
          style={{
            width: "100%",
            bottom: 0,
            position: "relative",
            height: "2em",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.vitejs.dev">Vite</a>
        </footer>
      </div>
    </div>
  </div>
)

export default Layout
