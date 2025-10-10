import React from "react"
import "./EducationExperience.css"

interface Experience {
  company: string
  role: string
  location: string
  period: string
  description: string[]
  stack?: string
}

interface Education {
  school: string
  degree?: string
  location: string
  period: string
  gpa: string
  highlights?: string[]
}

const EducationExperience = () => {
  const experiences: Experience[] = [
    {
      company: "Idaho National Laboratory",
      role: "Software Developer II",
      location: "Idaho Falls, ID",
      period: "Oct. 2021 - Present",
      description: [
        "Lead developer on Acquisition Transformation Initiative. Designed, built, and integrated a new procurement software for purchasing laboratory materials through partnered vendors",
        "Built multi-part API service to obtain and build form documents. Circumvented feature limitations in external applications through creative problem solving",
        "Maintenance/feature enhancements to various internal lab applications as part of the Integration Services team",
      ],
      stack: "C#, .NET Core, MVC, React, Python, Oracle, SQL Server",
    },
    {
      company: "CVO Solutions, Seikosoft LLC",
      role: "Software Developer II",
      location: "Idaho Falls, ID",
      period: "Apr. 2019 - Oct. 2021",
      description: [
        "Developed enterprise level applications for interstate commercial vehicle operations. Improved code reusability and efficiency",
        "Created new marketable features and integrations including interactive geographical info map",
        "CVIEW interfaces for law enforcement, UCR registration website, CVSA Emergency Declaration website and IRP Data Repository",
      ],
      stack: "C#, React, .NET Core, PostgreSQL, AWS",
    },
    {
      company: "Simplicity Collect, Seikosoft LLC",
      role: "Lead Developer",
      location: "Idaho Falls, ID",
      period: "Jun. 2016 - Apr. 2019",
      description: [
        "Developed and maintained large, complex financial web applications using webforms, jQuery, .NET Framework and MySQL as the primary developer",
        "Custom development work involving debt collection workflows and financial operations. Integrated with 3rd party vendors",
        "Investigated and addressed exceptions and issues; managed deployment and AWS DevOps; improved code design and efficiency in data importing and reporting",
      ],
      stack: "C#, Web Forms, .NET Framework, MySQL, AWS",
    },
    {
      company: "Idaho State University",
      role: "Computer Science Tutor & Grader",
      location: "Pocatello, ID",
      period: "Feb. 2016 - May 2016",
      description: [
        "Tutored students in basic to advanced informatics and computer science skills",
        "Graded classwork and tests",
      ],
    },
  ]

  const education: Education[] = [
    {
      school: "Idaho State University",
      degree: "Bachelor's Degree in Physics",
      location: "Pocatello, ID",
      period: "May 2016",
      gpa: "3.8",
      highlights: [
        "Minors in Computer Science & Informatics",
        "Dean's List",
        "Relevant Coursework: Calculus I-III, Linear Algebra, Differential Equations, Engineering Physics I-II, Modern Physics, Advanced Modern Physics, Computer Science and Programming I-II, Computer Organization and Design, Data Structures and Algorithms, Systems Analysis and Design, Networking and Virtualization, Database Management, Systems Development and Implementation Methodologies",
      ],
    },
    {
      school: "Jerome High School",
      location: "Jerome, ID",
      period: "Graduated 2012",
      gpa: "4.0",
      highlights: ["Honors Society", "Valedictorian"],
    },
  ]

  return (
    <div className="edu-exp-page">
      <div className="page-header">
        <h1>Education & Experience</h1>
        <blockquote className="page-quote">
          "If I have seen further than others, it is by standing upon the shoulders of giants."
          <cite>— Isaac Newton</cite>
        </blockquote>
      </div>

      {/* Experience Section */}
      <section className="section">
        <div className="section-title">
          <span className="section-icon">💼</span>
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>
                  <div className="experience-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {exp.stack && (
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong> {exp.stack}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="section-title">
          <span className="section-icon">🎓</span>
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-header">
                <h3>{edu.school}</h3>
                <span className="edu-period">{edu.period}</span>
              </div>
              {edu.degree && <div className="edu-degree">{edu.degree}</div>}
              <div className="edu-details">
                <span className="edu-location">{edu.location}</span>
                <span className="edu-gpa">GPA: {edu.gpa}</span>
              </div>
              {edu.highlights && (
                <ul className="edu-highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume CTA */}
      <div className="resume-cta">
        <p>Want a traditional resume format?</p>
        <a 
          href="mailto:bryce.dgraham@outlook.com" 
          className="contact-button"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default EducationExperience