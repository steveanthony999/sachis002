import React from 'react';

import Caesars from '../images/cpLogo.jpg';
import Bellagio from '../images/bellagioLogo.jpg';
import Circus from '../images/circusLogo.jpg';
import Encore from '../images/encoreLogo.jpg';
import Wynn from '../images/wynnLogo.jpg';
import Sands from '../images/sandsLogo.jpg';
import Mgm from '../images/mgmLogo.jpg';
import Ny from '../images/nyLogo.jpg';

import './Customers.css';

const Customers = () => {
  return (
    <div id='customers'>
      <div className='container mt-5 mb-5'>
        <h2 className='section-header text-center mb-5'>Who We Serve</h2>
        <div className='row mb-5 logo-row'>
          <div className='col-sm'>
            <img src={Caesars} alt='ceasars' className='logos' />
          </div>
          <div className='col-sm'>
            <img src={Bellagio} alt='bellagio' className='logos' />
          </div>
          <div className='col-sm'>
            <div className='col-sm'>
              <img src={Circus} alt='circus circus' className='logos' />
            </div>
          </div>
          <div className='col-sm'>
            <div className='col-sm'>
              <img src={Encore} alt='encore' className='logos' />
            </div>
          </div>
        </div>
        <div className='row logo-row'>
          <div className='col-sm'>
            <img src={Wynn} alt='wynn' className='logos' />
          </div>
          <div className='col-sm'>
            <img src={Sands} alt='sands' className='logos' />
          </div>
          <div className='col-sm'>
            <img src={Mgm} alt='mgm' className='logos' />
          </div>
          <div className='col-sm'>
            <img src={Ny} alt='new york new york' className='logos' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
