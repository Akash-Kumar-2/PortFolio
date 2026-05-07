import { useEffect } from 'react';
import Button from './Button';
import { Profiles } from '../constants';
import EnhancedGlobe from './EnhancedGlobe';

const AboutPanel = ({ isOpen, onClose }) => {

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-black-200 border-l border-black-300 z-50 
          flex flex-col overflow-y-auto transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black-300">
          <p className="text-white font-semibold text-lg">About Me</p>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black-300 hover:bg-black-500 transition-colors">
            <img src="/assets/close.svg" alt="close" className="w-4 h-4 invert" />
          </button>
        </div>

        {/* body */}
        <div className="flex flex-col gap-8 px-8 py-8">

          {/* globe + location */}
          <div className="flex flex-col items-center gap-3">
            <EnhancedGlobe size={240} isVisible={isOpen} />
            <div className="text-center">
              <p className="text-white font-semibold">Based in Noida, India</p>
              <p className="text-white-600 text-sm mt-1">Open to remote opportunities worldwide</p>
            </div>
          </div>

          {/* divider */}
          <div className="border-t border-black-300" />

          {/* bio */}
          <div className="flex flex-col gap-4">
            <p className="text-white text-xl font-semibold">Hi, I'm Akash Kumar 👋</p>
            <p className="text-white-600 text-sm leading-relaxed">
              I'm a Backend Developer at <span className="text-white font-medium">To The New</span>, working with
              Java and Spring Boot on enterprise-scale applications. I've contributed to projects like
              IVC for Max Life Insurance, Growth App, Bluebell, and a Compensation platform — spanning
              AWS EC2, S3, PostgreSQL, and more.
            </p>
            <p className="text-white-600 text-sm leading-relaxed">
              On the side, I build full-stack projects with the MERN stack and sharpen my
              problem-solving through DSA on LeetCode, GeeksforGeeks, and Coding Ninjas.
            </p>
            <p className="text-white-600 text-sm leading-relaxed">
              B.Tech in Computer Science — JSS Academy of Technical Education, Noida (2021–2025).
            </p>
          </div>

          {/* divider */}
          <div className="border-t border-black-300" />

          {/* profiles */}
          <div>
            <p className="text-white font-semibold mb-4">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {Profiles.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-black-300 hover:bg-black-500 transition-colors px-3 py-2 rounded-xl border border-black-300 hover:border-white/20">
                  <img src={profile.path} alt={profile.name} className="w-5 h-5 object-contain" />
                  <span className="text-white-600 hover:text-white text-xs font-medium transition-colors">
                    {profile.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* cta */}
          <a href="#contact" onClick={onClose}>
            <Button name="Contact Me" isBeam containerClass="w-full" />
          </a>

        </div>
      </div>
    </>
  );
};

export default AboutPanel;
