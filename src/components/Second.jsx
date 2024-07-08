import React from 'react';
import cat from '../assets/cat.png';
import music from '../assets/music.png';
import art from '../assets/art.png';
const Second = () => {
  return (
    <div className='h-screen bg-white flex justify-center '>
      <div className='flex flex-col justify-center gap-16 '>
        <h1 className='text-center text-orange-500 md:text-3xl text-2xl my-4 font-bold px-2 md:px-0 pt-16 md:pt-0'>
          Providing Good Qualities For Your Loving Kids
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-16'>
          <div className='h-56 px-2 py-6 w-64 border-2 border-pink-600 rounded-xl flex flex-col items-center justify-center gap-2'>
            <img src={cat} alt='scratch' />
            <h1 className='text-cyan-900 text-lg font-semibold'>
              Code Training
            </h1>
            <p className='text-cyan-900 text-xs text-center'>
              {' '}
              Fun, interactive coding adventures for young tech enthusiasts!
            </p>
          </div>
          <div className='h-56 px-2 py-6 w-64 border-2 border-pink-600 rounded-xl flex flex-col items-center justify-center gap-2'>
            <img src={music} alt='scratch' />
            <h1 className='text-cyan-900 text-lg font-semibold'>
              Code Training
            </h1>
            <p className='text-cyan-900 text-xs text-center'>
              {' '}
              Fun, interactive coding adventures for young tech enthusiasts!
            </p>
          </div>
          <div className='h-56 px-2 py-6 w-64 border-2 border-pink-600 rounded-xl flex flex-col items-center justify-center gap-2'>
            <img src={art} alt='scratch' />
            <h1 className='text-cyan-900 text-lg font-semibold'>
              Code Training
            </h1>
            <p className='text-cyan-900 text-xs text-center'>
              {' '}
              Fun, interactive coding adventures for young tech enthusiasts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
