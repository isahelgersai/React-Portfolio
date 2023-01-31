import React from 'react';

const Title = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className='text-3xl font-bold underline underline-offset-8 decoration-teal-500 mb-5 text-stone-50 select-none'
    >
      {children}
    </h1>
  );
};

export default Title;
