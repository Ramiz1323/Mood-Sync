import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import "../styles/Auth.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin({
        username,
        password,
      });
      navigate("/face");
    } catch (err) {
      console.error("Login failed:", err);
    }
  }

  return (
    <main className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Enter your credentials to access the application.</p>
        <div className="credentials">
          <FormGroup
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormGroup
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </main>
  );
};

export default Login;
