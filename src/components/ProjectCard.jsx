import React from 'react';

function ProjectCard({ title, description, imageUrl, tags, githubUrl, liveUrl, isPlaceholder }) {
  return (
    <div className="bg-surface-container-low border border-surface-container-highest rounded-lg overflow-hidden group hover:border-primary transition-colors flex flex-col h-full">
      {/* Image container */}
      <div className="aspect-[1.79] w-full bg-[#000] border-b border-surface-container-highest overflow-hidden relative flex items-center justify-center">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-low text-on-surface-variant p-6 select-none relative">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
            <span className="material-symbols-outlined text-[48px] text-outline mb-2 z-10">construction</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-1 z-10">Under Construction</span>
            <span className="font-body-sm text-body-sm text-center text-outline z-10">Future Project Details Coming Soon</span>
          </div>
        ) : (
          <img 
            alt={`${title} UI`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src={imageUrl} 
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="font-label-sm text-[10px] px-2 py-1 rounded border border-surface-container-highest bg-surface-container text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          {isPlaceholder ? (
            <>
              <button 
                disabled 
                className="flex-1 bg-transparent border border-surface-container-highest text-outline font-label-md text-label-sm py-2 rounded flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
              >
                <span className="material-symbols-outlined text-[16px]">code</span> GitHub
              </button>
              <button 
                disabled 
                className="flex-1 bg-surface-container-high text-outline font-label-md text-label-sm py-2 rounded flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
              >
                Soon <span className="material-symbols-outlined text-[16px]">lock</span>
              </button>
            </>
          ) : (
            <>
              <a 
                href={githubUrl} 
                className="flex-1 bg-transparent border border-surface-container-highest text-on-surface font-label-md text-label-sm py-2 rounded hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">code</span> GitHub
              </a>
              <a 
                href={liveUrl} 
                className="flex-1 bg-primary text-on-primary font-label-md text-label-sm py-2 rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Live Demo <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
