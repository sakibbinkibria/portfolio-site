// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ExperiencePage from "./components/ExperincePage/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import './styles.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Router>
      <div className="main-container">
        <Navigation />
        <Routes>
          <Route
            path="/"
            exact
            element={<LandingPage scrollToTop={scrollToTop} />}
          />
          <Route
            path="/about"
            element={<AboutPage scrollToTop={scrollToTop} />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage scrollToTop={scrollToTop} />}
          />
          <Route path="/projects" element={<ProjectsPage scrollToTop={scrollToTop} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
