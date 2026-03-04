import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="home-page">

      <Navbar />

      <section className="hero">

        <div className="hero-text">
          <h1>AI Mood Detection & Music Recommendation</h1>

          <p>
            Mood-Sync uses facial expression detection to identify your mood
            and instantly recommends songs that match your emotions.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">Detect My Mood</Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Detected Mood</h3>

          <div className="mood">😊 Happy</div>

          <p>Recommended Songs</p>

          <ul>
            <li>Blinding Lights</li>
            <li>Levitating</li>
            <li>Shape of You</li>
          </ul>
        </div>

      </section>

      <section className="how">

        <h2>How Mood-Sync Works</h2>

        <div className="steps">

          <div className="step">
            <div className="icon">📷</div>
            <h3>Face Detection</h3>
            <p>Camera captures facial expressions in real time.</p>
          </div>

          <div className="step">
            <div className="icon">🧠</div>
            <h3>Emotion Analysis</h3>
            <p>AI model identifies emotions like happy, sad or neutral.</p>
          </div>

          <div className="step">
            <div className="icon">🎵</div>
            <h3>Music Recommendation</h3>
            <p>Personalized songs based on detected mood.</p>
          </div>

        </div>

      </section>

      <section className="features">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Real-Time AI Detection</h3>
            <p>Emotion recognition using facial analysis.</p>
          </div>

          <div className="feature-card">
            <h3>Mood-Based Playlists</h3>
            <p>Dynamic music suggestions based on mood.</p>
          </div>

          <div className="feature-card">
            <h3>Responsive Web App</h3>
            <p>Works smoothly on mobile and desktop devices.</p>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>Start Detecting Your Mood</h2>

        <Link to="/login" className="primary-btn">
          Try Mood-Sync
        </Link>

      </section>

      <footer>
        <p>© 2026 Mood-Sync AI</p>
      </footer>

    </main>
  );
};

export default Home;