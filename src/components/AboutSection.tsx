
import React from 'react';
import { Code, Layout, PaintBucket, Zap } from 'lucide-react';

const skills = [
  { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Frameworks', items: ['React', 'Vue.js', 'Next.js', 'TailwindCSS'] },
  { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Figma', 'Storybook'] },
  { category: 'Other', items: ['Responsive Design', 'SEO', 'Accessibility', 'Performance Optimization'] },
];

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Front-End Development',
    description: 'Building responsive, accessible, and performant web applications with modern frameworks and tools.'
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.'
  },
  {
    icon: <PaintBucket className="w-8 h-8 text-primary" />,
    title: 'Web Animation',
    description: 'Adding life to web pages with subtle animations and interactive elements that enhance user engagement.'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Performance Optimization',
    description: 'Improving loading times and overall performance to provide a smooth experience for users.'
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate front-end developer focused on creating beautiful, functional, and user-centered digital experiences. With a background in design and a love for clean code, I bridge the gap between design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="heading-md mb-6">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">My Story</h3>
            <div className="prose prose-blue max-w-none">
              <p className="mb-4">
                I started my journey as a web designer, but quickly fell in love with the process of bringing designs to life through code. This dual background allows me to create websites that are not only visually appealing but also functionally sound.
              </p>
              <p className="mb-4">
                With several years of experience working with startups and established companies alike, I've developed a keen eye for detail and a commitment to creating high-quality web experiences that help businesses achieve their goals.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading-md text-center mb-10">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm card-hover">
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">
                  {service.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
