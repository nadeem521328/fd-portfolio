import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-surface-container-highest w-full py-12 mt-auto" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-6">
        <div className="font-headline-md text-headline-md text-on-surface">
          Nadeem Shaik
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="https://github.com/nadeem521328" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="https://www.linkedin.com/in/nadeem-shaik999/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="mailto:nadeemshaik4519@gmail.com">Email</a>
        </div>
        <div className="text-on-surface-variant font-label-sm text-label-sm">
          © {currentYear} Nadeem Shaik. Built for performance.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
