import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ScrollProgress from './components/ScrollProgress'
import AboutPanel from './components/AboutPanel'
import { AboutProvider, useAbout } from './context/AboutContext'

// lazy load all below-fold sections
const About = lazy(() => import('./sections/About'))
const Experience = lazy(() => import('./sections/Experience'))
const Education = lazy(() => import('./sections/Education'))
const Skills = lazy(() => import('./sections/Skills'))
const Project = lazy(() => import('./sections/Project'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))
const NotFound = lazy(() => import('./sections/NotFound'))

const SectionFallback = () => <div className="w-full h-32" />;

const AppInner = () => {
  const { isAboutOpen, setIsAboutOpen } = useAbout();
  return (
    <Routes>
      <Route path="/" element={
        <main className="max-w-7xl mx-auto">
          <ScrollProgress />
          <Navbar />
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Project />
            <Contact />
            <Footer />
            <AboutPanel isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
          </Suspense>
        </main>
      } />
      <Route path="*" element={
        <Suspense fallback={<SectionFallback />}>
          <NotFound />
        </Suspense>
      } />
    </Routes>
  );
};

const App = () => (
  <AboutProvider>
    <AppInner />
  </AboutProvider>
);

export default App
