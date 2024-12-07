import React from 'react';
import skillsImage from '../assets/asset 1.jpeg'; 

const skillsData = [
  { name: 'WordPress', Exp: 5, percentage: 80 },
  { name: 'Elementor', percentage: 70 },
  { name: 'HTML', percentage: 50 },
  { name: 'CSS', percentage: 60 },
  { name: 'JavaScript', percentage: 45 },
  { name: 'Adobe Photoshop', percentage: 85 },
  { name: 'Canva', percentage: 60 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex items-center justify-center">
        <img 
          src={skillsImage} 
          alt="Skills Illustration" 
          className="w-3/4 h-auto rounded-lg shadow-lg" 
        />
      </div>
      <div className="md:w-1/2 container mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="space-y-2 pr-20">
          {skillsData.map((skill) => (
            <div key={skill.name}>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-700 h-full rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 