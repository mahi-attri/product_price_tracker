import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> {/* Menu component will still need to be updated to work with React Router */}
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
