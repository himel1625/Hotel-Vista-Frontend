import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className='mx-auto md:mx-auto scroll-smooth'>
      <header>
        <Navbar />
      </header>
      <div className='min-h-[calc(100vh-30px)]  w-full'>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
