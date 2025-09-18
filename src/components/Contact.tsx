import React from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <a href="https://github.com/kartikchhabra01" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/whyykartikk/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
          {submitted && (
            <div className="submitted-info">
              <h4>Thank you for reaching out!</h4>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Message:</strong> {formData.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
