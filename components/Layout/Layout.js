import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-dark-500 w-full h-full">
        <div className="mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
