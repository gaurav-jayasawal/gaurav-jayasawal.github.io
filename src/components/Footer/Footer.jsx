import React from 'react';
import './Footer.css';

const links = [
  { label: 'GITHUB', href: 'https://github.com/gaurav-jayasawal' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/gauravjj/' },
  { label: 'EMAIL', href: 'mailto:jgaurav6@gmail.com' },
  { label: 'STATUS', href: '#command' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__brand">GAURAV_JAYASAWAL</span>
          <span className="footer__separator">{'//'}</span>
          <span className="footer__status">ALL_SYSTEMS_OPERATIONAL</span>
        </div>
        <div className="footer__right">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
