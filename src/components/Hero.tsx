import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <video 
        className="hero-video"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/9783697-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <h1>Hi, I'm <span style={{ color: 'black' }}>KARTIK CHHABRA</span></h1>
        <p>Cybersecurity & Software Developer passionate about creating secure, efficient, and innovative digital solutions.</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3rd</span>
            <span className="stat-label">Year B.Tech CSE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
