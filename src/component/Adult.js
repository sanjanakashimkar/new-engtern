import React from "react";
import girl from "../asset/img/about_girl.png";
import adult from "../asset/video/adult.mp4";

function Adult() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-[#FFD700]">Engtern For Adults </span>
              <span className="text-black">
                : English, Your Gateway to a Brighter Future!
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
              In this fast-moving world, none of us would want to have slow
              speaking or less engagement. Networking has become the need of
              the hour, which requires professional communication skills.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative w-full max-w-2xl aspect-[4/3]">
            <img
              src={girl}
              alt="Child gaining confidence through Engtern's public speaking program"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-4 sm:top-8 right-4 sm:right-8 w-full h-full bg-[#FFD700]/10 rounded-2xl"></div>
            <div className="absolute -z-20 top-8 sm:top-16 right-8 sm:right-16 w-full h-full bg-[#FFD700]/5 rounded-2xl"></div>
          </div>
        </div>
      </main>

      {/* Video Section */}
      <div className="container mx-auto px-4 py-12 w-full sm:w-[90%] md:w-[80%] lg:w-[1500px]">
        <div className="flex justify-center items-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[1200px] h-auto sm:h-[400px] md:h-[500px] lg:h-[670px] rounded-lg shadow-lg overflow-hidden">
            {/* Video without Controls */}
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              autoPlay
              loop
              muted
              src={adult}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 lg:ml-[150px]">
        <div className="space-y-4">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            And for all this, we are here to give you the best of all the world in your live sessions, valuing your time and efforts,{' '}
            <span className="text-teal-600 font-medium">
              Create your personalized plan now
            </span>
          </p>
          
          <p className="text-teal-600 font-medium text-lg font-bold">
            See you in the session!
          </p>

          <button className="bg-[#FFCB45] hover:bg-[#f0bd3d] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors duration-200 font-bold text-sm sm:text-base">
            Contact Us To Know More
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }

          .video-container {
            height: 300px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          h1 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1.125rem;
          }

          .video-container {
            height: 400px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          h1 {
            font-size: 3rem;
          }

          p {
            font-size: 1.25rem;
          }

          .video-container {
            height: 500px;
          }
        }

        @media (min-width: 1025px) {
          .container {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }

          h1 {
            font-size: 3.5rem;
          }

          p {
            font-size: 1.5rem;
          }

          .video-container {
            height: 670px;
          }
        }
      `}</style>
    </div>
  );
}

export default Adult;