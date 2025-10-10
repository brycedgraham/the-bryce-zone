import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/index"
import Toolbox from "./pages/Toolbox"
import Photography from "./pages/Photography"
import FavoriteBooks from "./pages/FavoriteBooks"
import EducationExperience from "./pages/EducationExperience"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Toolbox" element={<Toolbox />} />
          <Route path="Experience" element={<EducationExperience />} />
          <Route path="Photography" element={<Photography />} />
          <Route path="FavoriteBooks" element={<FavoriteBooks />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
