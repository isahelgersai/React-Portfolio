import React from 'react';
import Title from './Title';
import SkillsList from './SkillsList';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <>
      <Title>Skills</Title>

      <div className='flex flex-col md:flex-row items-center justify-center my-28'>
        <div className='grid md:grid-cols-2 lg:grid-cols-8 content-center gap-4'>
          {SkillsList.map(({ name, icon }) => (
            <>
              <Icon key={name} icon={icon} width='80' height='80' />

              <p className='flex flex-wrap items-center text-lg font-medium'>{name}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
