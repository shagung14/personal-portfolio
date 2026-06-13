import Navbar from "../components/Navbar";
import "./resume.css";
import profileImg from "../assets/mypicture.png";

export default function Resume() {

  const downloadResume = () => {
    window.print();
  };

  return (
    <>
      <Navbar />

      <div className="resume-container">

        {/* ✅ DOWNLOAD BUTTON FIXED */}
        <button onClick={downloadResume} className="download-btn">
          ⬇ Download Resume
        </button>

        <div className="resume-card">

          {/* HEADER WITH IMAGE */}
          <div className="resume-header">
            <img src={profileImg} alt="profile" className="resume-img" />
            <div>
              <h1>Shagun Gupta</h1>
              <p>Email: shagungupta1405@email.com</p>
              <p>Phone: +91 7081609982</p>
              <p>Location: Prayagraj Uttaar Pradesh</p>
              <p>https://www.linkedin.com/in/shagun-gupta14/</p>

            </div>
          </div>

          {/* EDUCATION TABLE */}
          <section>
            <h2>🎓 Education</h2>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Institution</th>
                  <th>Year</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B.Tech CSE (AI & ML)</td>
                  <td>United College of Engineering and Research</td>
                  <td>2024 - Present</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Intermediate</td>
                  <td>Ewing Christian Public School</td>
                  <td>2023-2024</td>
                  <td>68.2%</td>
                </tr>
                <tr>
                  <td>High School</td>
                  <td>Ewing Christian Public School</td>
                  <td>2021-2022</td>
                  <td>89.2%</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* SKILLS */}
          <section>
            <h2>🛠 Skills</h2>
            <p>React, C, HTML, CSS, Java, Python</p>
            <p>Leadership, Time Management</p>
          </section>

          {/* PROJECTS */}
          <section>
            <h2>🚀 Projects</h2>
            <ul>
              <li>Portfolio Dashboard</li>
              <li>Language Detector</li>
              <li>Shiksha Saathi (Personalized Learning Assistance)</li>
            </ul>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h2>💼 Experience</h2>
            <p>Fresher | Actively building real-world projects</p>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h2>📜 Certifications</h2>
            <table>
              <thead>
                <tr>
                  <th>Certification</th>
                  <th>Platform</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NPTEL (Introduction to Internet of Things)</td>
                  <td>NPTEL</td>
                  <td>JAN-APR 2026</td>
                </tr>
                <tr>
                  <td>NPTEL (Mobile VR & AI)</td>
                  <td>NPTEL</td>
                  <td>AUG-SEP 2025</td>
                </tr>
                <tr>
                  <td>Personality Development Course</td>
                  <td>Freedom Employability Academy</td>
                  <td>FEB 2019-FEB 2020</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* INTERNSHIPS */}
          <section>
            <h2>💼 Internships</h2>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deloitte</td>
                  <td>Technology Job Simulation</td>
                  <td>APRIL 2026</td>
                </tr>
              </tbody>
            </table>
          </section>

        </div>
      </div>
    </>
  );
}