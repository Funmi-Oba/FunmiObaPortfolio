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
import { ExternalLink, Loader, Github } from "lucide-react";
import { motion } from "framer-motion";

const projectCategories = [
  "All",
  "React",
  "Vue",
  "VueX",
  "Pinia",
  "TypeScript",
  "Tailwind CSS",
  "NextJs",
  "Framer Motion",
];

const projects = [
  {
    title: "Exclusive",
    description:
      "A full featured e commerce web application with product listings, cart, and checkout interface.",
    image: "/images/Exclusive.png",
    technologies: ["Vue", "Tailwind CSS", "VueX", "Pinia"],
    demoUrl: "https://exclusive-ecommerce-nu.vercel.app/",
    codeUrl: "https://github.com/Funmi-Oba/Exclusive-ECommerce",
    categories: ["Vue", "VueX", "Pinia", "Tailwind CSS"],
  },
  {
    title: "Get-Change",
    description:
      "An admin dashboard to monitor and manage staff activities and task status.",
    image: "/images/GetChange.png",
    technologies: ["Vue", "Tailwind CSS"],
    demoUrl: "https://get-change-one.vercel.app/",
    codeUrl: "https://github.com/Funmi-Oba/GetChange",
    categories: ["Vue", "Tailwind CSS"],
  },
  {
    title: "Kayode Olawoye Ministries Website",
    description:
      "A responsive, single-page ministry website built for Kayode Olawoye Ministries to share sermons, event updates, and contact information with a modern, mobile-friendly layout.",
    image: "/images/Kayode.png",
    technologies: ["NextJs", "Tailwind CSS", "SoundCloud API"],
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
  // {
  //   title: "Pursfi- Revolutionizing Digital Payments",
  //   description:
  //     "Pursfi is a modern financial platform designed to streamline and secure your digital transactions. Whether you're an individual or a business.",
  //   image: "images/pursfi.png",
  //   technologies: ["NextJs", "Tailwind CSS", "Framer Motion"],
  //   demoUrl: "https://pursfi-home.vercel.app/",
  //   codeUrl: "",
  //   categories: ["NextJs", "Tailwind CSS", "Framer Motion" ],
  // },
  {
    title: "Royalty Ladies Conference Website",
    description:
      "The official website for the Royalty Ladies Conference 1.0, featuring event details, speaker profiles, registration forms, and merchandise information.",
    image: "images/royaltyladies.png",
    technologies: ["NextJs", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://royaltyladies.vercel.app/",
    codeUrl: "",
    categories: ["NextJs", "Tailwind CSS", "Framer Motion" ],
  },

  // {
  //   title: "Weather Application",
  //   description:
  //     "A weather forecast app with location search and animated visualizations.",
  //   image: "/images/weather.jpg",
  //   technologies: ["React", "CSS", "API Integration"],
  //   demoUrl: "InProgress",
  //   codeUrl: "InProgress",
  //   categories: ["React", "CSS"],
  // },

  // {
  //   title: "Destiny House Church Website",
  //   description:
  //     "A modern, responsive website designed for Destiny House Church to showcase sermons, events, and ministry activities with a clean user experience and mobile-first layout.",
  //   image: "/images/dhweb.png",
  //   technologies: ["React", "TypeScript", "Redux"],
  //   demoUrl: "InProgress",
  //   codeUrl: "InProgress",
  //   categories: ["React", "TypeScript", "Tailwind CSS"],
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
      viewport={{ once: false, amount: 0.1 }} // fades in when 10% is visible
      id="projects"
      className="bg-background"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 heading-lg ">My Projects</h2>
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="relative overflow-hidden card-hover">
              <div className="w-full overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => {
                    setSelectedImage(project.image);
                    setIsImageOpen(true);
                  }}
                  className="object-cover w-full h-full transition-transform duration-300 cursor-pointer hover:scale-105"
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
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </a>
                </Button>
              </CardFooter>
              {project.demoUrl === "InProgress" && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-start px-4 pt-32 text-center bg-black bg-opacity-50">
                  <p className="mb-2 text-lg font-semibold text-white ">
                    <Loader className="inline-block w-5 h-5 mr-2 text-white animate-spin" />
                    Project in progress...
                  </p>
                </div>
              )}
            </Card>
          ))}

          {isImageOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
              onClick={() => setIsImageOpen(false)}
            >
              <button
                onClick={() => setIsImageOpen(false)}
                className="absolute text-4xl font-bold text-white top-12 right-12 "
              >
                &times;
              </button>
              <div
                className="relative w-full max-w-4xl p-4"
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
