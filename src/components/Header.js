import React from 'react';
import Typing from 'react-typing-effect';
import './Header.css'; // Add your styles here
import rickrollImage from '../assets/Rickroll.jpg'; // Adjust path based on where you placed the image

const Header = () => {
  const introText = "Hello Everyone! I'm ";
  const bodyText = "Graduated with a B.S. in Mechanical Engineering from Villanova University with a minor in Mechatronics. Passionate about robotics and mechatronics, aspiring to pursue a master's in Robotics. My professional profile highlights strong analytical skills, determination, efficiency, adaptability, and curiosity. I excel independently and thrive in collaborative team environments, emphasizing effective communication and proactive problem-solving. Eager to expand my expertise and contribute meaningfully to both society and organizations.";

  const handleDownloadCV = () => {
    // Logic for downloading CV
  };

  const handleDownloadResume = () => {
    // Logic for downloading Resume
  };

  return (
    <div className="header">
      <h1>
        {introText}
        <Typing
          text={['Krishi.']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1000}
          cursorRenderer={cursor => <span>{cursor}</span>}
          displayTextRenderer={(text, i) => (
            <span style={{ color: 'green' }}>{text}</span>
          )}
        />
      </h1>
      <p>{bodyText}</p>
      <div className="buttons">
        <button onClick={handleDownloadCV}>Download CV</button>
        <button onClick={handleDownloadResume}>Download Resume</button>
      </div>
      <div className="location">
        <p className="location-text">New Delhi, India</p>
        <div className="dotted-line"></div>
      </div>
      <div className="more-about">
        <button onClick={() => window.location.href = '/about'}>More about me</button>
      </div>

      {/* Part 2: Recent Experiences & Projects */}
      <section>
        <div className="recent-section">
          <div className="container">
            <h2>Recent Experiences & Projects</h2>
            <div className="experience-list">
              <div className="mech_res">
                <a href="#" className="read">
                  <img src={rickrollImage} alt="Krishi" />
                  <p>Robotics and Mechatronics Research</p>
                </a>
              </div>

              <div className="lifting_device">
                <a href="#" className="read">
                  <img src={rickrollImage} alt="Krishi" />
                  <p>Capstone Project: Plant Lifting Device for 3D Imaging</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="view_all_button">
          <button onClick={() => window.location.href = '/experiences'}>
            View All Experiences & Projects
          </button>
        </div>
      </section>
      {/* Part 3: Skills */}
      <section>
        <div className="skills-section">
          <div className="skill_container">
            <h2>Skills</h2>
            <div className="skills-content">
              <div className="skills-left">
                <h3>Language</h3>
                <p>English • Korean • Hindi</p>
              </div>
              <div className="skills-right">
                <h3>Programming Languages</h3>
                <p>Python, C++, Arduino</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view_all_skills">
          <button onClick={() => window.location.href = '/skills'}>
            View All Skills
          </button>
        </div>
      </section>

      {/* Part 4: Let's Connect */}
      <div className="connect-section">
        <h2 className="let-connect">Let's Connect</h2>
      </div>
    </div>
  );
};

export default Header;
