import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-surface-container-lowest text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <Hero />
                
                {/* Featured Projects Section */}
                <Projects />
                
                {/* About Section */}
                <section className="py-section-gap px-gutter border-t border-surface-container-highest bg-surface" id="about">
                  <About />
                </section>
                
                {/* Skills/Tech Stack Section */}
                <section className="py-section-gap px-gutter border-t border-surface-container-highest" id="tech">
                  <TechStack />
                </section>
                
                {/* Contact Section */}
                <section className="py-section-gap px-gutter border-t border-surface-container-highest bg-surface" id="contact">
                  <Contact />
                </section>
              </>
            } />
            
            {/* Standalone Route Pages */}
            <Route path="/about" element={
              <div className="min-h-[75vh] flex items-center justify-center py-20">
                <About />
              </div>
            } />
            <Route path="/skills" element={
              <div className="min-h-[75vh] flex items-center justify-center py-20">
                <TechStack />
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-[75vh] flex items-center justify-center py-20">
                <Contact />
              </div>
            } />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
