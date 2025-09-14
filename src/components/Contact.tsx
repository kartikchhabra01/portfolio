import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects, especially in 
              cybersecurity, software development, and ethical hacking. Whether you have a question 
              or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-item">
              <i>📧</i>
              <span>chhabrakartiik242005@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <i>🎓</i>
              <span>B.Tech CSE Student - Graphic Era University</span>
            </div>
            
            <div className="contact-item">
              <i>📍</i>
              <span>Dehradun, Uttarakhand, India</span>
            </div>
            
            <div className="contact-item">
              <i>⏰</i>
              <span>Available for internships and projects</span>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/kartik-chhabra-927286289" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
