import React from 'react';

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={link}
      className='border-2 border-teal-500 rounded-md overflow-hidden bg-transparent'
    >
      <img src={imgUrl} alt='portfolio' className='w-full h-36 md:h-48 object-cover cursor-pointer' />
      <div className='w-full p-4 font-inter text-stone-100 border-t-2 border-teal-500'>
        <h3 className='text-lg underline underline-offset-4 decoration-teal-500 md:text-xl mb-5 mb:mb-3 font-bold'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs'>
          {stack.map((item) => (
            <span key={item} className='inline-block px-2 py-1 font-semibold border-2 border-teal-500 rounded-md'>
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
