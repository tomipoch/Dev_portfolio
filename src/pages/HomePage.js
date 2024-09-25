import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Experience from '../components/Experience';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <Experience />
    </>
  );
};

export default HomePage;
