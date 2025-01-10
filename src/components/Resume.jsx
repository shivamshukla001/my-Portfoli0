import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <p className=" text-xl mb-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Here’s a quick look at my resume. Feel free to download or view it online!
        </p>

        {/* Resume Content */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-center md:space-x-12">
          {/* Resume Preview */}
          <div className="max-w-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aGcCGFRCImmfwZuQbZo7j9bCjo5mTrhA0GP_ivSScGvFQ7tC0V1BJ3hdoeIdYvvAs9U&usqp=CAU" // Replace with a thumbnail/preview of your resume
              alt="Resume Preview"
              className="rounded-lg shadow-lg hover:shadow-2xl transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1728286587/Resume.pdf" // Replace with your resume link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
            >
              View Resume
            </a>
            <a
              href="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1728286587/Resume.pdf" // Replace with your resume link
              download
              className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
