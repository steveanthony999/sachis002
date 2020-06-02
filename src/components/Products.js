import React from 'react';

import CandySVG from '../images/candySVG.svg';
import SnackSVG from '../images/snackSVG.svg';
import SodaSVG from '../images/sodaSVG.svg';

import './Products.css';

const Products = () => {
  return (
    <div id='products'>
      <div className='container mt-5 mb-5'>
        <h2 className='section-header text-center mb-5'>What We Do</h2>

        <div className='card-deck'>
          <div className='card pt-5'>
            <img
              src={CandySVG}
              className='card-img-top m-auto'
              alt='candy'
              style={{ width: '4rem' }}
            ></img>
            <div className='card-body'>
              <h5 className='card-title text-center'>High-end Candies</h5>
              <p className='card-text text-justify mt-2 p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium deleniti officia debitis. Sapiente, illum! Natus
                voluptatibus ratione pariatur saepe sed doloribus quisquam
                quidem, eum minus!
              </p>
              <a href='#' className='product-btn'>
                See Our Candies
              </a>
            </div>
          </div>

          <div className='card pt-5'>
            <img
              src={SnackSVG}
              className='card-img-top m-auto'
              alt='candy'
              style={{ width: '4rem' }}
            ></img>
            <div className='card-body'>
              <h5 className='card-title text-center'>Luxury Snacks</h5>
              <p className='card-text text-justify mt-2 p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium deleniti officia debitis. Sapiente, illum! Natus
                voluptatibus ratione pariatur saepe sed doloribus quisquam
                quidem, eum minus!
              </p>
              <a href='#' className='product-btn'>
                See Our Snacks
              </a>
            </div>
          </div>

          <div className='card pt-5'>
            <img
              src={SodaSVG}
              className='card-img-top m-auto'
              alt='candy'
              style={{ width: '4rem' }}
            ></img>
            <div className='card-body'>
              <h5 className='card-title text-center'>Premium Beverages</h5>
              <p className='card-text text-justify mt-2 p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium deleniti officia debitis. Sapiente, illum! Natus
                voluptatibus ratione pariatur saepe sed doloribus quisquam
                quidem, eum minus!
              </p>
              <a href='#' className='product-btn'>
                See Our Drinks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
