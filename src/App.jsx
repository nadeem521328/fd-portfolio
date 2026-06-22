import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <Header />
      
      {/* Page Content */}
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Projects */}
        <Projects />
        
        {/* Tech Stack & About */}
        <section className="py-section-gap px-gutter border-t border-surface-container-highest" id="tech">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <About />
            <TechStack />
          </div>
        </section>
      </main>
      
      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}

export default App;
