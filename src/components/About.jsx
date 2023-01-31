import React from 'react';
import Title from './Title';
import Avatar from '../assets/photo-avatar.jpg';

const About = () => {
  return (
    <>
      <Title> About Me </Title>
      <div className='flex flex-col md:flex-row items-center justify-center my-28'>
        <img
          className='rounded-full border-4 border-teal-500 w-52 h-52 float-left mr-10 mb-5'
          src={Avatar}
          alt='Extra large avatar'
        ></img>
        <p className='text-lg lg:text-2xl md:text-lg font-bold text-justify text-stone-50 font-inter select-none'>
          27 Years old software developer, with over 4+ years of work experience. Trying to keep in touch with current
          and emerging technologies and aiming to learn and improve my skills every day, building my version of the
          digital wolrd one step at a time.
        </p>
      </div>
    </>
  );
};

export default About;
