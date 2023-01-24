import React from 'react';
import ContactInfo from './ContactInfo';
import Title from './Title';

const Contact = () => {
  return (
    <>
      <Title>Contact</Title>

      <div className='flex flex-col mb-10 mx-auto'>
        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/9b958f56-1cfa-4069-a9f3-ef913e9fe5d8'
            method='POST'
            className='flex flex-col w-full md:w-7/12'
          >
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Email'
              className=' my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Message'
              rows='10'
              className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
            />
            <button
              type='submit'
              className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 drop-shadow-md hover:stroke-white'
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>

      <ContactInfo />
    </>
  );
};

export default Contact;
