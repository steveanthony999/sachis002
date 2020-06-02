import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='cta'>
          <h1>Feelin' Snackish?</h1>
          <p>
            Give your guests the <span>BEST</span> in high-end candies, snacks,
            and non-alcoholic beverages
          </p>
          <a href='#' className='cta-btn'>
            Give Me Chocolate!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
