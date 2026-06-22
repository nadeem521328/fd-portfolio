import React, { useState } from 'react';

function Contact() {
  const email = "nadeemshaik4519@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-gutter">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Get in Touch</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
        Have an exciting project, job opening, or just want to say hello? Drop me an email or find me on social platforms.
      </p>

      {/* Email Copy Card */}
      <div 
        onClick={handleCopy}
        className="glass-panel border border-surface-container-highest hover:border-primary p-6 md:p-8 rounded-xl w-full max-w-lg mb-12 cursor-pointer transition-all duration-300 relative group"
      >
        <span className="material-symbols-outlined text-[32px] text-primary mb-3">mail</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Email Address</h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant select-all group-hover:text-primary transition-colors">
          {email}
        </p>
        <span className="mt-4 text-xs font-label-sm uppercase tracking-wider text-outline group-hover:text-on-surface transition-colors flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">content_copy</span>
          {copied ? "Copied!" : "Click to Copy"}
        </span>
        
        {/* Floating Success Toast inside Card */}
        {copied && (
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-opacity duration-300">
            <span className="bg-primary text-on-primary px-4 py-2 rounded font-label-md text-label-md shadow-lg flex items-center gap-1 animate-bounce">
              <span className="material-symbols-outlined text-[16px]">check_circle</span> Email Copied!
            </span>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="flex gap-8">
        <a 
          href="https://github.com/nadeem521328" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md"
        >
          <span className="material-symbols-outlined text-[20px]">code</span> GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/nadeem-shaik999/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-body-md"
        >
          <span className="material-symbols-outlined text-[20px]">account_circle</span> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
