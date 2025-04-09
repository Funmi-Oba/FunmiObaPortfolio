
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0" />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
              Front-End Developer
            </div>
            <h1 className="heading-xl text-foreground">
              Crafting Beautiful <span className="text-primary">Web Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              I design and build responsive, accessible, and performant web applications 
              that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/70 rounded-2xl blur opacity-40"></div>
              <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden aspect-square">
                <img 
                  src="/lovable-uploads/91320e22-fd11-4680-9cbb-0e69db6ad5df.png" 
                  alt="Profile photo"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a 
            href="#about" 
            className="text-primary hover:text-primary/80 transition-colors animate-bounce"
            aria-label="Scroll Down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
