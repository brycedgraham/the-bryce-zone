import React from "react"
import "./toolbox.css"

interface Skill {
  name: string
  icon?: string
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

const Toolbox = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "C#" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "ASP.NET" },
        { name: "React" },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MSSQL" },
        { name: "Elastic Search" },
      ],
    },
    {
      title: "Tools & IDEs",
      icon: "🛠️",
      skills: [
        { name: "Visual Studio" },
        { name: "VS Code" },
        { name: "HeidiSQL" },
        { name: "DBeaver" },
        { name: "Postman" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      skills: [
        { name: "AWS" },
        { name: "IIS" },
      ],
    },
    {
      title: "Version Control",
      icon: "🔀",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "SVN" },
      ],
    },
    {
      title: "APIs & Integration",
      icon: "🔌",
      skills: [
        { name: "REST APIs" },
        { name: "Windows PowerShell" },
      ],
    },
  ]

  return (
    <div className="toolbox-page">
      <div className="toolbox-header">
        <h1>Technical Toolbox</h1>
        <blockquote className="toolbox-quote">
          "It is a mistake to think you can solve any major problems just with
          potatoes."
          <cite>— Douglas Adams</cite>
        </blockquote>
        <p className="toolbox-intro">
          A comprehensive overview of technologies, tools, and frameworks I work with
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="toolbox-footer">
        <p>
          Always learning and expanding my toolkit with new technologies and best practices.
        </p>
      </div>
    </div>
  )
}

export default Toolbox