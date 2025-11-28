import React from "react";
import "./../styles/Header.css";

export default function Header({ mode, toggleMode }) {
  return (
    <header className={`header ${mode}`}>
      <div className="logo">
        <h2>TODO✅</h2>
      </div>
      <nav>
        <a href="/home">Home</a>
        <a href="#">About</a>
        <a href="#">All Todos</a>
      </nav>
      <div>
        <button onClick={toggleMode} className="toggle-btn">
          {mode === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
