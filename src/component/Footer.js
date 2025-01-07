import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube , FaPinterest } from 'react-icons/fa';
import logozzzzzz from "../asset/img/Engtern_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-black-600 ">
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Logo Section */}
          <div className='mt-[-120px]'>
            <div className="mb-4 ">
              <img
                src={logozzzzzz}
                alt="Company Logo"
                className=" h-[280px] w-[280px]"
              />
            </div>
            <p className="text-sm">Your company slogan or brief description can go here.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Curriculum', href: '/services' },
                { name: 'Testimonial', href: '/portfolio' },
                { name: 'Gallery', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-teal-600 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Web Development', href: '/services/web-development' },
                { name: 'Mobile Apps', href: '/services/mobile-apps' },
                { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
                { name: 'UI/UX Design', href: '/services/ui-ux-design' },
                { name: 'Consulting', href: '/services/consulting' }
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-teal-600 transition-colors">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <address className="not-italic">
            Kamteshwar, Sonegaon Garhwal, Pauri ,<br />
            Uttarakhand, 246174<br />

            <br />
            <br />
              
              <a href="mailto:contact@psktech.com" className="hover:text-teal-600 transition-colors text-black ">
                contact@psktech.com
              </a>
            </address>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 pt-8 border-t border-black-200">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com/profile.php?id=61570419377220" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="https://x.com/engtern2025" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/engtern2025/" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="v" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/@Engtern2025" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">Pinterest</span>
              <FaYoutube className="h-6 w-6" />
            </a>

            <a href="https://in.pinterest.com/engtern2025/_pins/" className="text-gray-400 hover:text-teal-600">
              <span className="sr-only">Pinterest</span>
              <FaPinterest className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-black-400">
            <p>Project by PSK Technologies</p>
            <p className="mt-1">&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;