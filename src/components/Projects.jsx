import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section className="py-section-gap px-gutter bg-surface border-t border-surface-container-highest" id="projects">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Featured Work</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A selection of recent engineering projects demonstrating full-stack capabilities, data pipelines, and frontend precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 justify-center max-w-4xl mx-auto gap-16">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              isPlaceholder={project.isPlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
