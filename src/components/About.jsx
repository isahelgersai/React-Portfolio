import React from 'react';
import Title from './Title';
import Avatar from '../assets/photo-avatar.jpg';

const About = () => {
  return (
    <>
      <Title> About </Title>
      <div className='flex-col md:flex-row items-center justify-center my-28'>
        <img className='rounded-full w-36 h-36 float-left mr-10' src={Avatar} alt='Extra large avatar'></img>
        <p className='text-base max-w-xl mb-6 font-bold'>
          27 Years old software developer, with over 4+ years of work experience. Trying to keep in touch with current
          and emerging technologies and aiming to learn and improve my skills every day, building my version of the
          digital wolrd one step at a time.
        </p>
      </div>
    </>
  );
};

export default About;
