import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import myPicture from "../assets/mypicture.png";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  const roles = [
    "AI & ML Engineer",
    "React Developer",
    "Problem Solver",
    "Future AIML Engineer",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    let roleIndex = 0;
    let charIndex = 0;

    const typing = setInterval(() => {
      const currentRole = roles[roleIndex];

      if (charIndex <= currentRole.length) {
        setText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
        }, 1000);
      }
    }, 90);

    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const createRipple = (e) => {
      const ripple = document.createElement("div");

      ripple.className = "clickRipple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", createRipple);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "click",
        createRipple
      );
    };
  }, []);

  const projects = [

    {
  id: "01",
  title: "Jarvis Voice Assistant",
  route: "/assistant",
  category: "Artificial Intelligence",
  description:
    "Voice-controlled assistant built with Speech Recognition and Speech Synthesis APIs."
},
    {
      id: "02",
      title: "Weather App",
      route: "/weather",
      category: "Web Application",
      description:
        "Real-time forecasting platform powered by API integrations and modern React architecture.",
    },
    {
      id: "03",
      title: "Notes App",
      route: "/notes",
      category: "Productivity",
      description:
        "Beautiful note management system focused on speed, simplicity and usability.",
    },
    {
      id: "04",
      title: "Task Tracker",
      route: "/tracker",
      category: "Productivity",
      description:
        "Daily productivity tracker with task organization and progress management.",
    },
    {
      id: "05",
      title: "Calculator",
      route: "/calculator",
      category: "Utility",
      description:
        "Clean React-based calculator built using reusable components and state management.",
    },
    {
      id: "06",
      title: "Interactive Map",
      route: "/map",
      category: "Maps",
      description:
        "Location-based project integrating mapping services and search functionality.",
    },
    {
      id: "07",
      title: "Counter App",
      route: "/counter",
      category: "React Fundamentals",
      description:
        "Simple but effective React state management demonstration project.",
    },
    {
      id: "08",
      title: "Palindrome Checker",
      route: "/palindrome",
      category: "Algorithm",
      description:
        "Classic palindrome checker built with React showcasing string manipulation and logic.",
    },
    {
      id: "09",
      title: "Stopwatch",
      route: "/stopwatch",
      category: "React Fundamentals",
      description:
        "Functional stopwatch application demonstrating React hooks and state management.",
    },
    {
      id: "10",
      title: "Theme Studio",
      route: "/theme",
      category: "React Fundamentals",
      description:
        "Dynamic theme switcher project showcasing React context and styling techniques.",
    },
    {
      id: "11",
      title: "Armstrong Number Checker",
      route: "/armstrong",
      category: "Algorithm",
      description:
        "Simple React application to check if a number is an Armstrong number.",
    },
    {
      id: "12",
      title: "Tic Tac Toe",
      route: "/tictactoe",
      category: "Game Development",
      description:
        "Classic Tic Tac Toe game built with React showcasing state management, conditional rendering and interactive gameplay.",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "C++",
    "C",
    "Java",
    "Machine Learning",
    "Artificial Intelligence",
    "Git",
    "GitHub",
    "SQL",
    "Problem Solving",
    "Data Structures",
    "Algorithms",
    "REST APIs",
  ];

  if (loading) {
    return (
      <div className="loaderScreen">
        <div className="loaderContent">
          <h1>SHAGUN GUPTA </h1>
          <div className="loaderBar">
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flashPage">
      <div
        className="cursorGlow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      <div className="gridBackground"></div>

      <div className="noiseOverlay"></div>

      <nav className="navbarGlass">
        <div className="logoText">
          SHAGUN GUPTA 
        </div>

        <div className="navMenu">
         <a href="#home">Home</a>
          <a href="#about">About</a>
           <a href="#projects">Projects</a>
           <a href="#skills">Skills</a>
         <a href="#contact">Contact</a>
          </div>
         </nav>
            {/* HERO SECTION */}

      <section
  id="home"
  className="heroSection"
>

        <div className="heroLeft">

          <div className="statusBadge">
            <span></span>
            Available for Opportunities
          </div>

          <h1 className="mainHeading">
            Building
            <br />
            Intelligent
            <br />
            Digital
            <br />
            Experiences
          </h1>

          <div className="typingRole">
            {text}
          </div>

          <p className="heroDescription">
            Passionate about Artificial
            Intelligence, Machine Learning,
            React Development and creating
            modern digital experiences with
            clean UI, performance-focused
            architecture and impactful user
            experiences.
          </p>

          <div className="heroButtons">

            <Link to="/profile">
              <button className="primaryButton">
                View Profile
              </button>
            </Link>

            <Link to="/resume">
              <button className="secondaryButton">
                Resume
              </button>
            </Link>

          </div>

        </div>

        <div className="heroRight">

          <div className="imageContainer">

            <div className="imageGlow"></div>

            <img
              src={myPicture}
              alt="Shagun Gupta"
              className="profileImage"
            />

            
          </div>

        </div>

      </section>

      {/* FLASH STYLE STATS */}

      <section className="statsGrid">

        <div className="statBox">
         <h2>10+</h2>
          <p>Technical Skills</p>
        </div>

        <div className="statBox">
          <h2>5+</h2>
         <p>Certifications</p>
        </div>

        <div className="statBox">
        <h2>100%</h2>
      <p>Passion Driven</p>
      </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="aboutSection"
      >

        <div className="sectionLabel">
          ABOUT
        </div>

        <h2 className="sectionTitle">
          Creating experiences where
          technology, design and innovation
          work together seamlessly.
        </h2>

        <p>
          I'm a Computer Science student
          specializing in Artificial
          Intelligence and Machine Learning.
          My passion lies in building
          high-quality digital products,
          learning emerging technologies,
          solving complex problems and
          creating applications that people
          genuinely enjoy using.
        </p>

      </section>
{/* FEATURED PROJECTS */}

<section
  id="projects"
  className="projectsSection"
>
  <div className="sectionLabel">
    FEATURED PROJECTS
  </div>

  <h2 className="bigSectionHeading">
    Selected Work &
    <br />
    Creative Experiments
  </h2>

  <p className="sectionDescription">
    A collection of projects showcasing my
    journey in React Development, Artificial
    Intelligence, Problem Solving and UI
    Engineering.
  </p>

  <div className="projectsList">
    {projects.map((project) => (
      <Link
        key={project.id}
        to={project.route}
        className="projectRow"
      >
        <div className="projectNumber">
          {project.id}
        </div>

        <div className="projectContent">
          <span className="projectCategory">
            {project.category}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <div className="arrow">
          →
        </div>
      </Link>
    ))}
  </div>
</section>

{/* SKILLS */}

<section
  id="skills"
  className="skillsSection"
>
  <div className="sectionLabel">
    TECH STACK
  </div>

  <h2 className="bigSectionHeading">
    Technologies I Work With
  </h2>

  <p className="sectionDescription">
    Continuously learning and building with
    modern technologies across Frontend,
    Artificial Intelligence and Software
    Development.
  </p>

  <div className="marquee">
    <div className="marqueeTrack">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}

      {skills.map((skill) => (
        <span key={`${skill}-copy`}>
          {skill}
        </span>
      ))}
    </div>
  </div>

  <div className="skillsGrid">
    {skills.map((skill) => (
      <div
        key={skill}
        className="skillCard"
      >
        {skill}
      </div>
    ))}
  </div>
</section>

{/* ACHIEVEMENTS */}

<section className="statsGrid">
  <div className="statBox">
    <h2>4+</h2>
    <p>Projects Built</p>
  </div>

  <div className="statBox">
    <h2>10+</h2>
    <p>Technical Skills</p>
  </div>

  <div className="statBox">
    <h2>5+</h2>
    <p>Certifications</p>
  </div>

</section>

{/* PHILOSOPHY */}

<section className="philosophySection">
  <div className="sectionLabel">
    PHILOSOPHY
  </div>

  <h2 className="sectionTitle">
    Design should feel invisible.
    Technology should feel powerful.
    Experiences should feel memorable.
  </h2>

  <p>
    I believe great products are created
    where technology, creativity and user
    experience meet. Every project I build
    focuses on simplicity, performance and
    meaningful impact.
  </p>
</section>

{/* CONTACT */}

<section
  id="contact"
  className="contactSection"
>
  <div className="contactGlow"></div>

  <div className="contactContent">
    <div className="sectionLabel">
      CONTACT
    </div>

    <h2>
      Let's Build
      <br />
      Something Amazing.
    </h2>

    <p>
      Open for internships, hackathons,
      collaborations, freelance projects and
      exciting opportunities in AI, ML and
      Software Development.
    </p>

    <div className="contactButtons">
      <a
        href="mailto:shagungupta1405@gmail.com"
        className="contactPrimary"
      >
        Let's Talk
      </a>

      <a
        href="https://www.linkedin.com/in/shagun-gupta14/"
        target="_blank"
        rel="noreferrer"
        className="contactSecondary"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>

{/* SOCIAL LINKS */}

<section className="socialSection">
  <a
    href="https://github.com/shagung14"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/shagun-gupta14/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:shagungupta1405@gmail.com">
    Email
  </a>
</section>

{/* FOOTER */}

<footer className="dashboardFooter">
  <div className="footerTop">
    <div>
      <h3>SHAGUN GUPTA</h3>

      <p>
        AI & ML Student • React Developer •
        Future Software Engineer
      </p>
    </div>

    <div className="footerLinks">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <div className="footerBottom">
    © 2026 Shagun Gupta • Designed &
    Developed with React ⚡
  </div>
</footer>

</main>
);
}