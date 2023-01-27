import { useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className='max-w-5xl w-11/12 mx-auto'>
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
