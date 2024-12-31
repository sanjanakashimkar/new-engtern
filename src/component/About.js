import React, { useState } from 'react';
import aboutgirls from "../asset/img/about_girl.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import diya from "../asset/img/diya.webp";
import prashantsir from "../asset/img/prashantsir.webp";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white">
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          h3 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .founder-image {
            height: 250px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>

      <div className="container mx-auto px-4 py-12 min-h-[650px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-500">Engtern</span>: English, Your Gateway to a Brighter Future!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              ENGTERN, a team of amazing teachers—along with the management team, have a vision of providing quality and catering to the needs of everyone irrespective of the issues they have.
            </p>
            <p className="text-base sm:text-lg text-teal-500 italic">
              <b>"Prices won't make a hole in your pocket instead content will make you a whole person"</b>
            </p>
          </div>

          {/* Right side image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <img
                src={aboutgirls}
                alt="Engtern - English Learning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#f5eeff] to-[white] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Meet Our <span className='text-yellow-400'> Founders </span></h2>
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left side */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 flex flex-col items-center">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full sm:w-[320px] md:w-[370px] lg:w-[420px] mx-auto md:ml-0 lg:ml-[220px] rounded-lg overflow-hidden mb-4 founder-image">
                <img
                  src={diya}
                  alt="Founder Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left md:ml-0 lg:ml-[220px]">Diya Pant</h3>
              <p className="text-gray-600 mb-4 text-center md:text-left md:ml-0 lg:ml-[220px]">
                Co-Founder, English Communication & Public Speaker
              </p>
              
              <div className="flex justify-center space-x-4 mb-4 md:ml-0 lg:ml-[220px]">
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
              <button
                onClick={toggleReadMore}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-teal-500 transition duration-300 md:ml-0 lg:ml-[220px]"
              >
                {isExpanded ? 'Read Less about Diya Pant' : 'Read More about Diya Pant'}
              </button>
            </div>

            {/* Right side */}
            <div className="w-full md:w-5/12 flex flex-col items-center mt-8 md:mt-0">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full sm:w-[320px] md:w-[370px] lg:w-[420px] mx-auto md:mr-0 lg:mr-[170px] rounded-lg overflow-hidden mb-4 founder-image">
                <img
                  src={prashantsir}
                  alt="Founder Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left md:mr-0 lg:mr-[170px]">Prashant Kadhao</h3>
              <p className="text-gray-600 mb-4 text-center md:text-left md:mr-0 lg:mr-[170px]">
                Co-Founder Technical Partner Of Engtern
              </p>
              <div className="flex justify-center space-x-4 mb-4 md:mr-0 lg:mr-[170px]">
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          {isExpanded && (
          <div className="mt-8 text-gray-700 animate-fadeIn max-w-3xl mx-auto px-4">
            <h3 className='text-xl font-semibold text-yellow-500'>About Diya Pant</h3>
            <h4 className="text-xl font-semibold mb-4 text-teal-500">Multifaceted Professional Experience:</h4>
            <ul className="list-disc list-inside mb-6">
              <li>Content Writing Head</li>
              <li>Public Speaking Instructor</li>
              <li>HR and Coordinator</li>
              <li>Guest Faculty at Central University, Uttarakhand</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4 text-yellow-500">Academic Excellence: Presented research papers at:</h4>
            <p className="mb-2"></p>
            <ul className="list-disc list-inside mb-6">
              <li>National Conferences:
                <ul className="list-disc list-inside ml-6">
                  <li>IIT (Indian Institute of Technology)</li>
                  <li>Ministry of Culture</li>
                  <li>IGNCA (Indira Gandhi National Centre for the Arts)</li>
                </ul>
              </li>
              <li>International Conferences, demonstrating commitment to innovative research and global collaboration.</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4 text-yellow-500">Published Author: Diya Pant is also a renowned author, having written two books:</h4>
            <p className="mb-2"></p>
            <ul className="list-disc list-inside mb-6">
              <li>"Say Hi to Emotions"</li>
              <li>"Love Yourself"</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4 text-yellow-500">Founder of Engtern:</h4>
            <p>
              Dedicated to empowering individuals through English language skills and personal development, 
              fostering growth and success.
            </p>
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default About;

