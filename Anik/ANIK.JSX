import React, { useEffect, useState } from "react";

const roles = [
  "Founder & Owner — Roy Car Care",
  "Data Scientist & Analyst",
  "Voice Artist & Singer",
  "Designer & Editor"
];

export default function FounderPortfolio() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* PHOTO */}
        <div style={styles.photoWrap}>
          <img
            src="/your-photo.jpg"
            alt="Anik"
            style={styles.photo}
          />
        </div>

        {/* NAME */}
        <h1 style={styles.name}>Anik</h1>

        {/* DYNAMIC ROLE */}
        <p style={styles.role}>{roles[roleIndex]}</p>

        {/* TAGLINE */}
        <p style={styles.tagline}>
          Driven by data. Powered by creativity. Built for impact.
        </p>

        {/* SKILLS */}
        <div style={styles.skills}>
          <span style={styles.skill}>🚘 Roy Car Care</span>
          <span style={styles.skill}>💻 Data Science</span>
          <span style={styles.skill}>🎙 Voice Artist</span>
          <span style={styles.skill}>🎬 Designer & Editor</span>
        </div>

        {/* PHILOSOPHY */}
        <p style={styles.philosophy}>
          "I don't chase trends. I build systems."
        </p>

        {/* LINKS */}
        <div style={styles.links}>
          <a href="#" style={styles.link}>🌐</a>
          <a href="#" style={styles.link}>📷</a>
          <a href="#" style={styles.link}>💼</a>
        </div>
      </div>
    </div>
  );
}

/* =========================
   STYLES (INLINE – CLEAN)
========================= */

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 20% 20%, #0b2a33, transparent 40%), linear-gradient(180deg, #000, #020202)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Poppins, sans-serif"
  },

  card: {
    width: "92%",
    maxWidth: 420,
    padding: "38px 34px",
    borderRadius: 22,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.18)",
    textAlign: "center",
    boxShadow: "0 30px 60px rgba(0,0,0,0.75)"
  },

  photoWrap: {
    width: 110,
    height: 110,
    margin: "0 auto 20px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid rgba(0,234,255,0.4)",
    boxShadow: "0 0 25px rgba(0,234,255,0.25)"
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  name: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 6
  },

  role: {
    fontSize: 14,
    color: "#9fe7f0",
    minHeight: 18,
    transition: "all 0.5s ease"
  },

  tagline: {
    marginTop: 16,
    fontSize: 13,
    fontStyle: "italic",
    opacity: 0.85
  },

  skills: {
    marginTop: 24,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12
  },

  skill: {
    padding: "8px 16px",
    borderRadius: 20,
    fontSize: 12,
    background:
      "linear-gradient(135deg, rgba(0,234,255,0.3), rgba(255,255,255,0.12))",
    border: "1px solid rgba(255,255,255,0.25)"
  },

  philosophy: {
    marginTop: 26,
    fontSize: 12,
    opacity: 0.75
  },

  links: {
    marginTop: 22,
    display: "flex",
    justifyContent: "center",
    gap: 18
  },

  link: {
    fontSize: 18,
    textDecoration: "none",
    color: "#00eaff",
    transition: "transform 0.3s ease"
  }
};

