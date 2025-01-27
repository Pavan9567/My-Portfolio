import React from 'react';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Hi, I'm Pavan Kumar Maddimsetti</h1>
        <p>Full Stack Developer | React & Django Enthusiast</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
