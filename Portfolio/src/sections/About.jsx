import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
const About = () => {

  const[hasCopied,setHasCopied] = useState(false);
  const globeEl = useRef();

  const handleCopy = () =>{
    navigator.clipboard.writeText('akashjss13@gmail.com');
    setHasCopied(true);

    setTimeout(()=>{
    setHasCopied(false);
    },2000)
  }

  useEffect(()=>{
    if(globeEl.current){
     globeEl.current.controls().autoRotate = true;
     globeEl.current.controls().autoRotateSpeed = 0.75;}
  },[]);

  
  const locations = [
    {
      lat: 28.6124873,  
      lng: 77.356694,   
      text: "Noida, India",
      color: "yellow", 
      size:50 
    }
  ];

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="assets/grid1.png" alt="grid-1" className='w-full sm-h-[276px] h-fit object-contain'/>

          <div> 
        
          <p className='grid-headtext'>
  Hi, I'm Akash Kumar
</p>
<p className='grid-subtext'>
  I'm a passionate developer with expertise in both frontend and backend development, creating dynamic, responsive websites. Along with web development, I have a strong foundation in Data Structures and Algorithms (DSA), which helps me build efficient, scalable solutions to complex problems.
</p>

            
          </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="assets/grid2.png" alt="grid-2" className='w-full sm-h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>
                Tech Stack
              </p>
              <p className='grid-subtext'>
              I have hands-on experience with a diverse range of languages, frameworks, and tools that empower me to build robust, scalable, and high-performance applications.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'> 
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                 <Globe 
                 ref={globeEl}
                 height ={326}
                 width = {326}
                 backgroundColor ='rgba(0,0,0,0)'
                 backgroundImageOpacity = {0.5}
                 showAtomsphere
                 showGraticules
                 globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                 labelsData={locations}
                 labelDotRadius={2} 
                 labelDotColor={(d) => d.color} 
                 />
                 
            </div>
            <div >
  <p className="grid-headtext">I&apos;m a passionate web developer from Noida, India.</p>
  <p className="grid-subtext">I&apos;m currently pursuing my B.Tech in Computer Science at JSS Academy of Technical Education, Noida. I completed my schooling from Saint James School, Hardoi,U.P.,India.</p>
  <a href="#contact">
  <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
</a>
</div>

          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src="assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
            <div className='mt-12'>
              <p className='grid-headtext'>
              Learning, Building, Growing
              </p>
              <p className='grid-subtext'>
              I thrive on solving complex problems and bringing ideas to life through code. With hands-on experience on platforms like LeetCode, GeeksforGeeks, and Coding Ninjas, I've sharpened my skills in both Development and Data Structures & Algorithms (DSA). Every challenge fuels my passion for continuous learning and improvement.
              </p>
            </div>

          </div>

        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2 ">
              <p className="grid-headtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-base font-medium text-gray_gradient text-white">akashjss13@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default About
