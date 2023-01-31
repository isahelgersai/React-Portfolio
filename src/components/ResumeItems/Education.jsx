import React from 'react';

const Education = () => {
  return (
    <>
      <h5 className='text-xl font-semibold mt-10 text-stone-50 select-none'>Education</h5>

      <ol className='relative border-l border-teal-500 mt-10 mb-20 ml-10 '>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-sm font-normal leading-none text-stone-400 select-none'>2016 - 2018</time>
          <h3 className='text-lg font-bold text-stone-50 select-none'>System Engineer (12 trimester)</h3>
          <p className='mb-4 text-base font-medium text-stone-200 select-none'>
            Universidad de Margarita – Nueva Esparta, Venezuela
          </p>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-4 bg-teal-500 rounded-full mt-1.5 -left-1.5 border-2 border-stone-50'></div>
          <time className='mb-1 text-sm font-normal leading-none text-stone-400 select-none'>2007 - 2012</time>
          <h3 className='text-lg font-bold text-stone-50 select-none'>Bachelor's Degree in Secondary Education</h3>
          <p className='text-base font-medium text-stone-200 select-none'>
            U.E.T.D Nueva Esparta - Nueva Esparta, Venezuela
          </p>
        </li>
      </ol>
    </>
  );
};

export default Education;
