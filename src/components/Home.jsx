import React from 'react';
import HomeImage from '../assets/Home1.jpg';

const Home = () => {
  return (
    <div className='bg-black text-white text-center py-12 md:py-16 min-h-screen flex flex-col justify-center' id='home'>
      <img 
        src={HomeImage} 
        alt="Profile" 
        className='mx-auto mt-20 md:mt-7 mb-8 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold px-4'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Pratham Parikh
        </span>
        , Full-Stack Developer
      </h1>
      
      <p className='mt-4 text-base md:text-lg text-gray-300 px-6'>
        I specialize in building modern and responsive web applications.
      </p>
      
      <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 px-6'>
        <a href="#contact" className='w-full sm:w-auto'>
          <button className='w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full'>
            Contact With Me
          </button>
        </a>
        
        <a 
          href="C:\Users\Pratham\OneDrive\Documents\Desktop\Myporfolio\myFolio\src\assets\Pratham_resume_code.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className='w-full sm:w-auto'
        >
          <button className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full'>
            My Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;