import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    
    // Prepare WhatsApp message
    const whatsappNumber = '+917038570978'; // Replace with your WhatsApp number
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="teacher-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Contact</h1>
          <p className="breadcrumb">
            <span>
              <a href="/" className="hover-underline">
                Home
              </a>
            </span>
            <span className="separator">›</span>
            <span>
              <a href="/contact" className="hover-underline">
                Contact
              </a>
            </span>
          </p>
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-[#00A6A9] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
            <p className="text-gray-600 font-bold">Kamteshwar, Sonegaon Garhwal, Pauri ,<br />Uttarakhand, 246174</p>
          </motion.div>

          {/* Mail */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-[#00A6A9] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">MAIL</h3>
            <p className="text-gray-600 font-bold">diyapart142@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-[#00A6A9] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">PHONE</h3>
            <p className="text-gray-600 font-bold">+91 6398542286</p>
          </motion.div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="bg-purple-50 p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Your Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#6C5CE7] text-white py-2 px-6 rounded-md hover:bg-[#5A4ED1] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44223.56452436935!2d78.75088253412049!3d30.141362951205636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a476b13ca115%3A0xa30049354e9659ca!2sPauri%2C%20Uttarakhand%20246001!5e0!3m2!1sen!2sin!4v1735969863091!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .teacher-page {
          width: 100%;
        }
        .hero-section {
          background-color: #706fe5;
          padding: 4rem 1rem;
          text-align: center;
        }
        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero-content h1 {
          font-size: 3.75rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }
        .breadcrumb {
          font-size: 0.875rem;
          color: white;
        }
        .hover-underline:hover {
          text-decoration: underline;
        }
        .separator {
          margin: 0 0.25rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Contact;

