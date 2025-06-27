
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Send, UserRound, MessageCircleHeart, Captions } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { error } from 'console';
import { Caption } from 'react-day-picker';

 
const ServiceID = 'service_8bwmgd9';
const TemplateID = 'template_qthbbus';
const PublicKey = 'LyQ3fc2k_jRRqS94S';

const ContactSection = () => {
  const { toast } = useToast();
const formRef = React.useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   if (!formRef.current) return;

    emailjs.sendForm(ServiceID, TemplateID, formRef.current, PublicKey)
    .then((response)=>{
      
      console.log("Email sent successfully!", response);
      toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    formRef.current.reset();
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    toast({
      title: "Error sending message",
      description: "There was an issue sending your message. Please try again later.",
      variant: "destructive",
    });
  });

    // In a real app, you would send this data to your backend
  //  (e.target as HTMLFormElement).reset();
  };


  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Location',
      details: 'Lagos, Nigeria',
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      details: 'funmilayo.oba@outlook.com',
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      details: '+2348105406668',
    },
  ];


  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Feel free to contact me for any project inquiries or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-md mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-6">
                    <div className="rounded-full bg-primary/10 p-3 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Funmi-Oba" 
                  target='_blank'
                  className="bg-card hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="20" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/funmilayo-oba/" 
                  target='_blank'
                  className="bg-card hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="20" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a 
                  href="https://x.com/FunmiOba1" 
                  target='_blank'
                  className="bg-card hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="20" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05 1.883 0 3.616-.636 5.001-1.721-1.771-.037-3.255-1.197-3.767-2.793.249.037.499.062.761.062.361 0 .724-.05 1.061-.137-1.847-.374-3.23-1.995-3.23-3.953v-.05c.537.299 1.16.486 1.82.511-1.086-.722-1.797-1.957-1.797-3.356 0-.748.199-1.434.548-2.032 1.983 2.443 4.964 4.04 8.306 4.215-.062-.3-.1-.599-.1-.898 0-2.157 1.746-3.916 3.916-3.916 1.124 0 2.135.473 2.846 1.234.886-.174 1.721-.511 2.468-.973-.298.898-.936 1.659-1.771 2.132.786-.087 1.546-.311 2.245-.624-.524.773-1.183 1.459-1.945 2.007z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/funmioba_?igsh=MTJwd3c5djg4cmZhZQ%3D%3D&utm_source=qr" 
                  target='_blank'
                  className="bg-card hover:bg-secondary p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    height="20" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex text-sm font-medium">
                   <UserRound className='rounded-full text-primary mr-2 h-5 w-5'/>
                   Name
                  </label>
                  <Input 
                    id="name" 
                    name='name'
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="flex text-sm font-medium">
                   <Mail className="rounded-full text-primary mr-2 h-5 w-5"/>
                   Email
                  </label>
                  <Input 
                    id="email"
                    name='email'
                    type="email" 
                    placeholder="Your email" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="flex text-sm font-medium">
                  <Captions className="rounded-full text-primary mr-2 h-5 w-5"/>
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name='subject'
                  type='text'
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="flex text-sm font-medium">
                 <MessageCircleHeart className="rounded-full text-primary mr-2 h-5 w-5"/>
                 Message
                </label>
                <Textarea 
                  id="message" 
                  name='message'
                  placeholder="Your message" 
                  required 
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

}
export default ContactSection;
