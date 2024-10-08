import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import {PerspectiveCamera, Ring} from '@react-three/drei';
import  HackerRoom  from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../constants/index';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Ring';
import HeroCamera from '../components/HeroCamera';

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        Hi, I am Akash <span className="waving-hand">👋</span>
      </p>
      <p className="hero_tag text-gray_gradient">A Fullstack Developer</p>
    </div>
    <div className='w-full h-full absolute inset-0'>
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
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position = {sizes.reactLogoPosition}/>
              <Cube position = {sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5} />
            </Suspense>
        </Canvas>
    </div>
    </section>
  )
}

export default Hero
