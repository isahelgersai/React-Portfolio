import React from 'react';
import Title from './Title';
import Avatar from '../assets/photo-avatar.jpg';

const About = () => {
  return (
    <>
      <Title> About Me </Title>
      <div className='flex flex-col md:flex-row items-center justify-center my-28'>
        <img
          className='rounded-full border-2 border-teal-500 w-52 h-52 lg:mr-10 md:mr-10 mb-10'
          src={Avatar}
          alt='Avatar'
        ></img>
        <p className='text-lg lg:text-2xl font-semibold text-justify text-stone-50 font-inter select-none'>
          Software developer with over 4 years of work experience. Trying to keep in touch with current and emerging
          technologies and aiming to learn and improve my skills every day, building my version of the digital wor ld
          one step at a time.
        </p>
      </div>
    </>
  );
};

export default About;
