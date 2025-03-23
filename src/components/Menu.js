import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import profilePhoto from './2024-04-27-02-55-55-437.jpg';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Menu() {
  return (
    <div className="menu">
      <img src={profilePhoto} alt="Krishi Kumar Attri" className="profile-photo" />
      <div className="status">
        <span className="available-tag">Available for Work</span>
      </div>
      <nav className="menu-links">
        <Link to="/" className="menu-button">
          <FaHome /> Home
        </Link>
        <Link to="/about" className="menu-button">
          <FaUser /> About
        </Link>
        <Link to="/experience" className="menu-button">
          <FaBriefcase /> Experience
        </Link>
        <Link to="/projects" className="menu-button">
          <FaProjectDiagram /> Projects
        </Link>
        <Link to="/skills" className="menu-button">
          <FaCode /> Skills
        </Link>
        <Link to="/contact" className="menu-button">
          <FaCode /> Contact
        </Link>
      </nav>
      <div className="social-links">
        <div className="social-icon left">
          <FaLinkedin />
        </div>
        <div className="social-icon right">
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Menu;
