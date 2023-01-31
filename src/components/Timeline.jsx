import React from 'react';
import Education from './ResumeItems/Education';
import Languages from './ResumeItems/Languages';
import Work from './ResumeItems/Work';
import Title from './Title';

const Timeline = () => {
  return (
    <>
      <Title>Resume</Title>
      <Work />
      <Education />
      <Languages />
    </>
  );
};

export default Timeline;
