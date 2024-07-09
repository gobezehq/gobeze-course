import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='gobeze-blue-bg  text-white text-center py-4'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-0'>
        <div className='flex-1 flex justify-center items-center'>
          <img src={logo} className='w-20 h-auto' alt='' />
        </div>
        <div className='flex-1 flex md:items-start  flex-col gap-4'>
          <h1 className='font-semibold text-yellow-300 text-2xl'>
            ABOUT COMPANY
          </h1>
          <p className='text-white md:text-start font-light text-base md:w-2/3'>
            Gobeze Consult, which was established in 2017, will commemorate its
            sixth year anniversary on March 8th, the day it formally began
            operations.
          </p>
          <div className='flex justify-center md:justify-start gap-6'>
            {' '}
            <a
              href='https://www.facebook.com/wingobeze/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook size={30} className='text-yellow-400' />
            </a>
            <a
              href='https://et.linkedin.com/company/gobezeconsult'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={30} className='text-yellow-400' />
            </a>
            <a
              href='https://www.instagram.com/wingobeze/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram size={30} className='text-yellow-400' />
            </a>
            <a
              href='https://twitter.com/traingobeze'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={30} className='text-yellow-400' />
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-5'>
        <hr />
        <p className='text-sm font-light mt-3'>
          &copy; 2024 Gobeze Consult. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
