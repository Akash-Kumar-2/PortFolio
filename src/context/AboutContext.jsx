import { createContext, useContext, useState } from 'react';

const AboutContext = createContext();

export const AboutProvider = ({ children }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <AboutContext.Provider value={{ isAboutOpen, setIsAboutOpen }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => useContext(AboutContext);
