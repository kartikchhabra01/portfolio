import React, { useState } from 'react';

const GITHUB_PROFILE = 'https://github.com/kartikchhabra01';

const Projects: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Intrusion Detection System (IDS)',
      description:
        'A comprehensive Streamlit-based dashboard featuring File Integrity Monitoring, Network Intrusion Detection System (NIDS), and Email Analysis capabilities for real-time security monitoring.',
      technologies: ['Python', 'Streamlit', 'Cybersecurity', 'Network Security'],
      image: '🛡️',
      githubUrl: `${GITHUB_PROFILE}/intrusion_detection`,
    },
    {
      id: 2,
      title: 'Zero Trust Enterprise Security Dashboard',
      description:
        'Developed a Zero Trust Enterprise Security Dashboard to manage secure user access, role-based monitoring, and protected file handling within an organization. Built separate dashboards for Employees, Managers, and Admins with authentication, activity tracking, secure file sharing, and file integrity verification features using React and Flask.',
      technologies: ['React', 'Flask', 'Zero Trust Security', 'Authentication', 'File Integrity'],
      image: '🔐',
      githubUrl: GITHUB_PROFILE,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio website built with React and TypeScript, featuring smooth animations, project showcases, and a professional design.',
      technologies: ['React', 'TypeScript', 'CSS', 'Responsive Design'],
      image: '💼',
      githubUrl: `${GITHUB_PROFILE}/portfolio`,
    },
  ];

  const selectedProject = projects.find((p) => p.id === openDetails);

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
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <button
                    type="button"
                    onClick={() => setOpenDetails(project.id)}
                    className="btn-primary"
                  >
                    Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary project-github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {openDetails !== null && selectedProject && (
          <div className="modal-overlay" onClick={() => setOpenDetails(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setOpenDetails(null)}
              >
                &times;
              </button>
              <h4>{selectedProject.title}</h4>
              <p>{selectedProject.description}</p>
              <h5>Tech Stack:</h5>
              <ul>
                {selectedProject.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary project-github-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
