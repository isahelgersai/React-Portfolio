import React from 'react';

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 mb-56 mt-40'>
      <h1 className='text-4xl lg:text-7xl md:text-7xl mb-1 md:mb-3 font-bold text-stone-50'>Isahel Heredia</h1>
      <h2 className='text-2xl lg:text-5xl md:text-2xl mb-3 font-semibold text-teal-500'>Web Developer</h2>
      <p className='text-xl md:text-1xl text mb-3 font-medium text-stone-50'>
        React <span className='text-teal-500 text-2xl'>|</span> JavaScript{' '}
        <span className='text-teal-500 text-2xl'>|</span> PHP
      </p>
    </div>
  );
};

export default Intro;
