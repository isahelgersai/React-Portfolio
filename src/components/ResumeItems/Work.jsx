import React from 'react';
import { ReactComponent as IconBriefcase } from '../../assets/briefcase.svg';

const Work = () => {
  return (
    <div className='font-inter'>
      <div className='flex items-center mt-10 md:mr-8 md:mb-0 text-stone-50'>
        <IconBriefcase className='w-8 h-8 fill-current' />
        <h5 className='text-xl font-semibold ml-3 select-none'>Work Experience</h5>
      </div>
      <ol className='relative border-l border-teal-500 mt-10 mb-20 ml-10 '>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-sm font-normal leading-none text-stone-400 select-none'>2020 - Present</time>
          <h3 className='text-lg font-bold text-stone-50 select-none'>
            BlackPoint Software | Front-end developer – (Dominican Republic - Remote)
          </h3>
          <p className='mb-4 text-base font-medium text-stone-200 select-none'>
            Front-end web development (Wordpress, Joomla, HTML/CSS, JS).
          </p>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-sm font-normal leading-none text-stone-400 select-none'>2018 - 2020</time>
          <h3 className='text-lg font-bold text-stone-50 select-none'>
            Casino Alhambra | Back-end developer – (Venezuela)
          </h3>
          <p className='text-base font-medium text-stone-200 select-none'>Back-end .NET development (C#).</p>
        </li>
        <li className='ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-sm font-normal leading-none text-stone-400 select-none'>2017 - 2018</time>
          <h3 className='text-lg font-bold text-stone-50 select-none'>
            BlackPoint Software | Full-stack developer – (Dominican Republic - Remote)
          </h3>
          <p className='text-base font-medium text-stone-200 select-none'>
            Full-stack web development (PHP, SQL, HTML/CSS, JS, AJAX).
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Work;
