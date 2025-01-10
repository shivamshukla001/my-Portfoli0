import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-24 px-6 md:px-12 mt-[80px]" // 80px margin to avoid overlap
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div
          className="md:w-1/2 text-center md:text-left space-y-6"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shivam Shukla
          </h2>
          <p className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
  Backend Developer | MERN Stack Enthusiast
</p>

          <p className="text-gray-400 leading-relaxed">
            I am a passionate backend developer specializing in building
            scalable and efficient web applications. With expertise in the MERN
            stack, I focus on delivering solutions that balance innovation with
            user experience.
          </p>
        </div>

        {/* Right Section - Image & Social Links */}
        <div
          className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {/* Profile Image */}
          <div className="w-56 h-56  bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-1">
            <img
              src="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736520630/lfxxuwtv2uetmkwofztj.jpg"
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/shivam-shukla-118870249/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://github.com/shivamshukla001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
