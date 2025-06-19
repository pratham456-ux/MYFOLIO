import React from 'react';
import SchoolLogo from '../assets/experimental-logo.jpg';
import CollegeLogo from '../assets/charusat-logo.png';
import CompanyLogo from '../assets/dsu-logo.jpg';
import brainy from '../assets/brainy.jpg'
import infinity from '../assets/infinity.jpeg';

const timelineData = [
  {
    title: 'Kisan Madhyamic Vidhyalaya',
    logo: SchoolLogo,
    duration: '2008 - 2020',
    description:
      'Completed my 10th standard education with focus on academics and building a strong foundation.',
    align: 'left',
    dotColor: 'bg-blue-500',
  },
  {
    title: 'Infinity School',
    logo: infinity,
    duration: '2020 - 2022',
    description:
      'Completed my 12th standard education with focus on academics and building a strong foundation.',
    align: 'left',
    dotColor: 'bg-blue-500',
  },
  {
    title: 'A. D. Patel Institute of Technology',
    logo: CollegeLogo,
    duration: '2022 - 2026',
    description:
      'Currently pursuing B.Tech in AI&DS, focusing on web development technologies and computer science fundamentals.',
    align: 'right',
    dotColor: 'bg-green-400',
  },
  {
    title: 'Softwingz Infotech',
    logo: CompanyLogo,
    duration: 'Apr 2024 – Jan 2025',
    description:
      'Worked as a Python Developer Intern where I developed a Smart Attendance System with Silent Face Anti-Spoofing.',
    align: 'left',
    dotColor: 'bg-blue-500',
  },
  {
    title: 'BrainyBeam Technologies Pvt Ltd',
    logo: brainy,
    duration: 'May 2025 - June 2025',
    description:
      'Worked as a MERN Stack Intern where I developed a feature-rich e-commerce website with admin dashboard and secure payment.',
    align: 'left',
    dotColor: 'bg-blue-500',
  },
];

const MyJourney = () => {
  return (
    <div className="bg-black text-white py-20" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">My Journey</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center md:items-start mb-16 relative`}
            >
              {/* Content Card */}
              <div className="w-full md:w-1/2 p-4 md:px-8">
                <div className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300">
                  <div
                    className={`flex ${
                      item.align === 'right' ? 'justify-start' : 'justify-end'
                    } items-center mb-3 gap-3`}
                  >
                    {item.align === 'right' && (
                      <img
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                    )}
                    <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                    {item.align !== 'right' && (
                      <img
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">{item.duration}</p>
                  <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div
                className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 ${item.dotColor} rounded-full border-2 border-white`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center px-4 sm:px-0">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Continuing to grow and learn as I pursue my passion for full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
