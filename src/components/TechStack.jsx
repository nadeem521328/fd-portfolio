import React from 'react';
import { skillsData } from '../data/skills';

function TechStack() {
  return (
    <div className="max-w-5xl mx-auto px-gutter">
      <div className="glass-panel p-8 md:p-12 rounded-xl border border-surface-container-highest">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-surface-container-highest pb-4">
          Core Competencies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <div key={index}>
              <h4 className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-wider mb-4">
                {group.category}
              </h4>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
