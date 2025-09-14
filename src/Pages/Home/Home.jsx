import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProblemSolution from '../../components/ProblemSolution/ProblemSolution';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import './Home.css';

function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <HowItWorks />
    </main>
    
  );
}

export default Home; 
 

