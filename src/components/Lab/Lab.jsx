import React, { useEffect, useRef, useState } from 'react';
import './Lab.css';

const projects = [
  {
    file: 'play_protect.sys',
    title: 'Just-in-Time Protection Engine',
    icon: '🛡',
    description:
      'Real-time malware detection system scanning 125B+ apps daily across 3B Android devices. Revolutionized threat detection for previously unseen malware.',
    tags: ['JAVA', 'SECURITY', 'AI_ML'],
    highlight: true,
  },
  {
    file: 'tab_strip.rs',
    title: 'Chrome Tab Strip Redesign',
    icon: '🌐',
    description:
      'Redesigned tab interaction for Android tablets. 3 US design patents co-authored. 12% faster tab switching, 27% fewer slides to find tabs.',
    tags: ['ANDROID', 'UI_ENGINEERING', 'PATENTS'],
    highlight: false,
  },
  {
    file: 'observability.py',
    title: 'Mobile Observability Pipeline',
    icon: '📊',
    description:
      'End-to-end tracing with Jaeger, Looker Studio dashboards, Firebase + GA4 analytics. Enabled data-driven decisions across the entire mobile team.',
    tags: ['PYTHON', 'FIREBASE', 'ANALYTICS'],
    highlight: false,
  },
  {
    file: 'offline_engine.kt',
    title: 'Enterprise Offline Architecture',
    icon: '⚙',
    description:
      'Static and Dynamic Offline capabilities for enterprise mobile apps. Reduced UI reevaluations by 20-25% in offline mode for 30K+ monthly users.',
    tags: ['KOTLIN', 'ARCHITECTURE', 'PERFORMANCE'],
    highlight: false,
  },
  {
    file: 'saml_auth.java',
    title: 'SAML Auth with Client Certificates',
    icon: '🔐',
    description:
      'Architected SAML-based authentication using client certificates. Unblocked thousands of users from high-security clients including USMC and Fannie Mae.',
    tags: ['JAVA', 'SECURITY', 'ENTERPRISE'],
    highlight: false,
  },
  {
    file: 'portfolio.jsx',
    title: 'This Portfolio (Meta)',
    icon: '💻',
    description:
      'Terminal-themed interactive portfolio built with React. AI-augmented development — designed and shipped in a single session. You\'re looking at it.',
    tags: ['REACT', 'CSS', 'AI_GEN'],
    highlight: true,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`lab-card ${visible ? 'lab-card--visible' : ''} ${project.highlight ? 'lab-card--highlight' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="lab-card__file-header">
        <div className="lab-card__dots">
          <span className="dot dot--red"></span>
          <span className="dot dot--yellow"></span>
          <span className="dot dot--green"></span>
        </div>
        <span className="lab-card__filename">{project.file}</span>
      </div>

      <div className="lab-card__content">
        <div className="lab-card__title-row">
          <h3 className="lab-card__title">{project.title}</h3>
          <span className="lab-card__icon">{project.icon}</span>
        </div>

        <p className="lab-card__description">{project.description}</p>

        <div className="lab-card__tags">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`lab-card__tag ${tag === 'AI_GEN' || tag === 'AI_ML' ? 'lab-card__tag--accent' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Lab() {
  return (
    <section id="lab" className="lab">
      <div className="container">
        <h2 className="section-title">EXPERIMENTAL_LAB</h2>
        <p className="lab__subtitle">
          <span className="status-dot-inline"></span>
          SYSTEM_STATUS: ISOLATED_ENVIRONMENT_ACTIVE
        </p>

        <div className="lab__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.file} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
