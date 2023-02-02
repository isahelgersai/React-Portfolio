import React, {useRef, useCallback} from 'react';
import ContactInfo from './ContactInfo';
import Title from './Title';

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
 
  const clearInputs = useCallback(
    () => {
      nameRef.current.value ='';
      emailRef.current.value ='';
      messageRef.current.value ='';
    },
    [nameRef, emailRef, messageRef],
  )
  


  return (
    <>
      <Title>Contact</Title>

      <div className='flex flex-col mb-10 mx-auto font-inter'>
        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/9b958f56-1cfa-4069-a9f3-ef913e9fe5d8'
            method='POST'
            onSubmit={clearInputs}
            className='flex flex-col w-full md:w-7/12 font-medium'
          >
            <input
            ref={nameRef}
              type='text'
              name='name'
              placeholder='Name'
              className='form-control
              my-2 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              text-white
              focus:text-white focus:bg-transparent focus:border-teal-500 focus:outline-none'
              required
            />
            <input
            ref={emailRef}
              type='text'
              name='email'
              placeholder='Email'
              className='form-control
              my-2 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              text-white
              focus:text-white focus:bg-transparent focus:border-teal-500 focus:outline-none'
              required
            />
            <textarea
            ref={messageRef}
              name='message'
              placeholder='Message'
              rows='10'
              className='form-control
              mb-4 p-2
              bg-transparent
              border-2 rounded-md border-white
              transition
              ease-in-out
              text-white
              focus:text-white focus:bg-transparent focus:border-teal-500 focus:outline-none'
              required
            />
            <button
              type='submit'
              className=' text-lg text-center inline-block px-8 py-3 w-full text-md font-semibold rounded-lg text-white bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900 drop-shadow-md'
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
