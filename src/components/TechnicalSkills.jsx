import React from 'react';
import { FaLaptopCode, FaCode, FaDatabase } from "react-icons/fa";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Website Development",
      icon: <FaLaptopCode />,
      skills: ["MERN-Stack", "HTML", "CSS", "JavaScript", "Django", "SQLite"]
    },
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: ["C", "C++", "Python", "Java", "Dart"]
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      skills: ["Relational Database (MySQL)", "MongoDB"]
    }
  ];

  return (
    <div className='bg-black text-white py-16 md:py-20' id='skills'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12'>
          Technical Skills
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'
            >
              <h3 className='flex items-center gap-2 text-lg md:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {category.icon} {category.category}
              </h3>

              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='text-xs md:text-sm px-2 md:px-3 py-1 bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
