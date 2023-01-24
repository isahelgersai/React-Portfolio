import React from 'react';

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={link}
      className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden bg-white'
    >
      <img src={imgUrl} alt='portfolio' className='w-full h-36 md:h-48 object-cover cursor-pointer' />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 mb:mb-3 font-semibold'>{title}</h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs'>
          {stack.map((item) => (
            <span key={item} className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
