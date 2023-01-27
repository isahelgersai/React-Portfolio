import React from 'react';
import Title from './Title';

const Timeline = () => {
  return (
    <>
      <Title>Resume</Title>
      <ol className='relative border-l border-gray-600 my-20 ml-10 '>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-500'>2020 - Present</time>
          <h3 className='text-lg font-bold text-gray-800'>
            BlackPoint Software | Front-end developer – (Dominican Republic - Remote)
          </h3>
          <p className='mb-4 text-base font-medium text-gray-700'>
            Front-end web development (Wordpress, Joomla, HTML/CSS, JS).
          </p>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-500'>2018 - 2020</time>
          <h3 className='text-lg font-bold text-gray-800 '>Casino Alhambra | Back-end developer – (Venezuela)</h3>
          <p className='text-base font-medium text-gray-700'>Back-end .NET development (C#).</p>
        </li>
        <li className='ml-4'>
          <div className='absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-500'>2017 - 2018</time>
          <h3 className='text-lg font-bold text-gray-800'>
            BlackPoint Software | Full-stack developer – (Dominican Republic - Remote)
          </h3>
          <p className='text-base font-medium text-gray-700'>
            Full-stack web development (PHP, SQL, HTML/CSS, JS, AJAX).
          </p>
        </li>
      </ol>
    </>
  );
};

export default Timeline;
