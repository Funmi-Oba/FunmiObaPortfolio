
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

const projectCategories = ['All', 'React', 'TypeScript', 'CSS', 'UI/UX'];

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for managing products, orders, and customers.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    demoUrl: '#',
    codeUrl: '#',
    categories: ['React', 'TypeScript', 'UI/UX']
  },
  {
    title: 'Weather Application',
    description: 'A weather forecast app with location search and animated visualizations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    technologies: ['React', 'CSS', 'API Integration'],
    demoUrl: '#',
    codeUrl: '#',
    categories: ['React', 'CSS']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website with smooth animations and responsive design.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    technologies: ['TypeScript', 'React', 'Framer Motion'],
    demoUrl: '#',
    codeUrl: '#',
    categories: ['React', 'TypeScript', 'CSS']
  },
  {
    title: 'Task Management App',
    description: 'A kanban-style task management tool with drag and drop functionality.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    technologies: ['React', 'TypeScript', 'Redux'],
    demoUrl: '#',
    codeUrl: '#',
    categories: ['React', 'TypeScript', 'UI/UX']
  },
  {
    title: 'Recipe Finder',
    description: 'An application to discover and save recipes with filtering options.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    technologies: ['React', 'CSS', 'Firebase'],
    demoUrl: '#',
    codeUrl: '#',
    categories: ['React', 'CSS']
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            Explore my latest work and personal projects. Each project represents different skills and approaches to solving real-world problems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
