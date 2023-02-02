import React from 'react';
import Title from './Title';
import SkillsList from './SkillsList';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>

      <div className='flex flex-col md:flex-row items-center justify-center my-24'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-32 lg:gap-y-16 gap-16'>
          {SkillsList.map(({ name, icon }) => (
            <>
              <div className='flex flex-col items-center justify-center'>
                <Icon
                  key={name}
                  icon={icon}
                  width='90'
                  height='90'
                  className='text-teal-500 hover:text-teal-200 duration-500'
                />

                <h5 className='text-xl font-bold font-inter text-stone-50 mt-4'>{name}</h5>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
