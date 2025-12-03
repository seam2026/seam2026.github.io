import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-dark-500 w-full pb-safe-bottom">
        <div className="mx-auto pt-safe-bottom">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
