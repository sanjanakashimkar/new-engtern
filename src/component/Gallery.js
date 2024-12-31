import React, { useState } from 'react';
import training from '../asset/img/training.jpg'
import discussion from '../asset/img/GD.jpg'
import third from '../asset/img/third.jpg'
import forth from '../asset/img/forth.jpg'
import fifth from '../asset/img/5th.jpg'
import six from '../asset/img/6th.jpg'
import seven from '../asset/img/7th.jpg'
import eight from '../asset/img/8th.jpg'
import nine from '../asset/img/9th.jpg'
import ten from '../asset/img/10th.jpg'
import engtern from '../asset/img/engtern.jpg'
// import video from '../asset/video/engtervideo.mp4'



const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { 
      type: 'image', 
      src: training, 
      alt: 'Training Session',
      title: 'Training Session'
    },
    { 
      type: 'image', 
      src: discussion, 
      alt: 'Presentation',
      title: 'Group Discussion'
    },
    { 
      type: 'image', 
      src: third, 
      alt: 'Group photo',
      title: 'Hemvati Nandan Bahuguna Garhwal University Organising workshop on Personality Development & Soft Skills Training Programs'
    },

    { 
      type: 'image', 
      src: forth, 
      alt: 'Meeting room',
      title: 'Hemvati Nandan Bahuguna Garhwal University Organising workshop on Personality Development & Soft Skills Training Programs'
    },
   
    { 
        type: 'image', 
        src: fifth, 
        alt: 'Meeting room',
        title: 'Alumni Interaction Session on Skill up, Stand Out: Pre Graduation Strategies for a Stellar Career'
    },
    { 
        type: 'image', 
        src: six, 
        alt: 'Meeting room',
        title: 'Alumni Interaction Session on Skill up, Stand Out: Pre Graduation Strategies for a Stellar Career'
    },
    { 
        type: 'image', 
        src: seven, 
        alt: 'Meeting room',
        title: '1:1/1:2 Live Session'
    },
    { 
        type: 'image', 
        src: eight, 
        alt: 'Meeting room',
        title: '1:1 Online Session'
    },
    { 
        type: 'image', 
        src: nine, 
        alt: 'Meeting room',
        title: '1:1/1:2 Live Session'
    },
    { 
        type: 'image', 
        src: ten, 
        alt: 'Meeting room',
        title: '1:1 Online Session'
    },
    { 
      type: 'image', 
      src: engtern, 
      alt: 'Meeting room',
      title: 'Engtern'
   },
    
      // { 
      //   type: 'video', 
      //   src: video, 
      //   thumbnail: '/path/to/thumb1.jpg', 
      //   alt: 'Video 1',
      //   title: 'Project Overview'
      // },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === 'video');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-500 py-12 text-center">
        <h1 className="text-4xl font-bold text-white">Gallery</h1>
        <p className="text-white mt-2">Photos | Gallery</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'videos'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            VIDEOS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => handleItemClick(item)}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600 ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                <h3 className="text-transparent group-hover:text-white font-bold text-lg text-center px-4 py-2 bg-black bg-opacity-75 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleModalClick}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-50"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              {selectedItem.type === 'video' ? (
                <video
                  controls
                  autoPlay
                  className="w-full h-auto"
                >
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full h-auto"
                />
              )}
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold text-gray-800">{selectedItem.title}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

