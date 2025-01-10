import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-gray-800 to-indigo-600 text-white shadow-lg w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolling ? 'bg-opacity-90 backdrop-blur-md' : 'bg-opacity-100'}`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-8">
        {/* Logo with hover effect */}
        <div className="text-3xl font-extrabold font-poppins tracking-tight cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <a href="#home">Shivam's Portfolio</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a
            href="#home"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#about"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#projects"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#skills"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#certificates"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Certificates
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#resume"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Resume
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#contact"
            className="relative group px-2 py-1 transition duration-300 text-gray-300 hover:text-teal-300"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 transform group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>

        {/* Social Links */}
        

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-700">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <a href="#home" className="hover:text-teal-300 transition-all duration-300">Home</a>
            <a href="#about" className="hover:text-teal-300 transition-all duration-300">About</a>
            <a href="#projects" className="hover:text-teal-300 transition-all duration-300">Projects</a>
            <a href="#skills" className="hover:text-teal-300 transition-all duration-300">Skills</a>
            <a href="#certificates" className="hover:text-teal-300 transition-all duration-300">Certificates</a>
            <a href="#resume" className="hover:text-teal-300 transition-all duration-300">Resume</a>
            <a href="#contact" className="hover:text-teal-300 transition-all duration-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
