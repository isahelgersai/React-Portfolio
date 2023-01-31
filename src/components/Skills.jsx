import React from 'react';
import Title from './Title';
import SkillsList from './SkillsList';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>

      <div className='flex flex-col md:flex-row items-center justify-center my-28'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-24 gap-16'>
          {SkillsList.map(({ name, icon }) => (
            <>
              <Icon
                key={name}
                icon={icon}
                width='86'
                height='86'
                className='text-teal-500 hover:text-teal-200 duration-500'
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
