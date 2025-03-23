import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import './About.css'; // Make sure to create a CSS file for styling

function About() {
  return (
    <div className="about">
      <div className="firstPart">
        <h2>Get to Know Me</h2>
        <p>
          I am a dedicated Mechanical Engineering student enrolled at Villanova University, where I am also pursuing a minor in Mechatronics. My profound interest lies in the expansive domain of robotics and mechatronics, and I am steadfast in my ambition to undertake a master's program in Robotics in the near future. My professional profile is characterized by qualities such as strong analytical acumen, unwavering determination, efficiency, adaptability, and an insatiable curiosity. While I excel in independent work, I also thrive in collaborative team environments, emphasizing effective communication and synergy. When confronted with challenges, I consistently demonstrate a proactive approach, often taking the lead in devising solutions. Moreover, my thirst for knowledge is unquenchable, and I eagerly embrace opportunities to expand my expertise and skill set, fostering continuous personal and professional growth. My ultimate aspiration is to make meaningful contributions to both society and the organization that I will be a part of.
        </p>
      </div>
      <div className="location">
        <span>New Delhi, India</span>
        <div className="dotted-line"></div>
      </div>

      {/* Part 2: Education */}
      <div className="education">
      <h3>Education</h3>
      <div className='gpa'>
      <p><b> VILLANOVA UNIVERSITY | Villanova, PA, USA | August 2020 – May 2024</b> </p>
      <p>Bachelor of Science in Mechanical Engineering, Minor in Mechatronics | Control & Dynamics | GPA: 3.40/4.00</p>
      </div>
      <div className='exchange'>
      <p><b> YONSEI UNIVERSITY | Seoul, South Korea | August 2022 – June 2023</b></p>
      <p>Bachelor of Science in Mechanical Engineering | Exchange Student</p>
      </div>
      <div className='dotted_line'></div>
      </div>


      {/* Part 3: Skills */}
      <div className='skills'>
      <h3>Skills</h3>
      <p>
        I am multilingual, fluent in English and Hindi with professional proficiency in Korean. My programming skills include MATLAB, Python, Arduino, C/C++, HTML, Django, MySQL, Maple, OpenCV, TensorFlow, and PyTorch. I am proficient in software tools such as SOLIDWORKS, ROS, Ubuntu, KiCAD, Microsoft Office, Sklearn, Blender, and Anaconda Powershell. In hardware, I have expertise in Nvidia, LiDAR, 3D Modeling & Printing, Raspberry Pi, Teensy/Arduino, VectorNav IMU, and Emlid RTK GPS. I excel in robotics, with deep knowledge in navigation, point cloud analysis, path planning, SLAM algorithms, and AI for path planning. My skills also cover advanced image processing, model training, and evaluation. I am analytical, adaptable, skilled in project and time management, and enjoy drawing, gaming, and language learning as hobbies.
      </p>
      <button onClick={() => window.location.href = '/skills'}>View all Skills</button>
      </div>


      {/* Part 4: Experience */}
      <div className='experience'>
      <h3>Experience</h3>
      <div className='bionics'>
      <p><b> Undergraduate Research Intern at Soft Robotics and Bionics Lab</b> </p>
      <p>Seoul National University | Seoul, South Korea | January 2024</p>
      </div>
      <div className='mech'>
      <p><b>Robotics and Mechatronics Researcher</b></p>
      <p>Villanova University | Villanova, PA, USA | August 2023 – Present</p>
      </div>
      <button onClick={() => window.location.href = '/experience'}>View all Experiences</button>
      </div>

      {/* Part 5: Let's Connect */}
      <div className='connect'>
      <h3>Let's Connect</h3>
    </div>
    </div>
  );
}

export default About;
