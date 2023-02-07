import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesEffect = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: 0,
          enable: false,
        },
        fpsLimit: 75,
        interactivity: {
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default ParticlesEffect;
