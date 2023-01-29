import React from 'react';
import Avatar from '../assets/photo-avatar.jpg';

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <img className='rounded-full w-36 h-36' src={Avatar} alt='Extra large avatar'></img>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Isahel Heredia</h1>
      <h2 className='text-3xl md:textxl mb-3 font-semibold'>Web Developer</h2>
      <p className='text-xl md:textxl mb-3 font-medium'>React | JavaScript | PHP</p>
      <p className='text-base max-w-xl mb-6 font-bold'>
        27 Years old software developer, with over 4+ years of work experience. Trying to keep in touch with current and
        emerging technologies and aiming to learn and improve my skills every day, building my version of the digital
        wolrd one step at a time.
      </p>
    </div>
  );
};

export default Intro;
