import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./components/portfolio.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "dark";
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navbar
        activeSection={activeSection}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <AnimatePresence>
        <motion.div
          className="scroll-progress"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
