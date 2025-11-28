import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/Theme.css";

export default function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <div className={`app ${mode}`}>
      <BrowserRouter>
        <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
