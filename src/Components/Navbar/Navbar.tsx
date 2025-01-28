import React, { useState } from 'react';
import { FaBars, FaHome, FaInfoCircle, FaPhone, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='bg-[#2F4F6F] text-white p-4 shadow-md'>
      <div className='container mx-auto flex  items-center justify-between'>
        <div className='text-2xl font-bold'>Hostel Vista</div>

        <div className='hidden md:flex space-x-8'>
          <ul className='flex space-x-8'>
            <li className='flex items-center space-x-2 hover:text-gray-300 transition duration-300'>
              <FaHome />
              <span>Home</span>
            </li>
            <li className='flex items-center space-x-2 hover:text-gray-300 transition duration-300'>
              <FaInfoCircle />
              <span>About</span>
            </li>
            <li className='flex items-center space-x-2 hover:text-gray-300 transition duration-300'>
              <FaPhone />
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none cursor-pointer'
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 mt-16 bg-[#2F4F6F] text-white p-6 w-72 -transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <ul className='space-y-6'>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaHome size={20} />
            <span>Home</span>
          </li>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaInfoCircle size={20} />
            <span>About</span>
          </li>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaPhone size={20} />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
