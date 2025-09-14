import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">Kartik Chhabra</div>
          
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/kartik-chhabra-927286289" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p>&copy; 2024 Kartik Chhabra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
