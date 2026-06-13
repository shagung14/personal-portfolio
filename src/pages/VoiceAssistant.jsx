import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function VoiceAssistant() {
  const navigate = useNavigate();

  const [listening, setListening] = useState(false);
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const speak = (text) => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };

  const askAI = async (message) => {
    try {
      setResponse("Thinking...");

      const res = await fetch(
        "http://localhost:5000/ask",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await res.json();

      setResponse(data.reply);
      speak(data.reply);
    } catch (error) {
      console.error(error);

      setResponse(
        "Unable to contact AI backend."
      );
    }
  };

  const handleCommand = async (text) => {
    if (
      text.includes("open calculator")
    ) {
      speak("Opening Calculator");
      navigate("/calculator");
      return;
    }

    if (
      text.includes("open notes")
    ) {
      speak("Opening Notes");
      navigate("/notes");
      return;
    }

    if (
      text.includes("open resume")
    ) {
      speak("Opening Resume");
      navigate("/resume");
      return;
    }

    if (
      text.includes("open weather")
    ) {
      speak("Opening Weather");
      navigate("/weather");
      return;
    }

    if (
      text.includes("open dashboard")
    ) {
      speak("Opening Dashboard");
      navigate("/dashboard");
      return;
    }

    if (
      text.includes("open counter")
    ) {
      speak("Opening Counter");
      navigate("/counter");
      return;
    }

    await askAI(text);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Use Google Chrome or Edge."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setListening(true);

    recognition.start();

    recognition.onstart = () => {
      setResponse(
        "🎤 Listening..."
      );
    };

    recognition.onresult = (
      event
    ) => {
      const transcript =
        event.results[0][0].transcript;

      setCommand(transcript);

      handleCommand(
        transcript.toLowerCase()
      );
    };

    recognition.onerror = (
      event
    ) => {
      setResponse(
        `Error: ${event.error}`
      );

      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <>
      <Navbar />

      <div style={container}>
        <div style={glassBox}>
          <h1 style={heading}>
            🎙️ Jarvis AI Assistant
          </h1>

          <p style={subHeading}>
            Ask anything...
            <br />
            Open calculator
            <br />
            Open notes
            <br />
            Tell me a joke
            <br />
            Who is the Prime
            Minister of India?
          </p>

          <button
            style={{
              ...listenBtn,
              background: listening
                ? "#00ffb4"
                : "#00cc90",
            }}
            onClick={startListening}
          >
            {listening
              ? "🎤 Listening..."
              : "Start Listening"}
          </button>

          <div style={resultCard}>
            <h3>Command</h3>

            <p>
              {command ||
                "Waiting..."}
            </p>
          </div>

          <div style={resultCard}>
            <h3>Response</h3>

            <p>
              {response ||
                "Waiting..."}
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "35px",
            }}
          >
            <Link
              to="/dashboard"
              style={backBtn}
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  paddingTop: "140px",
  paddingBottom: "60px",
};

const glassBox = {
  width: "90%",
  maxWidth: "900px",
  padding: "40px",
  borderRadius: "28px",
  background:
    "rgba(255,255,255,.04)",
  border:
    "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(25px)",
  boxShadow:
    "0 30px 80px rgba(0,255,180,.08)",
  color: "white",
};

const heading = {
  textAlign: "center",
  fontSize: "3.5rem",
  fontWeight: "900",
};

const subHeading = {
  textAlign: "center",
  color: "#00ffb4",
  lineHeight: "1.8",
  marginBottom: "30px",
};

const listenBtn = {
  width: "100%",
  padding: "18px",
  borderRadius: "999px",
  border: "none",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "16px",
  marginBottom: "25px",
};

const resultCard = {
  padding: "20px",
  marginTop: "15px",
  borderRadius: "20px",
  background:
    "rgba(255,255,255,.04)",
  border:
    "1px solid rgba(255,255,255,.08)",
};

const backBtn = {
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 32px",
  borderRadius: "999px",
  background:
    "rgba(255,255,255,.04)",
  border:
    "1px solid rgba(255,255,255,.08)",
  color: "white",
  fontWeight: "700",
};