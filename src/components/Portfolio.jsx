import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

const Portfolio = () => {
  return (
    <>
      <Title>Projects</Title>

      <div className='flex flex-col md:flex-row items-center justify-center my-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          {portfolio.map(({ id, imgUrl, title, stack, link }) => (
            <PortfolioItem key={id} imgUrl={imgUrl} title={title} stack={stack} link={link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
