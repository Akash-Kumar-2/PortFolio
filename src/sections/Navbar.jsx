import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index';
import { useAbout } from '../context/AboutContext';

const shortNames = {
  'Home': 'Home',
  'About': 'About',
  'Experience': 'Exp',
  'Education': 'Journey',
  'Skills': 'Skills',
  'Project': 'Work',
  'Contact': 'Contact',
};

const NavItems = ({ activeSection, onAboutClick, onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => {
      const isActive = activeSection === item.href.slice(1);
      const label = shortNames[item.name] || item.name;
      return (
        <li key={item.id} className="nav-li">
          {item.href === '#about' ? (
            <button
              onClick={() => { onAboutClick(); onClick(); }}
              className="relative nav-li_a bg-transparent border-0 cursor-pointer flex flex-col items-center gap-0.5 group">
              <span className={isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white transition-colors'}>
                {label}
              </span>
              <span className={`h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ) : (
            <a
              href={item.href}
              onClick={onClick}
              className="relative nav-li_a flex flex-col items-center gap-0.5 group">
              <span className={isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white transition-colors'}>
                {label}
              </span>
              <span className={`h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          )}
        </li>
      );
    })}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { setIsAboutOpen } = useAbout();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.getElementById(l.href.slice(1)));
      const scrollY = window.scrollY + 120;
      sections.forEach((section) => {
        if (!section) return;
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = () => {
    if (window.innerWidth >= 640) setIsAboutOpen(true);
    else window.location.href = '#about';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto c-space">
          <a href="/" className="text-white font-bold text-xl hover:text-neutral-300 transition-colors">
            Akash
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden">
            <NavItems activeSection={activeSection} onAboutClick={handleAboutClick} />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems activeSection={activeSection} onAboutClick={handleAboutClick} onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
