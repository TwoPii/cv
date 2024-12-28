import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Work from './pages/work/Work';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="header-bar">
            <div className="left">
              <span className="name">Genís Bosch</span>
              <span className="role">Software Developer</span>
            </div>
            <div className="right">
              <NavLink className={({ isActive}) => (isActive ? "selected tab": "tab")} to ="/">Welcome</NavLink>
              <NavLink className={({ isActive}) => (isActive ? "selected tab": "tab")}to ="/work">Work</NavLink>
              <NavLink className={({ isActive}) => (isActive ? "selected tab": "tab")} to ="/resume">Resume</NavLink>
              <NavLink className={({ isActive}) => (isActive ? "selected tab": "tab")} to ="/about">About</NavLink>
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
