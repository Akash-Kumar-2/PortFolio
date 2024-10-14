import { Profiles } from "../constants";
const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
        <p className="text-white-500">© 2024 Akash Kumar.</p>
        </div>
  
        <div className="flex gap-3">
        {Profiles.map(profile => (
        <div key={profile.id} className="social-icon">
         <a href={profile.href} target='_blank' rel='noreferrer'>
          <img src={profile.path} alt={profile.name} className="p-2" />
         </a>
        </div>
      ))}
        </div>
  
      </footer>
    );
  };
  
  export default Footer;