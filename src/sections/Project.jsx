import React, { useState } from 'react';
import { myProjects } from '../constants';
import Card from '../components/Card/Card';
import Carousel from '../components/Crousel';
import Slider from '../components/Slider';
import useFadeIn from '../hooks/useFadeIn';

const projectCount = myProjects.length;

const Project = () => {
  const fadeRef = useFadeIn();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      const newIndex =
        direction === 'previous'
          ? prevIndex === 0
            ? projectCount - 1
            : prevIndex - 1
          : prevIndex === projectCount - 1
          ? 0
          : prevIndex + 1;
      return newIndex;
    });
  };



  return (
    <section id='project' className='my-20 c-space'>
      <div ref={fadeRef} className='fade-in'>
      <p className='head-text'>My Projects</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-xl border border-black-300 bg-black-200'>
          <div className='absolute top-0 right-0'>
            <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
          </div>
          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-xl sm:text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className="animatedText text-sm sm:text-base">{currentProject.desc}</p>
            <p className="animatedText text-sm sm:text-base">{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3 flex-wrap'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <div className='flex items-center gap-3 flex-wrap'>
              {currentProject.hosted && (
                <a href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors' target='_blank' rel='noreferrer'>
                  <p className='text-sm'>Live Site</p>
                  <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
                </a>
              )}
              {currentProject.href && (
                <a href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors' target='_blank' rel='noreferrer'>
                  <img src="/assets/github.png" alt="github" className='w-4 h-4 invert opacity-60 hover:opacity-100 transition-opacity' />
                  <p className='text-sm'>GitHub</p>
                </a>
              )}
              {currentProject.githubBackend && (
                <a href={currentProject.githubBackend} className='flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors' target='_blank' rel='noreferrer'>
                  <img src="/assets/github.png" alt="github" className='w-4 h-4 invert opacity-60 hover:opacity-100 transition-opacity' />
                  <p className='text-sm'>Backend</p>
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-5 relative grid-container'>
          <Slider project={currentProject} />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Project;
