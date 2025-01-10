import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-teal-700 to-blue-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-5">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736521510/Screenshot_16_dbnexg.png" alt="Project 1" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-lg mb-4">A brief description of the project, highlighting the technology used and its impact.</p>
            <a href="https://football-teams-manager-zlcj-962br5ryz-shivams-projects-14606ef9.vercel.app/" target="_blank" className="text-teal-300 hover:underline">View Project</a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736521952/rpnhip3aauz1slzofmpl.png" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-lg mb-4">A brief description of the project, highlighting the technology used and its impact.</p>
            <a href="https://coffee-heaven-epxh-9ikor5e5d-shivams-projects-14606ef9.vercel.app/" target="_blank" className="text-teal-300 hover:underline">View Project</a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            <img src="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736522374/universitypage_wwypfa.png" alt="Project 3" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
            <p className="text-lg mb-4">A brief description of the project, highlighting the technology used and its impact.</p>
            <a href="https://university-inky.vercel.app/" target="_blank" className="text-teal-300 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
