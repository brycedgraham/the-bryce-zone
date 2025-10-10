import React from "react"
import "./Home.css"
import GoodreadsQuotesWidget from "../components/GoodreadsQuotesWidget"

const Home = () => (
  <div className="home-page">
    {/* Hero Section */}
    <section className="hero-section">
      <h1 className="hero-title">
        Hello, I'm <span className="highlight">Bryce Graham</span>
      </h1>
      <p className="hero-subtitle">
        Software Engineer • Problem Solver • Creative Thinker
      </p>
      <p className="hero-description">
        Welcome to my corner of the internet—a blend of professional work, 
        technical projects, and creative pursuits.
      </p>
    </section>

    {/* About Section */}
    <section className="about-section">
      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">💻</div>
          <h3>Professional</h3>
          <p>
            Experienced in building scalable applications and solving complex 
            technical challenges with modern technologies.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">🎨</div>
          <h3>Creative</h3>
          <p>
            Passionate about photography, reading, and exploring the 
            intersection of technology and art.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">🚀</div>
          <h3>Innovative</h3>
          <p>
            Always learning, experimenting with new tools, and building 
            projects that make a difference.
          </p>
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="links-section">
      <h2>Connect With Me</h2>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/bryce-graham-34590a49/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <div className="social-icon">
            <img src="/images/LinkImages/LinkedIn.png" alt="" />
          </div>
          <div className="social-info">
            <span className="social-name">LinkedIn</span>
            <span className="social-description">Professional Profile</span>
          </div>
        </a>
        <a 
          href="https://github.com/brycedgraham/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link github"
        >
          <div className="social-icon">
            <img src="/images/LinkImages/GitHub.png" alt="" />
          </div>
          <div className="social-info">
            <span className="social-name">GitHub</span>
            <span className="social-description">Code & Projects</span>
          </div>
        </a>
      </div>
    </section>

    {/* Explore Section */}
    <section className="explore-section">
      <h2>Explore This Site</h2>
      <div className="explore-grid">
        <a href="/Toolbox/" className="explore-card">
          <div className="explore-icon">🔧</div>
          <h3>Toolbox</h3>
          <p>Technical skills and tools I work with</p>
          <span className="explore-arrow">→</span>
        </a>
        <a href="/Photography/" className="explore-card">
          <div className="explore-icon">📷</div>
          <h3>Photography</h3>
          <p>Visual stories captured through my lens</p>
          <span className="explore-arrow">→</span>
        </a>
        <a href="/FavoriteBooks/" className="explore-card">
          <div className="explore-icon">📚</div>
          <h3>Favorite Books</h3>
          <p>Literary works that inspire me</p>
          <span className="explore-arrow">→</span>
        </a>
      </div>
    </section>
    <section>
      <GoodreadsQuotesWidget />
    </section>
  </div>
)

export default Home