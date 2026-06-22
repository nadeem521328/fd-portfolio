import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import resumeInfo from '../data/resume.json';

function Header() {
  const location = useLocation();
  const resumeLink = resumeInfo.filename ? `/${resumeInfo.filename}` : '#';
  const resumeName = resumeInfo.filename || 'Resume.pdf';

  const handleNavClick = (e, targetId) => {
    // If not on homepage, navigate to homepage with hash anchor
    if (location.pathname !== '/') {
      window.location.href = `/${targetId}`;
    } else {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container-highest">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, '#root')}
          className="font-headline-md text-headline-md font-bold text-on-surface hover:text-primary transition-all duration-200 select-none"
        >
          Nadeem Shaik
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <a 
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200 pb-1 cursor-pointer" 
            href="#projects" 
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Projects
          </a>
          <a 
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200 pb-1 cursor-pointer" 
            href="#tech" 
            onClick={(e) => handleNavClick(e, '#tech')}
          >
            Skills
          </a>
          <a 
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200 pb-1 cursor-pointer" 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a 
            className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200 pb-1 cursor-pointer" 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>
        <a className="hidden md:block bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:scale-95 transition-transform flex items-center justify-center" href={resumeLink} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
