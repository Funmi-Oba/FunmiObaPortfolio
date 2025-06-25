
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Funmilayo</span> Oba
            </div>
            <p className="text-background/80 max-w-md mb-6">
              A front-end developer crafting beautiful web experiences with a focus on performance, accessibility, and responsive design.
            </p>
            <p className="text-background/80">
              &copy; {new Date().getFullYear()} Funmilayo Oba. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-background/80 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-background/80">Lagos, Nigeria</li>
              <li><a href="mailto:funmilayo.oba@outlook.com" className="text-background/80 hover:text-primary transition-colors">funmilayo.oba@outlook.com</a></li>
              <li><a href="tel:+2348105406668" className="text-background/80 hover:text-primary transition-colors">+2348105406668</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            Designed and built with React & Tailwind CSS
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
