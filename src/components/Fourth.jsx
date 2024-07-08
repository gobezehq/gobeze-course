import React from 'react';
import fourth from '../assets/fourth.png';
import Kids from '../assets/kids2.png';
const Fourth = () => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat h-screen pt-28'
      style={{ backgroundImage: `url(${fourth})` }}
    >
      <div className='flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center'>
        <div className='flex flex-1 justify-center items-center mt-20 md:mt-0'>
          <img src={Kids} alt='' className='md:h-80 h-60 w-auto' />
        </div>
        <div className='flex flex-col flex-1 justify-center items-center gap-2 finger-paint-regular'>
          <h1 className='text-cyan-900 font-semibold text-3xl -ml-28'>
            {' '}
            Music Training
          </h1>

          <div className='flex flex-col gap-1'>
            <p className='font-medium text-lg text-cyan-900'>
              Music training Basics
            </p>{' '}
            <p className='font-medium text-lg text-cyan-900'>
              Group Singing Sessions
            </p>
            <p className='font-medium text-lg text-cyan-900'>
              Musical Games and Challenges
            </p>
            <p className='font-medium text-lg text-cyan-900'>
              Guest Performnce and Workshops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
