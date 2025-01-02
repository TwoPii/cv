import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Work from './pages/work/Work';
import TopBar from './components/top-bar/TopBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/*<Route path="/work" element={<Work />} />*/}
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
