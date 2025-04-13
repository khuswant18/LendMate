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
      
      <footer className="lk-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Lending Kat. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
    
  );
}

export default Home; 
 

