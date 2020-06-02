import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Customers from './components/Customers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Customers />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
