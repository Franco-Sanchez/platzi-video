import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="App">
    <main>
      { children }
    </main>
    <Footer />
  </div>
);

export default Layout;
