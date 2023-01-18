import React, { useState } from 'react';
import './App.css';
import Bio from './Bio';
import Projects from './Projects';
import Socials from './Socials';

function App() {
  // Declare state variables
  const [showBio, setShowBio] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  // Event handlers for navigation buttons
  const handleBio = () => {
    setShowBio(true);
    setShowProjects(false);
    setShowSocials(false);
  };

  const handleProjects = () => {
    setShowProjects(true);
    setShowBio(false);
    setShowSocials(false);
  };

  const handleSocials = () => {
    setShowSocials(true);
    setShowProjects(false);
    setShowBio(false);
  };

  return (
    <div className="App">
      <button className="navbar-btn" onClick={handleBio}>About Me</button>
      <button className="navbar-btn" onClick={handleProjects}>My Work</button>
      <button className="navbar-btn" onClick={handleSocials}>Get in Touch</button>

      {showBio ? <Bio /> : null}
      {showProjects ? <Projects /> : null}
      {showSocials ? <Socials /> : null}
    </div>
  );
}

export default App;
