// src/components/About/About.js
import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Hey, This is Sujith Sai</h2>
          <p>
          Hello! Welcome to my portfolio <br></br> I am a passionate and dedicated student currently enrolled at VIT University, where I am pursuing my B.Tech in computer science and engineering. My thirst for knowledge and curiosity drive me to explore the ever-evolving world of technology, with a specific focus on web development and software development.
As a student, I am committed to acquiring the skills and expertise necessary to thrive in the tech industry.I firmly believe that the digital world holds endless opportunities for innovation and problem-solving, and I am excited to contribute to this dynamic landscape.
          </p>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/sujith-sai-18b4a1253/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
