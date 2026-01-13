import React, { useState, useEffect } from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [text] = useTypewriter({ // Using react-simple-typewriter to animate the text
  words: ["Hi, I'm Funmilayo Oba"],
  loop: true,
  typeSpeed: 80,
  deleteSpeed: 50,
  delaySpeed: 3000,
});

const formatText = () => { // Function to format the text with "Funmilayo" highlighted
  if (text.includes("Funmilayo")) {
    const [before, after] = text.split("Funmilayo");
    return (
      <>
        {before}
        <span className="text-primary">Funmilayo</span>
        {after}
      </>
    );
  }
  return text;
};


  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center flex-shrink-0 gap-x-2">
            <img
              src="/images/FunmiObalogo.png"
              alt="logo"
              className="top-0 w-12 h-12"
            />
            <a
              href="#home"
              className="text-xl font-bold top-4 md:text-2xl text-foreground"
            >
              {formatText()}<Cursor cursorStyle="|" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground subtle-underline"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full">
                <a
                  href="/FunmiObaResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium rounded-md text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <a
                  href="/Funmilayo_Oba_Frontend_Developer_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
