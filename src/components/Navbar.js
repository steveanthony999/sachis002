import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from '../images/Logo.png';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
      {/* BRAND */}
      <div className='container'>
        <div>
          <a className='navbar-brand' href='#'>
            {/* <h1>Sachi's</h1> */}
            <img src={Logo} alt="Sachi's Logo" style={{ width: '140px' }} />
          </a>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* LINKS */}
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item'>
              <AnchorLink className='nav-link' href='#about'>
                ABOUT <span className='sr-only'></span>
              </AnchorLink>
            </li>
            <div className='breaker'>&nbsp;|&nbsp;</div>
            <li className='nav-item'>
              <AnchorLink className='nav-link' href='#products'>
                PRODUCTS
              </AnchorLink>
            </li>
            <div className='breaker'>&nbsp;|&nbsp;</div>
            <li className='nav-item'>
              <AnchorLink className='nav-link' href='#blog'>
                BLOG
              </AnchorLink>
            </li>
          </ul>
        </div>
        {/* CONTACT */}
        <div className='full-menu-contact'>
          <AnchorLink href='#contact'>CONTACT</AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
