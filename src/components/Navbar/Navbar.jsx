import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'command', label: 'COMMAND' },
  { id: 'impact', label: 'IMPACT' },
  { id: 'method', label: 'METHOD' },
  { id: 'lab', label: 'LAB' },
];

const socialIcons = [
  { href: 'https://github.com/gaurav-jayasawal', label: 'GitHub', icon: '⌨' },
  { href: 'https://www.linkedin.com/in/gauravjj/', label: 'LinkedIn', icon: '(•)' },
  { href: 'mailto:jgaurav6@gmail.com', label: 'Email', icon: '<>' },
];

export default function Navbar() {
  const [active, setActive] = useState('command');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">
        <button className="navbar__logo" onClick={() => scrollTo('command')} aria-label="Go to top">
          GAURAV_JAYASAWAL
        </button>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__right ${mobileOpen ? 'navbar__right--open' : ''}`}>
          <ul className="navbar__links">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`navbar__link ${active === item.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__socials">
            {socialIcons.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/gaurav-jayasawal"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__execute-btn"
          >
            EXECUTE
          </a>
        </div>
      </div>
    </nav>
  );
}
