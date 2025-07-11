import React from "react";
import { Code, Layout, PaintBucket, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const skills = [
  { category: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["React", "Next.js", "TailwindCSS"] },
  { category: "Tools", items: ["Git", "VS Code", "npm", "GitHub Pages"] },
  {
    category: "Other",
    items: [
      "Responsive Design",
      "SEO",
      "Accessibility",
      "Performance Optimization",
    ],
  },
];

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Front-End Development",
    description:
      "Building responsive, accessible, and performant web applications with modern frameworks and tools.",
  },

  {
    icon: <PaintBucket className="w-8 h-8 text-primary" />,
    title: "Web Animation",
    description:
      "Adding life to web pages with subtle animations and interactive elements that enhance user engagement.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Performance Optimization",
    description:
      "Improving loading times and overall performance to provide a smooth experience for users.",
  },
];

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1}} // fades in when 10% is visible
      id="about"
      className="bg-secondary/50"
    >
      <div className="section-container">
        <div className="mb-20">
          <h3 className="heading-md text-center mb-10">Services I Offer</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={false}
                transitionSpeed={1000}
                className="w-full"
              >
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm card-hover"
                >
                  <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-muted-foreground ">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="heading-lg mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I’m a passionate front-end developer with a B.Sc. in Computer Science, dedicated to creating clean,
            responsive, and user-friendly web experiences. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
          <div>
            <h3 className="heading-md mb-6">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                 <Tilt
                tiltMaxAngleX={30} // for angle of tilt on X-axis
                tiltMaxAngleY={30}  // for angle of tilt on Y-axis
                glarePosition="all" // to apply glare effect on all sides
                glareEnable={true} 
                transitionSpeed={1000}
                className="w-full"
              >
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-lg mb-4 text-primary">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{skill}</span>
                      </li>
                      
                    ))}
                  </ul>
                </div>
                </Tilt>
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-md mb-6">My Story</h3>
            <div className="prose prose-blue max-w-none text-justify">
              <p className="mb-4">
                My journey into tech began with a curiosity about how websites
                are built and a desire to create digital experiences that truly
                serve users. As I dove deeper into front-end development, I
                discovered a passion for turning ideas into clean, responsive,
                and functional interfaces.
              </p>
              <p className="mb-4">
                Over time, I’ve grown more confident working with modern tools
                like React, Next.js, and Tailwind CSS-focusing on performance,
                usability, and code that scales. I enjoy building solutions that
                are not only visually engaging but also reliable across devices.
              </p>
              <p>
                Beyond code, I’m constantly learning and staying updated with
                evolving tech trends. When I’m not working on a project, I enjoy
                exploring design inspiration, sharpening my skills, or taking
                time to recharge and stay creative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
