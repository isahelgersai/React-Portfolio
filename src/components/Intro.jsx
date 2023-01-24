import React from 'react';

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <img className='rounded-full w-36 h-36' src='src\assets\photo-avatar.jpg' alt='Extra large avatar'></img>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Isahel Heredia</h1>
      <p className='text-base md:textxl mb-3 font-medium'>Web Developer</p>
      <p className='text-base md:textxl mb-3 font-medium'>React | PHP | SQL</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        27 Years old software developer, with over 4+ years of work experience.
        <br />
        Trying to keep in touch with current and emerging technologies and aiming to learn and improve my skills every
        day, building my version of the digital wolrd one step at a time.
      </p>
    </div>
  );
};

export default Intro;
