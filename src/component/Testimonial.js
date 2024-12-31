import React, { useState, useEffect } from 'react';
import logoss from "../asset/img/Engtern_logo.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Manoj Mishra",
      role: "Software testing Engineer",
      text: "Teaching style is excellent! It took just 2 months of working with Diya Ma'am to see noticeable improvement, and my confidence level has definitely boosted. Amazing, Thank you for your guidance!",
      image: logoss
    },
    {
      name: "Muneet Singh",
      role: "Agency Owner",
      text: "I love her way of teaching. ... She is humble, polite and co operative",
      image: logoss
    },
    {
      name: "Sanjit",
      role: "Manager",
      text: "To be honest, the way you explained the topics was very clear. It really helped me understand and learn communication techniques and skills",
      image: logoss
    },
    {
      name: "Vinay",
      role: "DGM Finance", 
      text: "I wanted to take a moment to express my appreciation for the exceptional teaching I received from you. Your ability to break down complex concepts into understandable",
      image: logoss
    },
    {
      name: "Suraj sharma",
      role: "Manager Procurement",
      text: "It was great experience, lots of things learned and build my confidence.",
      image: logoss
    },
    {
      name: "Pranav Kumar",
      role: "Investment banker",
      text: "Diya mam is an exceptional teacher whose dedication and passion for teaching are evident in every class. Her clear explanations and engaging teaching style make learning enjoyable and effective. I highly recommend her for learning english communication skills and Personal development skills.",
      image: logoss
    },
    {
      name: "Priti shekhawat",
      role: "Student",
      text: "My experience of learning English from her is so so good.",
      image: logoss
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = testimonials.length - getItemsToShow();
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const getItemsToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - getItemsToShow();
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - getItemsToShow();
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <style>
        {`
          .hero-section {
            background-color:#706fe5 ;
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

          .hero-content p {
            font-size: 1.25rem;
            color: white;
            max-width: 36rem;
            margin: 1rem auto;
          }

          .testimonials-section {
            background-color: #f9fafb;
            padding: 4rem 1rem;
          }

          .testimonials-container {
            max-width: 1280px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }

          .carousel-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .testimonials-wrapper {
            display: flex;
            gap: 1rem;
            transition: transform 0.5s ease;
            width: 100%;
          }

          .testimonial-card {
            background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            flex: 0 0 calc(33.333% - 1rem);
            margin-right: 1rem;
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .testimonial-image {
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
          }

          .testimonial-image img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }

          .quote-icon {
            width: 2rem;
            height: 2rem;
            fill: #9ca3af;
          }

          .testimonial-content {
            flex-grow: 1;
          }

          .testimonial-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
          }

          .testimonial-text {
            color: #4b5563;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .testimonial-role {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 500;
          }

          .carousel-button {
            background: #ffffff;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 1;
            transition: background-color 0.3s ease;
          }

          .carousel-button:hover {
            background-color: #f3f4f6;
          }

          .carousel-button.prev {
            left: 0;
          }

          .carousel-button.next {
            right: 0;
          }

          .carousel-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #d1d5db;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .dot.active {
            background: #1a1a1a;
          }

          @media (max-width: 1024px) {
            .testimonial-card {
              flex: 0 0 calc(50% - 1rem);
            }
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .hero-content p {
              font-size: 1rem;
            }

            .testimonial-card {
              flex: 0 0 100%;
            }
          }
        `}
      </style>

      <div className="hero-section">
        <div className="hero-content">
          <h1 >Testimonials</h1>
          <p className="mt-2 text-sm">
          <span>
            <a href="/" className="hover:underline">
              Home
            </a>
          </span>
          <span className="mx-1">›</span>
          <span>
            <a href="/testimonials" className="hover:underline">
              Testimonials
            </a>
          </span>
        </p>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-container ">
          <div 
            className="carousel-container "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="carousel-button prev" onClick={handlePrevious}>❮</button>
            <div 
              className="testimonials-wrapper"
              style={{
                transform: `translateX(-${currentIndex * (100 / getItemsToShow())}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  className="testimonial-card" 
                  key={index}
                >
                  {/* <div className="testimonial-header w-full flex ">
                    <div className="testimonial-image">
                      <img src={testimonial.image} alt={testimonial.name}
                      className='bg-red-600 '
                      />
                    </div>
                    <svg 
                      className="quote-icon"
                      viewBox="0 0 190.5 148" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M37.7,146.3L2.1,124.6C19.3,100,28.2,74.1,28.8,46.7V2.3H90v38.8c0,19.3-5,38.8-15.1,58.4C64.9,119,52.5,134.6,37.7,146.3z M133.7,146.3l-35.6-21.7c17.2-24.5,26.2-50.5,26.8-77.9V2.3h61.2v38.8c0,19.3-5,38.8-15.1,58.4C160.9,119,148.5,134.6,133.7,146.3z"/>
                    </svg>
                  </div> */}

<div className="testimonial-header w-full flex justify-center items-center">
  <div className="testimonial-image flex justify-center items-center bg-gray-100 rounded-full" style={{ width: "150px", height: "150px" }}>
    <img 
      src={testimonial.image} 
      alt={testimonial.name} 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
                  <div className="testimonial-content">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-button next" onClick={handleNext}>❯</button>
          </div>
          <div className="carousel-dots">
            {Array.from({ length: testimonials.length - getItemsToShow() + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;