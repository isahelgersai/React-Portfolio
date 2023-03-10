import React from 'react';
import { ReactComponent as IconWorld } from '../../assets/earth.svg';

const Languages = () => {
  return (
    <div className='font-inter'>
      <div className='flex items-center mt-10 md:mr-8 md:mb-0 text-stone-50'>
        <IconWorld className='w-8 h-8 fill-current' />
        <h5 className='text-xl font-semibold ml-3 select-none'>Languages</h5>
      </div>
      <ol className='relative border-l border-teal-500 mt-10 mb-20 ml-10 '>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-lg font-bold leading-none text-stone-50 select-none'>Spanish</time>
          <h3 className='text-lg font-bold text-stone-200 select-none'>Native Proficiency</h3>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-lg font-bold leading-none text-stone-50 select-none'>English</time>
          <h3 className='text-lg font-bold text-stone-200'>
            <a href='https://www.efset.org/cert/srySch' className='hover:text-teal-500 duration-500'>
              C1 Level (See EF certificate)
            </a>
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default Languages;
