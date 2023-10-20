import React from 'react';
import './Education.css';  
const Education = () => {
  return (
    <div>
        <section id = "education">
        <h2 className="education-heading">Education</h2>
  
    <div className="education-box">
      
      <div className="education-content">
       <p className='school-name'>Vellore Institue of Technology, Amaravati</p>
        <p className='branch'>B.Tech in Computer Science and Engineering</p>
        <p className='grade'>Grade: 8.85 CGPA</p>
        <p className='year'>Year of passout: 2025</p>
      </div>
    </div>
    <div className="education-box2">  
      <div className="education-content">
      <p className='school-name'>SR Junior College</p>
        <p className='branch'>Intermediate - MPC</p>
        <p className='grade'>Grade: 75%</p>
        <p className='year'>Year of passout: 2021</p>
      </div>
    </div>
    <div className="education-box3">  
      <div className="education-content">
      <p className='school-name'>Rishi High School</p>
        <p className='branch'>Class X, SSC</p>
        <p className='grade'>Grade: 9.2 GPA</p>
        <p className='year'>Year of passout: 2019</p>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Education;
