import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Intrusion Detection System (IDS)",
      description: "A comprehensive Streamlit-based dashboard featuring File Integrity Monitoring, Network Intrusion Detection System (NIDS), and Email Analysis capabilities for real-time security monitoring.",
      technologies: ["Python", "Streamlit", "Cybersecurity", "Network Security"],
      image: "🛡️",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "QR Code Scam Detector",
      description: "Cybersecurity project designed to detect malicious QR codes and prevent phishing attacks by analyzing QR code content and URLs for potential security threats.",
      technologies: ["Python", "Cybersecurity", "QR Code Analysis", "Web Security"],
      image: "📱",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "Complete database design project with ER diagrams, implementing a comprehensive hospital management system with patient records, staff management, and appointment scheduling.",
      technologies: ["Database Design", "ER Diagrams", "SQL", "Software Engineering"],
      image: "🏥",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Sorting Algorithm Visualizer",
      description: "Interactive DSA project that visualizes various sorting algorithms (Bubble, Quick, Merge, etc.) with step-by-step animations to help understand algorithm behavior.",
      technologies: ["C/C++", "Java", "Data Structures", "Algorithms"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Networking Tools Simulation",
      description: "Advanced networking project featuring Packet Sniffer implementation, Netcat automation, and Nmap integration for network analysis and security testing.",
      technologies: ["Networking", "Packet Analysis", "Python", "Network Security"],
      image: "🌐",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, dark mode, and professional design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Web Design"],
      image: "💼",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span>{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <button onClick={() => setOpenDetails(project.id)} className="btn-primary">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {openDetails !== null && (
          <div className="modal-overlay" onClick={() => setOpenDetails(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setOpenDetails(null)}>&times;</button>
              <h4>{projects.find(p => p.id === openDetails)?.title}</h4>
              <p>{projects.find(p => p.id === openDetails)?.description}</p>
              <h5>Tech Stack:</h5>
              <ul>
                {projects.find(p => p.id === openDetails)?.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
