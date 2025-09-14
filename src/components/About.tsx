import React from 'react';

const About: React.FC = () => {
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
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Kartik Chhabra - Cybersecurity & Software Developer</h3>
            <p>
              I'm a passionate B.Tech CSE student at Graphic Era Deemed to be University, currently in my 3rd year. 
              I specialize in both software development and cybersecurity fundamentals, with a keen interest in 
              ethical hacking, intrusion detection, and secure software design.
            </p>
            <p>
              As a keen observer focused on success, I combine hands-on software development skills with 
              cybersecurity expertise to create secure, efficient, and innovative solutions.
            </p>
            
            <div className="education-info">
              <h4>Education</h4>
              <p><strong>Degree:</strong> B.Tech Computer Science & Engineering (3rd Year)</p>
              <p><strong>University:</strong> Graphic Era Deemed to be University</p>
            </div>
            
            <div className="skills">
              <h4>Technical Skills</h4>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className="btn-primary">Download Resume</a>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
