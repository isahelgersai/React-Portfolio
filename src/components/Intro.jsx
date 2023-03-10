import React from 'react';
import ParticlesEffect from './ParticlesEffect';

const Intro = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center lg:p-20 pb-6 mb-24 h-screen font-inter'>
      <div className='flex absolute w-full h-full top-0'>
        <ParticlesEffect />
      </div>
      <h1 className='text-4xl lg:text-7xl md:text-7xl mb-1 md:mb-3 font-bold text-stone-50 select-none'>
        Isahel Heredia
      </h1>
      <h2 className='text-2xl lg:text-5xl md:text-2xl mb-3 font-semibold text-teal-500 select-none'>Web Developer</h2>
      <p className='text-xl md:text-1xl text mb-3 font-medium text-stone-50 select-none'>
        React <span className='text-teal-500 text-2xl select-none'>|</span> JavaScript{' '}
        <span className='text-teal-500 text-2xl select-none'>|</span> PHP
      </p>
    </div>
  );
};

export default Intro;
