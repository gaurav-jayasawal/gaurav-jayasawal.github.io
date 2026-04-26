import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';

const terminalLines = [
  { text: '> Initializing neuro-linguistic compiler... [OK]', delay: 600, color: 'muted' },
  { text: '> Allocating semantic resources... [OK]', delay: 400, color: 'muted' },
  { text: '> Connecting to production endpoints...', delay: 500, color: 'muted' },
  { text: '> Compiling solution...', delay: 700, color: 'purple' },
  { text: '> Success: Deployed to production.', delay: 400, color: 'green' },
];

const stats = [
  { icon: '🌍', value: '3B+', label: 'ANDROID DEVICES PROTECTED' },
  { icon: '⚡', value: '99.9%', label: 'UPTIME DELIVERED' },
  { icon: '🚀', value: '6+', label: 'YEARS SHIPPING CODE' },
];

const vibePrompts = [
  'Build a real-time malware scanner for 3B devices',
  'Optimize tab rendering for Chrome on Android',
  'Design offline-first architecture for enterprise apps',
  'Ship a SAML auth system for high-security clients',
  'Create an observability pipeline with Jaeger + GA4',
];

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);
  const [isTypingPrompt, setIsTypingPrompt] = useState(false);
  const terminalRef = useRef(null);
  const hasAnimated = useRef(false);

  // Terminal boot sequence
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let totalDelay = 800;
    terminalLines.forEach((line, i) => {
      totalDelay += line.delay;
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
      }, totalDelay);
    });
  }, []);

  // Rotating prompt typewriter
  const typePrompt = useCallback(() => {
    const fullText = vibePrompts[promptIndex];
    let charIndex = 0;
    setIsTypingPrompt(true);
    setCurrentPrompt('');

    const typeInterval = setInterval(() => {
      charIndex++;
      setCurrentPrompt(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setIsTypingPrompt(false);
        setTimeout(() => {
          setPromptIndex(prev => (prev + 1) % vibePrompts.length);
        }, 2500);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [promptIndex]);

  useEffect(() => {
    const timeout = setTimeout(typePrompt, 500);
    return () => clearTimeout(timeout);
  }, [typePrompt]);

  return (
    <section id="command" className="hero">
      <div className="hero__bg-glow" aria-hidden="true"></div>
      <div className="container hero__container">
        <div className="hero__headline">
          <h1 className="hero__title">
            <span className="hero__title-line">PROBLEM SOLVING</span>
            <span className="hero__title-accent">
              <span className="text-green">AT THE </span>
              <span className="text-purple">SPEED </span>
              <span className="text-green">OF </span>
              <span className="text-orange">THOUGHT</span>
            </span>
          </h1>
          <p className="hero__subtitle">
            Next-Gen Engineer leveraging AI to build at the speed of vibes.
          </p>
        </div>

        <div className="hero__terminal" ref={terminalRef}>
          <div className="terminal__header">
            <div className="terminal__dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <span className="terminal__title">vibe_console.exe</span>
          </div>
          <div className="terminal__body">
            <div className="terminal__prompt-line">
              <span className="terminal__user">root@devsys:~#</span>
              <span className="terminal__input">
                {currentPrompt}
                <span className={`terminal__cursor ${isTypingPrompt ? 'typing' : ''}`}>|</span>
              </span>
            </div>
            <div className="terminal__output">
              {displayedLines.map((line, i) => (
                <div key={i} className={`terminal__line terminal__line--${line.color}`}>
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-card__icon">{stat.icon}</span>
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__vibe-bar">
          <span className="vibe-bar__icon">⌨</span>
          <span className="vibe-bar__placeholder">Type a vibe to execute...</span>
          <button className="vibe-bar__send" onClick={() => window.open('mailto:jgaurav6@gmail.com', '_blank')}>
            SEND
          </button>
        </div>
      </div>
    </section>
  );
}
