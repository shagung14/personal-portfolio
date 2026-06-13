import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Notes() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!title.trim() || !text.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      text,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div style={outer}>
        <div style={glassBox}>

          <div style={{ textAlign: "center" }}>
            <h1 style={heading}>Smart Notes</h1>
            <h2 style={subHeading}>Organize your thoughts</h2>
            <p style={{ color: "#bdbdbd" }}>
              Create, search and manage notes easily
            </p>

            <input
              style={input}
              placeholder="🔍 Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* ADD NOTE */}
          <div style={noteInputCard}>
            <input
              style={input}
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              style={textarea}
              placeholder="Write your note..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button style={btn} onClick={addNote}>
              ➕ Add Note
            </button>
          </div>

          {/* NOTES GRID */}
          <div style={grid}>
            {filteredNotes.map((note) => (
              <div key={note.id} style={noteCard}>
                <h3>{note.title}</h3>
                <p>{note.text}</p>

                <div style={footer}>
                  <small>{note.date}</small>
                  <button
                    style={deleteBtn}
                    onClick={() => deleteNote(note.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BACK BUTTON (UPDATED FLASH STYLE) */}
          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <Link
              to="/dashboard"
              style={backBtn}
              onMouseEnter={(e) => {
                e.target.style.background = "#00ffb4";
                e.target.style.color = "black";
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow =
                  "0 0 25px rgba(0,255,180,.35)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background =
                  "rgba(255,255,255,.04)";
                e.target.style.color = "white";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 8px 30px rgba(0,0,0,.25)";
              }}
            >
              ← Back to Dashboard
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

/* OUTER FIX (navbar spacing fixed) */
const outer = {
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  paddingTop: "140px",
  paddingBottom: "60px",
};

/* FLASH GLASS BOX */
const glassBox = {
  width: "90%",
  maxWidth: "1100px",
  padding: "40px",
  borderRadius: "28px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(25px)",
  boxShadow: "0 30px 80px rgba(0,255,180,.08)",
  color: "white",
};

/* HEADINGS */
const heading = {
  fontSize: "4rem",
  fontWeight: "900",
  background: "linear-gradient(180deg,#ffffff,#bdbdbd)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subHeading = {
  color: "#00ffb4",
  fontSize: "1.2rem",
  marginBottom: "10px",
};

/* INPUTS */
const input = {
  width: "100%",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "14px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  color: "white",
  outline: "none",
};

const textarea = {
  width: "100%",
  minHeight: "130px",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "14px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  color: "white",
  outline: "none",
};

/* CARD */
const noteInputCard = {
  marginTop: "30px",
  padding: "25px",
  borderRadius: "24px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(20px)",
};

const btn = {
  padding: "14px 28px",
  borderRadius: "999px",
  border: "none",
  background: "#00ffb4",
  color: "black",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 0 30px rgba(0,255,180,.25)",
};

/* GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "24px",
  marginTop: "35px",
};

/* NOTE CARD */
const noteCard = {
  padding: "24px",
  borderRadius: "24px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(20px)",
  transition: ".35s",
};

/* FOOTER */
const footer = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

const deleteBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "white",
};

/* BACK BUTTON */
const backBtn = {
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 32px",
  borderRadius: "999px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(25px)",
  color: "white",
  fontWeight: "700",
  boxShadow: "0 8px 30px rgba(0,0,0,.25)",
  transition: "all .35s ease",
};

export default Notes;