import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-gutter">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">About Me</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
        I am a Full Stack Developer focused on problem solving, building scalable applications, and mastering modern web technologies. 
        My approach bridges the gap between complex backend architectures and intuitive frontend experiences.
      </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12">
        With a strong foundation in both relational databases and responsive design, I deliver complete, performant solutions from concept to deployment.
      </p>

      {/* Engineering Accent Illustration/Graphic */}
      <div className="w-full max-w-lg aspect-[2] border border-surface-container-highest rounded-xl bg-surface-container-low p-6 relative overflow-hidden flex flex-col justify-between items-start text-left">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#2a2a2a 1px, transparent 1px), linear-gradient(90deg, #2a2a2a 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="z-10 font-mono text-[10px] text-primary select-none">// Engineering Philosophy</div>
        <div className="z-10 font-display text-2xl text-on-surface leading-tight font-semibold mt-4">
          "Clean code, scalable data schemas, and high-performance user interfaces."
        </div>
        <div className="z-10 flex gap-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-xs text-outline">Active Development</span>
        </div>
      </div>
    </div>
  );
}

export default About;
