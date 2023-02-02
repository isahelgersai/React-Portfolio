import React from 'react';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Github } from '../assets/github.svg';

const Footer = () => {
  return (
    <div className='py-5 text-center font-inter'>
      <div className='container max-w-screen-lg mx-auto'>
        <div>
          <div className='flex flex-wrap justify-center gap-2'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/isahelheredia/'
              className='bg-transparent p-2 font-semibold text-stone-50 hover:text-blue-600 duration-500 inline-flex items-center space-x-2'
            >
              <Linkedin className='w-5 h-5 fill-current' />
            </a>
            <a
              target='_blank'
              href='https://github.com/isahelgersai'
              className='bg-transparent p-2 font-semibold text-stone-50  hover:text-black duration-500 inline-flex items-center space-x-2'
            >
              <Github className='w-5 h-5 fill-current' />
            </a>
          </div>
        </div>
      </div>
      <p className='text-sm mt-2 text-stone-50 select-none opacity-50'>
        &copy; {new Date().getFullYear()} Isahel Heredia
      </p>
    </div>
  );
};

export default Footer;
