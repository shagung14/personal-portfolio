import { useEffect, useState } from "react";
import "./skills.css";
import Navbar from "../components/Navbar";

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  const skillData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
      ],
    },
    {
      category: "Programming",
      skills: [
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C", level: 65 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="skills-container">
        <h1>📈 My Skills</h1>
        <h2>Technical Proficiencies & Expertise</h2>
        <p>
          Explore my skill set across frontend development, programming
          languages, and essential tools.
        </p>

        {skillData.map((section, index) => (
          <div key={index} className="skills-section">
            <h2>{section.category}</h2>

            {section.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;