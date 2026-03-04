import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import "../styles/Auth.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleRegister({
        email,
        username,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  }

  return (
    <main className="register-page">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p>Create a new account to access the application.</p>
        <div className="credentials">
          <FormGroup
            label="Username"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormGroup
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormGroup
            label="Password"
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </main>
  );
};

export default Register;
