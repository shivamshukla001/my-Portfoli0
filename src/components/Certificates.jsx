import React from 'react';

const certificates = [
  {
    title: "DSA",
    organization: "Udemy",
    date: "Aug 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U3nL0h_MfecGfuyYkGmdwh0CCFz8hzhUIA&s",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736515689/dsa_certificate_rd8kyy.pdf",
  },
  {
    title: "Java + DSA",
    organization: "Apna College",
    date: "July 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U3nL0h_MfecGfuyYkGmdwh0CCFz8hzhUIA&s",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736515937/certificate-alpha-plus-batch-660d6bc9e46e69d24705fed7_sortoa.pdf",
  },
  {
    title: "Full Stack Mastery",
    organization: "Udemy",
    date: "May 4 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U3nL0h_MfecGfuyYkGmdwh0CCFz8hzhUIA&s",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736516019/fullstack_certificates_gkacrb.pdf",
  },
  {
    title: "Web Development Masterclass",
    organization: "Udemy",
    date: "Dec 31 2023",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U3nL0h_MfecGfuyYkGmdwh0CCFz8hzhUIA&s",
    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736517540/webdevelopment_certificated_pxcubg.pdf",
  },
  {
    title: "System Design Mastery",
    organization: "PW Skills",
    date: "August 17 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U3nL0h_MfecGfuyYkGmdwh0CCFz8hzhUIA&s",

    link: "https://res.cloudinary.com/dc9ae9bsh/image/upload/v1736516264/systemDesign_Certificate_otzskj.pdf",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Certificates</h2>
        <p className="text-center text-xl mb-12  bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Here are some of my certifications that validate my skills and expertise.
        </p>

        {/* Certificate Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all hover:scale-105"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Certificate Details */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.organization}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-teal-400 hover:text-teal-600 transition"
                >
                  View Certificate &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
