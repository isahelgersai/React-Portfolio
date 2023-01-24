import React from 'react';

const ContactInfo = () => {
  return (
    <div class='grid col-span-1 md:flex items-center justify-center mt-20'>
      <div class='md:flex items-center mb-4'>
        <div class='flex items-center md:mr-8 mb-4 md:mb-0'>
          <svg viewBox='0 0 24 24' className='w-7 h-7 mr-2' fill='currentColor'>
            <path d='M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z' />
          </svg>
          <p>isahelgersai@gmail.com</p>
        </div>

        <div class='md:flex items-center'>
          <div class='flex items-center md:mr-7'>
            <svg viewBox='0 0 24 24' className='w-7 h-7 mr-1' fill='currentColor'>
              <path d='M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2z' />
            </svg>
            <p>+57 3219007635 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
