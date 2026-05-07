import React, { Suspense, useState, useEffect } from 'react';
import {Canvas} from '@react-three/fiber';
import {PerspectiveCamera} from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../constants/index';
import FloatingModels from '../components/FloatingModels';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import HeroP from '../components/HeroP';
import { useAbout } from '../context/AboutContext';

const tags = ['Backend Dev', 'Java & Spring Boot', 'MERN Stack', 'DSA', 'AWS', 'Problem Solver'];

const WhoAmICard = ({ onOpen }) => {
  const [activeTag, setActiveTag] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((i) => (i + 1) % tags.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
    onOpen();
  };

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-8 z-10 hidden lg:block">
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative flex flex-col gap-3 bg-black/70 backdrop-blur-md border rounded-2xl px-5 py-4 text-left transition-all duration-300 shadow-2xl w-52 overflow-hidden
          ${ hovered ? 'border-cyan-400/60 shadow-cyan-400/10' : 'border-white/10'}
          ${ clicked ? 'scale-95' : 'scale-100'}`}>

        {/* animated background glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent transition-opacity duration-300 ${ hovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* header row */}
        <div className="flex items-center gap-3 relative">
          {/* avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
            <span className="text-white text-xs font-bold">AK</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Akash Kumar</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs">Available</span>
            </div>
          </div>
        </div>

        {/* cycling tag */}
        <div className="relative h-5 overflow-hidden">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`absolute left-0 text-xs font-medium transition-all duration-500 ${
                i === activeTag
                  ? 'text-cyan-400 opacity-100 translate-y-0'
                  : 'text-transparent opacity-0 translate-y-3'
              }`}>
              # {tag}
            </span>
          ))}
        </div>

        {/* progress bar */}
        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-[1800ms] ease-linear"
            style={{ width: `${((activeTag + 1) / tags.length) * 100}%` }}
          />
        </div>

        {/* cta */}
        <div className="flex items-center justify-between relative">
          <span className="text-white-600 text-xs">Know more</span>
          <span className={`text-cyan-400 text-sm transition-transform duration-200 ${ hovered ? 'translate-x-1' : ''}`}>
            →
          </span>
        </div>
      </button>
    </div>
  );
};

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const { setIsAboutOpen } = useAbout();
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">

    {/* desktop background glow */}
    {!isMobile && (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-900/15 blur-[80px]" />
      </div>
    )}

    {/* greeting + typewriter */}
    <div className="w-full mx-auto flex flex-col sm:mt-28 mt-16 c-space gap-3 relative z-10 pb-40 sm:pb-64">
      <p className="sm:text-4xl text-2xl font-bold text-white text-center font-generalsans">
        Hi, I am Akash <span className="waving-hand">👋</span>
      </p>
      <HeroP/>
    </div>

    {/* 3D canvas */}
    <div className='w-full h-full absolute inset-0 z-0'>
        {/* mobile glow behind 3D model */}
        {isMobile && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-600/10 blur-2xl" />
          </div>
        )}
        <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,20]}/>
            <HeroCamera isMobile={isMobile} >
            <HackerRoom 
            position={sizes.deskPosition}
            rotation = {[0.1,-Math.PI,0]}
            scale = {sizes.deskScale}
            />
            </HeroCamera>
            {!isMobile && <FloatingModels />}
            <ambientLight intensity={isMobile ? 2 : 1}/>
            <directionalLight position={[10,10,10]} intensity={isMobile ? 1.5 : 0.5} />
            </Suspense>
        </Canvas>
    </div>

    {/* bottom bar — Resume + View Work + scroll indicator */}
    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 w-full sm:w-fit">
        <a href="https://drive.google.com/uc?export=download&id=1OevkIJiK2QPqNSfzViKoj5Yej2dG-J_5" className="w-fit" target='_blank' rel='noreferrer' download="Akash_Resume">
          <Button name="Resume" isBeam containerClass="sm:w-fit w-full sm:min-w-48" />
        </a>
        <a
          href="#project"
          className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-white-600 hover:text-white hover:border-white/40 transition-all duration-300 text-sm font-medium whitespace-nowrap">
          View Work
          <span className="text-cyan-400">↓</span>
        </a>
      </div>

      {/* scroll indicator */}
      <div className="hidden sm:flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {/* Who am I dialog - middle right, desktop only */}
    {!isMobile && !isTablet && (
      <WhoAmICard onOpen={() => setIsAboutOpen(true)} />
    )}
    </section>
  )
}

export default Hero
