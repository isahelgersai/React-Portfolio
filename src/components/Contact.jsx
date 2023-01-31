import React from 'react';
import ContactInfo from './ContactInfo';
import Title from './Title';

const Contact = () => {
  return (
    <>
      <Title>Contact</Title>

      <div className='flex flex-col mb-10 mx-auto font-inter'>
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
              className='form-control
              my-2 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none'
              required
            />
            <input
              type='text'
              name='email'
              placeholder='Email'
              className='form-control
              my-2 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              rows='10'
              className='form-control
              mb-4 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none'
              required
            />
            <button
              type='submit'
              className='text-center inline-block px-8 py-3 w-max text-md font-semibold rounded-md text-white bg-gradient-to-r from-slate-800 via-teal-700 to-slate-800 drop-shadow-md hover:stroke-white duration-500'
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
