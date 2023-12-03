import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    // Your registration logic goes here

    try {
      // Simulate asynchronous registration logic (e.g., API call)
      // Replace this with your actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to home page after successful registration
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure (show error message, etc.)
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="login-link" onClick={handleLogin}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
