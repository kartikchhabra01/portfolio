import React, { useEffect } from 'react';
import './AboutModern.css';
import TerminalSpecialities from './TerminalSpecialities';

const About: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('dark');
    return () => document.body.classList.remove('dark');
  }, []);
  const skills = [
    { name: 'C/C++', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Cybersecurity', level: 85 },
    { name: 'Networking', level: 80 },
    { name: 'Web Security', level: 75 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'React', level: 80 }
  ];

  return (
    <section id="about" className="section about about-modern">
      <div className="about-modern-container">
        <div className="about-modern-text">
          <h1 className="about-modern-headline">But first, let me introduce myself.</h1>
          <p className="about-modern-intro">
            My name is Kartik Chhabra, and I'm a B.Tech CSE student passionate about software development and cybersecurity.
          </p>
          <p className="about-modern-desc">
            I specialize in <span className="highlight">C/C++</span>, <span className="highlight">Java</span>, <span className="highlight">Python</span>, and <span className="highlight">React</span> for building secure, efficient, and innovative solutions. My interests include ethical hacking, intrusion detection, and secure software design.
          </p>
          <p className="about-modern-desc">
            Currently in my 3rd year at Graphic Era Deemed to be University, I combine hands-on software development skills with cybersecurity expertise to create high-impact projects.
          </p>
          <div className="about-modern-edu">
            <strong>Education:</strong> B.Tech Computer Science & Engineering (3rd Year), Graphic Era Deemed to be University
          </div>
          <div className="about-modern-skills">
            <strong>Technical Skills:</strong>
            <ul>
              {skills.map(skill => (
                <li key={skill.name}><span className="highlight">{skill.name}</span> ({skill.level}%)</li>
              ))}
            </ul>
          </div>
          <a href="/kARTIK CHHABRA.pdf" className="btn-primary" download>Download Resume</a>
          <TerminalSpecialities />
        </div>
        
        <div className="about-modern-image-col">
          <div className="about-modern-image-card">
            <img src="/WhatsApp Image 2025-09-18 at 22.17.06_827cb789.jpg" alt="Kartik Chhabra" className="about-modern-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
