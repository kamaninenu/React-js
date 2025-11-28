import React, { useState } from "react";
import "./Register.css"; // ✅ Correct

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Registered Successfully!");
    window.location.href = "/home";
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
