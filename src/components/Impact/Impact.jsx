import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';

import appianLogo from '../../assets/company_logos/appian_logo_2.png';
import googleLogo from '../../assets/company_logos/google_logo.png';

const experiences = [
  {
    file: 'log_entry_01.sys',
    company: 'Appian Corporation',
    role: 'Senior Software Engineer',
    period: 'Aug 2023 — Present',
    logo: appianLogo,
    status: 'ACTIVE',
    description:
      'Spearheaded mission-critical mobile features. Built performance optimization reducing slow UI reevaluations by 20-25% in offline mode. Pioneered Mobile Observability with Jaeger tracing, Looker Studio dashboards, and Firebase/GA4 analytics.',
    terminal: [
      '> load_module: mobile_platform',
      '> optimizing UI_reevaluation_cycles...',
      '> performance_delta: -25% latency',
      '> observability_pipeline: ONLINE',
      '> status: enterprise_clients_served',
    ],
    tags: ['ANDROID', 'KOTLIN', 'OBSERVABILITY', 'FIREBASE'],
  },
  {
    file: 'log_entry_02.sys',
    company: 'Google Chrome',
    role: 'Software Engineer',
    period: 'Jan 2022 — Jul 2023',
    logo: googleLogo,
    status: 'SOLVED',
    description:
      'Planned and shipped the Improved Tab Strip for Android tablets, co-authoring 3 US design patents. Reduced tab switch time by 12% and slide count by 27%. Received departmental impact award.',
    terminal: [
      '> init_sequence: tab_strip_v2',
      '> analyzing target_nodes... [TABLETS]',
      '> tab_switch_delta: -12%',
      '> slide_count_delta: -27%',
      '> patents_filed: 3',
      '> award: IMPACT_AWARD_RECEIVED',
    ],
    tags: ['JAVA', 'ANDROID', 'UI_ENGINEERING'],
  },
  {
    file: 'log_entry_03.sys',
    company: 'Google Play Store',
    role: 'Software Engineer',
    period: 'Jan 2022 — Jul 2023',
    logo: googleLogo,
    status: 'SOLVED',
    description:
      'Spearheaded the Just-in-Time Protection feature, enabling real-time malware scanning of previously unseen threats across 125 billion app scans daily for 3B+ Android devices.',
    terminal: [
      '> deploy_module: just_in_time_protection',
      '> scan_throughput: 125,000,000,000/day',
      '> device_coverage: 3,000,000,000+',
      '> threat_detection: REAL_TIME',
      '> status: GLOBAL_SHIELD_ACTIVE',
    ],
    tags: ['SECURITY', 'DISTRIBUTED_SYSTEMS', 'SCALE'],
  },
  {
    file: 'log_entry_04.sys',
    company: 'Appian Corporation',
    role: 'Software Engineer',
    period: 'Jul 2019 — Jan 2022',
    logo: appianLogo,
    status: 'SOLVED',
    description:
      'Led cross-functional development for the Appian Android app serving 30K monthly users. Architected SAML-based auth with client certificates, unblocking high-security clients like USMC and Fannie Mae. Delivered Static and Dynamic Offline capabilities.',
    terminal: [
      '> load_module: enterprise_mobile',
      '> configuring SAML_auth_pipeline...',
      '> client_certificates: ENABLED',
      '> offline_mode: STATIC + DYNAMIC',
      '> high_security_clients: UNBLOCKED',
      '> impact_award: Q4_2021',
    ],
    tags: ['ANDROID', 'SECURITY', 'ARCHITECTURE'],
  },
];

function ExperienceCard({ exp, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [terminalVisible, setTerminalVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setTerminalVisible(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`impact-card ${visible ? 'impact-card--visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="impact-card__checkbox" aria-hidden="true">☐</div>
      <div className="impact-card__inner">
        <div className="impact-card__file-header">
          <div className="impact-card__dots">
            <span className="dot dot--red"></span>
            <span className="dot dot--yellow"></span>
            <span className="dot dot--green"></span>
          </div>
          <span className="impact-card__filename">{exp.file}</span>
        </div>

        <div className="impact-card__content">
          <div className="impact-card__top-row">
            <div className="impact-card__company-info">
              <img src={exp.logo} alt={exp.company} className="impact-card__logo" />
              <h3 className="impact-card__company">{exp.company}</h3>
            </div>
            <div className={`impact-card__status impact-card__status--${exp.status.toLowerCase()}`}>
              <span className="status-dot"></span>
              STATUS: {exp.status}
            </div>
          </div>

          <div className="impact-card__meta">
            <span className="impact-card__role">{exp.role}</span>
            <span className="impact-card__period">{exp.period}</span>
          </div>

          <p className="impact-card__description">{exp.description}</p>

          <div className={`impact-card__terminal ${terminalVisible ? 'impact-card__terminal--visible' : ''}`}>
            {exp.terminal.map((line, i) => (
              <div
                key={i}
                className="impact-card__terminal-line"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="impact-card__tags">
            {exp.tags.map(tag => (
              <span key={tag} className="impact-card__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="container">
        <h2 className="section-title">SYSTEM_LOG: ARCHIVE_OF_SOLUTIONS</h2>
        <div className="impact__grid">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
