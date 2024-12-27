import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Work from './components/work/Work';

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
              <Link className="tab" to ="/">Welcome</Link>
              <Link className="tab" to ="/work">Work</Link>
              <Link className="tab" to ="/resume">Resume</Link>
              <Link className="tab" to ="/about">About</Link>
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
