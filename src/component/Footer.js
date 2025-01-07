import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest,FaMapMarkerAlt, FaEnvelope, FaPhoneAlt  } from 'react-icons/fa';
import logozzzzzz from "../asset/img/Engtern_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className='mt-[-120px]'>
            <div className="mb-4">
              <img
                src={logozzzzzz}
                alt="Company Logo"
                className="h-[280px] w-[280px]"
              />
            </div>
            <p className="text-sm mt-[-70px]"> Our beginner-friendly lessons break down English into simple,
              manageable steps, making it easy for you to start speaking
              confidently</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ml-10">Quick Links</h3>
            <ul className="space-y-2 ml-10">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Curriculum', href: '/curriculum' },
                { name: 'Testimonial', href: '/testimonial' },
                { name: 'Gallery', href: '/gallery' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-600  text-black transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Online Courses', href: '/services/web-development' },
                { name: ' Tutors', href: '/services/mobile-apps' },
                { name: 'Beginner', href: '/services/cloud-solutions' },
                { name: 'Intermediate', href: '/services/ui-ux-design' },
                { name: 'Advanced', href: '/services/consulting' }
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-teal-600 text-black transition-colors">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
      <h3 className="text-lg font-semibold mb-4">Address</h3>
      <address className="not-italic">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-black mr-2 mt-[-45px]" />
          Kamteshwar, Sonegaon Garhwal,Pauri,<br />
          Uttarakhand, 246174
        </div>
        <br />
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-black mr-2" />
          <a
            href="mailto:contact@psktech.com"
            className="hover:text-teal-600 transition-colors text-gray-800 mr-3"
          >
            contact@psktech.com
          </a>
        </div>
        <br />
        <div className="flex items-center">
          <FaPhoneAlt className="text-black mr-2" />
          +91 6398542286
        </div>
      </address>
    </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com/profile.php?id=61570419377220" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://x.com/engtern2025" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/engtern2025/" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/@Engtern2025" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="https://in.pinterest.com/engtern2025/_pins/" className="text-gray-800 hover:text-teal-600">
              <span className="sr-only">Pinterest</span>
              <FaPinterest className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-800">
            <p>Project by PSK Technologies</p>
            <p className="mt-1">&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

