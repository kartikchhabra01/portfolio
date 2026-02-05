import React from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ ENV VARIABLES
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const autoReplyTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const adminTemplateId =
      process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID!;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

    emailjs.init(publicKey);

    // ✅ SAME PARAMS FOR BOTH EMAILS
    const params = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // 1️⃣ SEND MESSAGE TO YOU (ADMIN)
    emailjs
      .send(serviceId, adminTemplateId, params)
      .then(() => {
        // 2️⃣ SEND AUTO-REPLY TO USER
        return emailjs.send(serviceId, autoReplyTemplateId, params);
      })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting
              projects, especially in cybersecurity, software
              development, and ethical hacking.
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
              <a
                href="https://linkedin.com/in/kartik-chhabra-927286289"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kartikchhabra01"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/whyykartikk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="submitted-info">
              <h4>Thank you for reaching out!</h4>
              <p>I’ll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
