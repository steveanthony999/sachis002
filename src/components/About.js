import React from 'react';

import Vegas from '../images/vegas_1.jpg';
import Candy from '../images/candy_1.jpg';

import './About.css';

const About = () => {
  return (
    <div id='about' className='container mt-5'>
      <h2 className='section-header text-center'>About Sachi's</h2>
      <div className='row'>
        <div className='col-sm'>
          <img
            src={Vegas}
            className='img-fluid rounded mt-5 mb-5'
            alt='las vegas'
          />
        </div>
        <div className='col-sm'>
          <h2 className='mt-5 mb-5'>Lorem Ipsum</h2>
          <p className='mt-5 mb-5 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestias consectetur expedita iure ipsam sit molestiae distinctio
            voluptatem doloremque aliquam, ex in nesciunt placeat sapiente
            officiis mollitia, perferendis nisi veritatis? Voluptatibus rem
            soluta, velit a fugit molestias! Eum doloribus adipisci molestias
            rerum facere.
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm'>
          <h2 className='mt-5 mb-5'>Dolor Sit</h2>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            molestias consectetur expedita iure ipsam sit molestiae distinctio
            voluptatem doloremque aliquam, ex in nesciunt placeat sapiente
            officiis mollitia, perferendis nisi veritatis? Voluptatibus rem
            soluta.
          </p>
        </div>
        <div className='col-sm'>
          <img
            src={Candy}
            className='img-fluid rounded mt-5 mb-5'
            alt='las vegas'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
