import React, { useState, useEffect } from 'react';
import logo from "../asset/img/Engtern_logo.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    {
      name: "Join us",
      link: "#",
      dropdown: [
        { name: "Student", link: "/join/student" },
        { name: "Teacher", link: "/join/teacher" },
        { name: "Intern", link: "/join/intern" },
      ],
    },
    {
      name: "Curriculum",
      link: "/curriculum",
      dropdown: [
        { name: "Kids", link: "/kids" },
        { name: "Adults", link: "/adult" },
      ],
    },
    { name: "Testimonial", link: "/testimonial" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const currentItem = menuItems.find(item => 
      item.link === path || (item.dropdown && item.dropdown.some(dropItem => dropItem.link === path))
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, []);

  const handleMouseEnter = (itemName) => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown('');
    }
  };

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    if (window.innerWidth < 1024) {
      setOpenDropdown(prevState => prevState === itemName ? '' : itemName);
    } else {
      setOpenDropdown('');
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.nav-items')) {
        setOpenDropdown('');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation">
      <style jsx>{`
        @media screen and (max-width: 1023px) {
          .nav-items {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
          }

          .nav-items.open {
            max-height: 1000px;
            transition: max-height 0.5s ease-in;
          }

          .nav-items > div {
            padding: 0.5rem 1rem;
            border-top: 1px solid #e5e7eb;
          }

          .nav-items > div:last-child {
            border-bottom: 1px solid #e5e7eb;
          }
        }

        @media screen and (min-width: 1024px) {
          .nav-items {
            display: flex !important;
          }
        }

        @media screen and (max-width: 640px) {
          .nav-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media screen and (min-width: 641px) and (max-width: 768px) {
          .nav-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media screen and (min-width: 769px) and (max-width: 1024px) {
          .nav-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media screen and (min-width: 1025px) {
          .nav-container {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }
        }
      `}</style>
      <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px]">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={logo}
                alt="ENGTERN"
                className="mt-[-45px] w-[150px] sm:w-[200px] md:w-[300px]"
              />
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className={`nav-items lg:flex lg:space-x-4 xl:space-x-8 ${isMenuOpen ? "open" : ""} w-full lg:w-auto mt-4 lg:mt-0 absolute lg:relative top-full left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.link}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                    }
                    handleClick(item.name);
                  }}
                  className={`block py-2 px-4 text-[#00B6BC] hover:text-[#00B6BC]/80 relative group text-sm md:text-base
                    ${activeItem === item.name ? "text-[#EAB308]" : ""}
                  `}
                  aria-haspopup={item.dropdown ? "true" : "false"}
                  aria-expanded={openDropdown === item.name ? "true" : "false"}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="ml-1 w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200
                      ${activeItem === item.name
                          ? "bg-[#EAB308]"
                          : "bg-transparent scale-x-0 group-hover:scale-x-100 group-hover:bg-[#00B6BC]"
                      }
                    `}
                  />
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`lg:absolute left-0 mt-2 w-full lg:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      openDropdown === item.name ? "block" : "hidden lg:hidden"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${item.name}-menu`}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          onClick={() => handleClick(dropdownItem.name)}
                          className={`block px-4 py-2 text-[#00B6BC] hover:text-[#00B6BC]/80 hover:bg-gray-100 text-sm md:text-base
                            ${
                              activeItem === dropdownItem.name
                                ? "text-[#EAB308]"
                                : ""
                            }
                          `}
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

