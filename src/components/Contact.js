import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='container-fluid mt-5'>
        <h2 className='section-header text-center mb-5'>Contact Us</h2>
        <div className='row'>
          <div className='col-sm left'>
            <form>
              <div className='form-group'>
                <input
                  className='form-control form-control-lg mt-5'
                  type='text'
                  placeholder='Name'
                  id='name'
                />

                <input
                  className='form-control form-control-lg mt-2'
                  type='email'
                  placeholder='Email'
                  id='email'
                />

                <input
                  className='form-control form-control-lg mt-2'
                  type='text'
                  placeholder='Phone Number'
                  id='phone'
                />

                <textarea
                  className='form-control form-control-lg mt-2 mb-5'
                  type='text'
                  placeholder='Message'
                  id='message'
                ></textarea>

                <button
                  type='submit'
                  class='btn btn-lg btn-light btn-block mb-5'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className='col-sm right pt-5 pb-5'>
            <h5>Hours</h5>
            <h6>Open Monday - Saturday</h6>
            <h6>7am - 5pm</h6>
            <h6>Closed Sundays</h6>
            <br />
            <h5>Telephone</h5>
            <h6>
              <a href='tel:702-591-9045'>(702) 591-9045</a>
            </h6>
            <br />
            <h5>email</h5>
            <h6>
              <a href='mailto:sachis@sachisfnb.com'>sachis@sachisfnb.com</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
