import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Tracker() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];

    updated[index].completed =
      !updated[index].completed;

    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(
      tasks.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="checker-card">

          <h1>      Task Tracker</h1>

          <h3>
            Organize your daily work and stay productive.
          </h3>

          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button
            className="btn"
            onClick={addTask}
          >
            Add Task
          </button>

          <ul className="task-list">

            {tasks.map((t, i) => (
              <li
                key={i}
                className={
                  t.completed
                    ? "done"
                    : ""
                }
              >
                <span
                  onClick={() =>
                    toggleTask(i)
                  }
                >
                  {t.text}
                </span>

                <button
                  onClick={() =>
                    deleteTask(i)
                  }
                >
                  ❌
                </button>
              </li>
            ))}

          </ul>

          <Link
            to="/"
            className="back-btn"
          >
            ⬅ Back to Dashboard
          </Link>

        </div>

      </div>
    </>
  );
}