import React from 'react';
import resumeInfo from '../data/resume.json';

function Header() {
  const resumeLink = resumeInfo.filename ? `/${resumeInfo.filename}` : '#';
  const resumeName = resumeInfo.filename || 'Resume.pdf';

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container-highest">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">Nadeem Shaik</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface font-bold border-b-2 border-primary pb-1" href="#projects">Projects</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#tech">Tech</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#about">About</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#contact">Contact</a>
        </nav>
        <a className="hidden md:block bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:scale-95 transition-transform flex items-center justify-center" href={resumeLink} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
