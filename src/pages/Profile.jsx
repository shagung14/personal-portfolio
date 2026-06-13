import "./profile.css";
import profileImg from "../assets/mypicture.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="profile-container">

        {/* LinkedIn Style Banner */}
        <div className="profile-banner"></div>

        {/* Profile Card */}
        <div className="profile-card">

          {/* Profile Image */}
          <div className="profile-image-box">
            <img src={profileImg} alt="profile" />
          </div>

          {/* Main Content */}
          <div className="profile-content">

            <h1> Shagun Gupta </h1>
            <h3 className="title">
              AIML Student | React Developer | B.Tech CSE (AI & ML)
            </h3>

            <p className="location">📍 Prayagraj, Uttar Pradesh, India</p>

            {/* Contact */}
            <div className="profile-info">
              <p>📧 shagungupta1405@email.com</p>
              <p>📞 +91 7081609982</p>
              <p>🔗 linkedin.com/in/shagun-gupta14</p>
              <p>🔗 github.com/shagung14</p>
            </div>

            {/* About */}
            <div className="profile-section">
              <h2>About</h2>

              <p>
                I am a B.Tech Computer Science student specializing in
                Artificial Intelligence and Machine Learning. I enjoy building
                real-world applications using React, Java, Python and modern
                web technologies. My focus is on creating clean UI designs and
                solving practical problems through technology.
              </p>
            </div>

            {/* Skills */}
            <div className="profile-section">
              <h2>Skills</h2>

              <div className="skills">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Java</span>
                <span>Python</span>
                <span>C</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="profile-actions">
              <button onClick={() => navigate("/resume")}>
                📄 View Resume
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;