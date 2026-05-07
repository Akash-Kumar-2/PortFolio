import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import NotFound from './sections/NotFound'
import AboutPanel from './components/AboutPanel'
import ScrollProgress from './components/ScrollProgress'
import { AboutProvider, useAbout } from './context/AboutContext'

const AppInner = () => {
  const { isAboutOpen, setIsAboutOpen } = useAbout();
  return (
    <Routes>
      <Route path="/" element={
        <main className="max-w-7xl mx-auto">
          <ScrollProgress />
      <Navbar />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Project />
          <Contact />
          <Footer />
          <AboutPanel isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        </main>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <AboutProvider>
    <AppInner />
  </AboutProvider>
);

export default App
