import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projectCategories = [
  "All",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX",
  "NextJs",
];

const projects = [
  {
    title: "Kayode Olawoye Ministries Website",
    description:
      "A responsive, single-page ministry website built for Kayode Olawoye Ministries to share sermons, event updates, and contact information with a modern, mobile-friendly layout.",
    image: "/images/Kayode.png",
    technologies: ["React", "NextJs", "Tailwind CSS", "SoundCloud API"],
    demoUrl: "https://kom-kohl.vercel.app/",
    codeUrl: "https://github.com/Funmi-Oba/KOM_new",
    categories: ["NextJs", "React", "Tailwind CSS"],
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website with smooth animations and responsive design.",
    image: "/images/portfolio.png",
    technologies: ["NextJs", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://funmilayooba.vercel.app/",
    codeUrl: "https://github.com/Funmi-Oba/FunmiObaPortfolio",
    categories: ["React", "TypeScript", "CSS"],
  },

  {
    title: "Weather Application",
    description:
      "A weather forecast app with location search and animated visualizations.",
    image: "/images/weather.jpg",
    technologies: ["React", "CSS", "API Integration"],
    demoUrl: "InProgress",
    codeUrl: "InProgress",
    categories: ["React", "CSS"],
  },

  // {
  //   title: "Task Management App",
  //   description:
  //     "A kanban-style task management tool with drag and drop functionality.",
  //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  //   technologies: ["React", "TypeScript", "Redux"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   categories: ["React", "TypeScript", "UI/UX"],
  // },
  // {
  //   title: "Recipe Finder",
  //   description:
  //     "An application to discover and save recipes with filtering options.",
  //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  //   technologies: ["React", "CSS", "Firebase"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   categories: ["React", "CSS"],
  // },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // fades in when 20% is visible
      id="projects"
      className="bg-background"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4 ">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            Explore my latest work and personal projects. Each project
            represents different skills and approaches to solving real-world
            problems.
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
                  onClick={() => {
                    setSelectedImage(project.image);
                    setIsImageOpen(true);
                  }}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}

          {isImageOpen && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
              onClick={() => setIsImageOpen(false)}
            >
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute top-12 right-12 text-white font-bold text-4xl "
              >
                &times;
              </button>
              <div
                className="max-w-4xl w-full p-4 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                <img
                  src={selectedImage}
                  alt="Full view"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
