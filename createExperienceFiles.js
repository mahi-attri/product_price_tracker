const fs = require('fs');
const path = require('path');

// Create Experience folder and files
const experienceFolder = path.join(__dirname, 'src', 'components', 'Experience');
const experienceFiles = [
  { name: 'RoboticsResearch.js', content: "// Robotics and Mechatronics Research Details\n" },
  { name: 'UndergraduateResearchIntern.js', content: "// Undergraduate Research Intern Details\n" },
  { name: 'IndoorFarmIntern.js', content: "// Indoor Farm Robotics Intern Details\n" },
  { name: 'ProductDesignIntern.js', content: "// Product Design Intern Details\n" },
  { name: 'DistanceEducationOperator.js', content: "// Distance Education Operator Details\n" },
  { name: 'CollectionsTechnician.js', content: "// Collections & Stewardship Technician Details\n" }
];

// Create Projects folder and files
const projectsFolder = path.join(__dirname, 'src', 'components', 'Projects');
const projectFiles = [
  { name: 'AutonomousNavigationSystem.js', content: "// Autonomous Navigation System Details\n" },
  { name: 'SoftRoboticGripper.js', content: "// Soft Robotic Gripper Details\n" },
  { name: 'SmartHomeAutomation.js', content: "// Smart Home Automation System Details\n" },
  { name: 'QuadWheelRobot.js', content: "// Quad-Wheel Robot Control System Details\n" },
  { name: 'SEMGDevelopment.js', content: "// sEMG Sensor Development Details\n" }
];

// Function to create files
const createFiles = (folderPath, files) => {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) throw err;

    files.forEach(file => {
      fs.writeFile(path.join(folderPath, file.name), file.content, (err) => {
        if (err) throw err;
        console.log(`${file.name} has been created in ${folderPath}.`);
      });
    });
  });
};

// Create experience and project files
createFiles(experienceFolder, experienceFiles);
createFiles(projectsFolder, projectFiles);
