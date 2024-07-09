import React from 'react';
import heroBg from '../assets/herobg.png';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-screen w-screen'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col flex-1 justify-center mt-48'>
          <h1 className='text-white text-6xl font-bold px-10 finger-paint-regular '>
            Gobezoch Summer Camp
          </h1>
          <p className='text-xl text-cyan-900 p-10 font-semibold mt-24 md:mt-0 finger-paint-regular'>
            Kids explore coding, music, and art in a fun, creative summer
            adventure!
          </p>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSdnsHuGfQRtpCd51ShM5HMVx5nZ3Qm7MaXGOY7yEDWcLziZhQ/viewform?usp=sf_link'
            className='finger-paint-regular mx-10 flex justify-center w-fit px-4 py-2 rounded items-center bg-cyan-900 text-white font-semibold'
            target='_blank'
            rel='noopener noreferrer'
          >
            Register
          </a>
        </div>
        <div className='flex-1'></div>
      </div>
      {/* Add any content here */}
    </div>
  );
};

export default Hero;
