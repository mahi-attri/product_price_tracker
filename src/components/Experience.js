import React from 'react';
import { Link } from 'react-router-dom';
import rickrollImage from '../assets/Rickroll.jpg'; // Adjust path based on where you placed the placeholder image
import './Experience.css'; // Add your styles here

const experienceData = [
  {
    title: 'Robotics and Mechatronics Research at Villanova University',
    date: 'Aug 2023 - May 2024',
    image: rickrollImage, // Replace with actual image path
    id: 1,
  },
  {
    title: 'Undergraduate Research Intern at Soft Robotics and Bionics Lab, Seoul National University',
    date: 'Jan 2024',
    image: rickrollImage, // Replace with actual image path
    id: 2,
  },
  {
    title: 'Indoor Farm Robotics Intern at Area2Farms, Arlington, VA, USA',
    date: 'Jun 2023 - Aug 2023',
    image: rickrollImage, // Replace with actual image path
    id: 3,
  },
  {
    title: 'Product Design Intern at Ampere LLC.',
    date: 'Jun 2022 - Aug 2022',
    image: rickrollImage, // Replace with actual image path
    id: 4,
  },
  {
    title: 'Distance Education Operator at Villanova University',
    date: 'Sep 2021 - Dec 2021 & Aug 2023 - May 2024',
    image: rickrollImage, // Replace with actual image path
    id: 5,
  },
  {
    title: 'Collections & Stewardship Technician at Villanova University',
    date: 'Jan 2022 - May 2022',
    image: rickrollImage, // Replace with actual image path
    id: 6,
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-item">
            <Link to={`/experience/${exp.id}`} className="experience-link">
              <img src={exp.image} alt={exp.title} className="experience-image" />
              <p>{exp.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
