import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message Sent!');
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          I'd love to hear from you! Fill out the form below or contact me through social media.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            
            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            
            {/* Message Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="px-4 py-3 bg-gray-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links (Optional) */}
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/shivam-shukla-118870249/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mr-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shivamshukla001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
