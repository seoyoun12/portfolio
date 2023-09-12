import './css/style.css';
import './css/default.css';
import React from 'react';
import { Routes,Route,NavLink } from 'react-router-dom'
import Skill from './component/Skill';
import Main from './component/Main';
import Project from './component/Project';
import About from './component/About';


function App() {
  return (
    <>
      <header id='header'>
        <h1 className='logo'>SeoYoun</h1>
        <nav className='gnb'>
          <NavLink to="/" className='gnb_btn'>MAIN</NavLink>
          <NavLink to="/about" className='gnb_btn'>ABOUT</NavLink>
          <NavLink to="/skill" className='gnb_btn'>SKILL</NavLink>
          <NavLink to="/project" className='gnb_btn'>PROJECT</NavLink>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;
