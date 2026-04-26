import React, { useEffect, useRef, useState } from 'react';
import './Method.css';

const skillCategories = [
  {
    title: 'LANGUAGES',
    icon: '{ }',
    items: [
      { name: 'Kotlin', level: 95 },
      { name: 'Java', level: 92 },
      { name: 'Python', level: 80 },
      { name: 'Dart', level: 75 },
      { name: 'C++', level: 65 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'MOBILE',
    icon: '📱',
    items: [
      { name: 'Android (Native)', level: 97 },
      { name: 'React Native', level: 78 },
      { name: 'Flutter', level: 72 },
      { name: 'Jetpack Compose', level: 85 },
    ],
  },
  {
    title: 'WEB & CLOUD',
    icon: '☁',
    items: [
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'SQL / NoSQL', level: 82 },
      { name: 'Git / CI-CD', level: 90 },
    ],
  },
  {
    title: 'AI_AUGMENTED',
    icon: '🧠',
    items: [
      { name: 'AI-Pair Programming', level: 95 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Rapid Prototyping', level: 92 },
      { name: 'Vibe Coding', level: 99 },
    ],
  },
];

const methodSteps = [
  { step: '01', title: 'IDENTIFY', desc: 'Decompose the problem into atomic units. Map dependencies. Find the critical path.', color: 'green' },
  { step: '02', title: 'ARCHITECT', desc: 'Design scalable solutions. Choose the right abstractions. Plan for edge cases.', color: 'purple' },
  { step: '03', title: 'EXECUTE', desc: 'Ship fast with AI-augmented development. Iterate. Measure. Optimize.', color: 'orange' },
  { step: '04', title: 'DEPLOY', desc: 'Battle-tested code to production. Monitor. Observe. Continuously improve.', color: 'cyan' },
];

function SkillBar({ name, level, visible }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

function SkillCategory({ category, visible }) {
  return (
    <div className={`skill-category ${visible ? 'skill-category--visible' : ''}`}>
      <div className="skill-category__header">
        <span className="skill-category__icon">{category.icon}</span>
        <h3 className="skill-category__title">{category.title}</h3>
      </div>
      <div className="skill-category__bars">
        {category.items.map((item) => (
          <SkillBar key={item.name} name={item.name} level={item.level} visible={visible} />
        ))}
      </div>
    </div>
  );
}

export default function Method() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="method" className="method" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">EXECUTION_PROTOCOL</h2>
        <p className="method__subtitle">
          <span className="status-dot-inline"></span>
          METHODOLOGY: AI_AUGMENTED_DEVELOPMENT
        </p>

        <div className="method__steps">
          {methodSteps.map((step) => (
            <div key={step.step} className={`method-step ${visible ? 'method-step--visible' : ''}`}>
              <span className={`method-step__number method-step__number--${step.color}`}>
                {step.step}
              </span>
              <h3 className="method-step__title">{step.title}</h3>
              <p className="method-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title method__skills-title">SYSTEM_CAPABILITIES</h2>

        <div className="method__skills-grid">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} visible={visible} />
          ))}
        </div>

        <div className="method__education">
          <div className="method__edu-card">
            <div className="method__edu-header">
              <span className="method__edu-icon">🎓</span>
              <div>
                <h3 className="method__edu-school">State University of NY, Plattsburgh</h3>
                <p className="method__edu-degree">B.S. in Computer Science — GPA: 3.98/4.0</p>
              </div>
            </div>
            <div className="method__edu-tags">
              <span className="impact-card__tag">OUTSTANDING_GRADUATE</span>
              <span className="impact-card__tag">ACADEMIC_EXCELLENCE</span>
              <span className="impact-card__tag">MAY_2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
