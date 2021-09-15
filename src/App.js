import React, {useState} from 'react';
import Bio from "./Bio"
import Socials from "./Socials"
import Projects from "./Projects"
import './App.css';

function App() {
  ///DECLARING STATE
  const [showBio,setShowBio] = useState(false);
  const [showProjects,setShowProjects] =  useState(false);
  const [showSocials,setShowSocials] = useState(false);

  function bioHandler(){
    setShowBio(!showBio)
    setShowProjects(false)
    setShowSocials(false)  
  }
  function projectsHandler(){
    setShowProjects(!showProjects)
    setShowBio(false)
    setShowSocials(false)  
  }

  
  function socialsHandler(){
    setShowSocials(!showSocials)  
    setShowProjects(false)
    setShowBio(false)
}


  return (
    <div className="App">
      <button className="navbar-btn" onClick ={bioHandler}n>about me</button >
      <button className="navbar-btn"  onClick ={projectsHandler}n>my work</button>
      <button className="navbar-btn"  onClick ={socialsHandler}n>get in touch</button>

      {showBio ? <Bio/> : null} 
      {showProjects ? <Projects/> : null} 
      {showSocials ? <Socials/> : null} 




    </div>
  );
}

export default App;
