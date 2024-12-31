import React from 'react';
import { motion } from 'framer-motion';
import kid from '../asset/img/kids.webp';
import kids from "../asset/video/kids.mp4";

function Kids() {
  // Animation Configurations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          .video-container {
            width: 100%;
          }
          .video-wrapper {
            width: 100%;
            height: auto;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }
          .header-content {
            text-align: center;
          }
        }
      `}</style>

      {/* Header Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-2xl header-content">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-[#FFD700]">Engtern</span>
              <span className="text-black"> : English, Your Gateway to a Brighter Future!</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8">
              Want to see your kid speak with confidence? Empower young minds with Engtern.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-2xl aspect-[4/3]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={kid}
                alt="Child gaining confidence through Engtern's public speaking program"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-[#FFD700]/10 rounded-2xl"></div>
            <div className="absolute -z-20 top-16 right-16 w-full h-full bg-[#FFD700]/5 rounded-2xl"></div>
          </div>
        </div>
      </main>

      {/* Public Speaking Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <motion.p
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#FFD700] text-bold">Public speaking</span>
            {' '}is a necessary skill to which one should get acquainted with in their childhood itself.
            As this is the right time to mould young minds, introducing them to the right techniques
            through animated content and a friendly teaching approach is key.
          </motion.p>
        </div>

        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-[#00BCD4] mb-8 sm:mb-12"
          {...fadeInUp}
        >
          Our Course Structure
        </motion.h2>

        {/* Video Section - Moved below the "Our Course Structure" heading */}
        <div className="container mx-auto px-4 py-8 sm:py-12 w-full lg:w-[1200px] xl:w-[1500px] video-container">
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-[1000px] xl:w-[1200px] h-auto lg:h-[670px] rounded-lg shadow-lg overflow-hidden video-wrapper">
              {/* Video without Controls */}
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                src={kids}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-8 text-center sm:text-left sm:ml-[150px] sm:mt-[-140px]">
        <div className="space-y-4">
          <button className="bg-[#FFCB45] hover:bg-[#f0bd3d] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors duration-200 font-bold mt-4">
            Contact Us To Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kids;

