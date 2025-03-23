import React from 'react';
import { Link } from 'react-router-dom';

// Sample projects data (replace with actual paths and details)
const projectsData = [
  {
    title: 'Autonomous Navigation System for Robots',
    image: '/path/to/AutonomousNavigationImage.jpg', // Replace with actual image path
    description: 'Developed a navigation system using Lidar and camera fusion for real-time obstacle detection and path planning.',
    id: 1,
  },
  {
    title: 'Soft Robotic Gripper',
    image: '/path/to/SoftRoboticGripperImage.jpg', // Replace with actual image path
    description: 'Designed and built a soft robotic gripper for handling delicate objects, utilizing advanced materials and control techniques.',
    id: 2,
  },
  {
    title: 'Smart Home Automation System',
    image: '/path/to/SmartHomeAutomationImage.jpg', // Replace with actual image path
    description: 'Created a home automation system using Arduino and IoT technologies to control lighting and appliances remotely.',
    id: 3,
  },
  {
    title: 'Quad-Wheel Robot Control System',
    image: '/path/to/QuadWheelRobotImage.jpg', // Replace with actual image path
    description: 'Implemented a control system for a quad-wheel robot using ROS, focusing on navigation and obstacle avoidance.',
    id: 4,
  },
  {
    title: 'sEMG Sensor Development',
    image: '/path/to/sEMGSensorImage.jpg', // Replace with actual image path
    description: 'Contributed to the development of a stretchable sEMG sensor for enhanced human-robot interaction.',
    id: 5,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <img src={project.image} alt={project.title} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
              <strong>{project.title}</strong>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
