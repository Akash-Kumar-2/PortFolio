import { Profiles } from '../constants';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-500">© {new Date().getFullYear()} Akash Kumar.</p>

      <div className="flex gap-3">
        {Profiles.map((profile) => (
          <div key={profile.id} className="social-icon">
            <a href={profile.href} target="_blank" rel="noreferrer">
              <img src={profile.path} alt={profile.name} className="p-2" />
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-black-300 border border-black-300 hover:border-white/20 hover:bg-black-500 flex items-center justify-center transition-all duration-300"
        aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
