import React from 'react';
import third from '../assets/third.png';
import Kids from '../assets/kids3.png';
const Fifth = () => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-screen pt-28'
      style={{ backgroundImage: `url(${third})` }}
    >
      <div className='flex flex-col md:flex-row items-center justify-center gap-20 md:gap-0'>
        <div className='flex flex-col flex-1 justify-center items-center gap-2 mt-20 md:mt-0'>
          <h1 className='text-yellow-300 font-semibold text-3xl -ml-16'>
            {' '}
            Art Training
          </h1>
          <div className='flex flex-col gap-1'>
            <p className='font-medium text-lg text-white'>
              Drawing and Painting
            </p>{' '}
            <p className='font-medium text-lg text-white'>
              Crafts and DIY Projects
            </p>
            <p className='font-medium text-lg text-white'>Interactive Games</p>
            <p className='font-medium text-lg text-white'>Group Projects</p>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <img src={Kids} alt='' className='md:h-80 h-60  w-auto' />
        </div>
      </div>
    </div>
  );
};

export default Fifth;
