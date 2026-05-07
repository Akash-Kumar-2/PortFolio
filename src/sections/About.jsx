import { useRef } from 'react';
import Button from '../components/Button';
import useFadeIn from '../hooks/useFadeIn';
import { Profiles } from '../constants';
import EnhancedGlobe from '../components/EnhancedGlobe';

const About = () => {
  const fadeRef = useFadeIn();

  return (
    <section className="c-space my-20 lg:hidden" id="about">
      <div ref={fadeRef} className="fade-in">
        <p className="head-text mb-12">About Me</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">

          {/* ── Bio card ── */}
          <div className="grid-container flex flex-col justify-between">
            <div>
              <p className="grid-headtext text-2xl">Hi, I'm Akash Kumar 👋</p>
              <p className="grid-subtext mt-3 leading-relaxed">
                I'm a Backend Developer at <span className="text-white font-medium">To The New</span>, building
                enterprise-scale applications with Java and Spring Boot. I've worked on projects like
                IVC for Max Life Insurance, Growth App, Bluebell, and a Compensation platform — using
                AWS EC2, S3, PostgreSQL, and more.
              </p>
              <p className="grid-subtext mt-3 leading-relaxed">
                Outside work I build full-stack projects with the MERN stack and keep my
                problem-solving sharp through DSA practice on LeetCode, GeeksforGeeks, and Coding Ninjas.
              </p>
              <p className="grid-subtext mt-3 leading-relaxed">
                B.Tech in Computer Science — JSS Academy of Technical Education, Noida.
              </p>
            </div>
            <a href="#contact" className="mt-8">
              <Button name="Contact Me" isBeam containerClass="w-full" />
            </a>
          </div>

          {/* ── Globe + location card ── */}
          <div className="grid-container flex flex-col items-center">
            <div className="w-full flex justify-center">
              <EnhancedGlobe size={280} />
            </div>
            <div className="mt-4 text-center">
              <p className="grid-headtext">Based in Noida, India</p>
              <p className="grid-subtext mt-1">Open to remote opportunities worldwide</p>
            </div>
          </div>

          {/* ── Coding profiles card ── */}
          <div className="grid-container lg:col-span-2">
            <p className="grid-headtext">Find me on</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {Profiles.map((profile) => (
                <a
                  key={profile.id}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black-300 hover:bg-black-500 transition-colors px-4 py-3 rounded-xl border border-black-300 hover:border-white/20">
                  <img src={profile.path} alt={profile.name} className="w-7 h-7 object-contain" />
                  <span className="text-white-600 hover:text-white text-sm font-medium transition-colors">
                    {profile.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
