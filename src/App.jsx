import { useEffect, useState } from "react";
import "./index.css";
import PhoneFrame from "./components/PhoneFrame/PhoneFrame";

function App() {
  const [screen, setScreen] = useState("landing");
  const [memory, setMemory] = useState("");

  useEffect(() => {
    if (screen === "scanning") {
      const timer = setTimeout(() => {
        setScreen("review");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <PhoneFrame>
      {screen === "landing" && (
        <div className="app">
          <h1>Momento</h1>

          <p className="tagline">
            Some memories deserve more than a photo.
          </p>

          <p className="description">
            Turn your favorite experiences into beautiful keepsakes you'll revisit
            forever.
          </p>

          <button onClick={() => setScreen("upload")}>
            Create My First Memory
          </button>
        </div>
      )}

      {screen === "upload" && (
        <div className="page">
          <button className="backButton" onClick={() => setScreen("landing")}>
            ← Back
          </button>

          <h2>Create Memory</h2>

          <p className="subtitle">
            Upload a screenshot or take a picture of your ticket.
          </p>

          <div className="uploadCard">
            <div className="emoji">🎟️</div>
            <h3>Upload Screenshot</h3>
            <p>Concerts, sports, flights, museums, movies...</p>
          </div>

          <div className="divider">OR</div>

          <div className="uploadCard">
            <div className="emoji">📷</div>
            <h3>Take a Picture</h3>
            <p>Use your camera to scan a ticket.</p>
          </div>

          <button
            style={{ marginTop: "40px" }}
            onClick={() => setScreen("scanning")}
          >
            Continue
          </button>
        </div>
      )}

      {screen === "scanning" && (
        <div className="app">
          <div className="spinner"></div>

          <h2>Analyzing Ticket...</h2>

          <p className="description">
            Looking for event details...
          </p>
        </div>
      )}

      {screen === "review" && (
        <div className="page">
          <h2>Review Ticket</h2>

          <div className="uploadCard">
            <h3>Avenged Sevenfold | North American Tour</h3>

            <p>📍 Ball Arena Denver, CO.</p>
            <p>📅 August 23, 2026</p>
            <p>💺 Section 118 · Row 14 · Seat 8</p>
          </div>

          <button onClick={() => setScreen("photo")}>
            Everything Looks Good
          </button>
        </div>
      )}

      {screen === "photo" && (
        <div className="page">
          <h2>Choose Hero Photo</h2>

          <p className="subtitle">
            This will become the cover of your memory.
          </p>

          <div className="uploadCard">
            <div className="emoji">🖼️</div>

            <h3>Your Favorite Photo</h3>

            <p>Photo upload coming soon.</p>
          </div>

          <button onClick={() => setScreen("memory")}>
            Continue
          </button>
        </div>
      )}

      {screen === "memory" && (
        <div className="page">
          <h2>Tell Your Story</h2>

          <p className="subtitle">
            What made this moment unforgettable?
          </p>

          <textarea
            rows="8"
            placeholder="Write about this memory..."
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
          />

          <button
            style={{ marginTop: "30px" }}
            onClick={() => setScreen("keepsake")}
          >
            Preview Keepsake
          </button>
        </div>
      )}

      {screen === "keepsake" && (
        <div className="page">
          <h2>Your Keepsake</h2>

          <div className="keepsakeCard">
            <div className="photoPlaceholder">
              Hero Photo
            </div>

            <h3>Avenged Sevenfold | North American Tour</h3>

            <p>Ball Arena Denver, CO.</p>

            <p>August 23, 2026</p>

            <hr />

            <p className="memoryText">
              {memory || "No story written yet."}
            </p>
          </div>

          <button onClick={() => setScreen("timeline")}>
            Save Memory
          </button>
        </div>
      )}

      {screen === "timeline" && (
        <div className="page">
          <h2>My Timeline</h2>

          <p className="subtitle">
            Your memories will live here.
          </p>

          <div className="uploadCard">
            <div className="photoPlaceholder">
              Hero Photo
            </div>

            <h3> Avenged Sevenfold | North American Tour</h3>

            <p>August 23, 2026</p>

            <button
              style={{ marginTop: "20px" }}
              onClick={() => setScreen("landing")}
            >
              Create Another Memory
            </button>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

export default App;