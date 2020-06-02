import React from 'react';

import RainbowCandy from '../images/rainbowCandy.jpg';
import RainbowCandy2 from '../images/rainbowCandy-2.jpg';

import './Blog.css';

const Blog = () => {
  return (
    <div id='blog'>
      <div className='container mt-5 mb-5'>
        <h2 className='section-header text-center mb-5'>Latest Stories</h2>

        <div className='card blog-shadow'>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img
                src={RainbowCandy}
                className='card-img'
                alt='rainbow candy'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Selling Sweets in Sin City</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ab eos nesciunt ducimus tempora deserunt culpa beatae
                  error explicabo earum dolor totam adipisci porro nobis
                  corrupti tempore pariatur dolorem natus asperiores, fuga quasi
                  perspiciatis. Molestiae...
                </p>
                <p className='card-text text-right'>Read More -></p>
              </div>
            </div>
          </div>
        </div>

        <div className='card mt-5 blog-shadow'>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img
                src={RainbowCandy2}
                className='card-img'
                alt='rainbow candy'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>
                  The How and Why of Malted Chocolate
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ab eos nesciunt ducimus tempora deserunt culpa beatae
                  error explicabo earum dolor totam adipisci porro nobis
                  corrupti tempore pariatur dolorem natus asperiores, fuga quasi
                  perspiciatis. Molestiae...
                </p>
                <p className='card-text text-right'>Read More -></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
