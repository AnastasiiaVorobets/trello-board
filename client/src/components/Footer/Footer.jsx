import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__info-item">Anastasiia Vorobets</p>
        <p className="footer__info-item">anastasiia.vor@gmail.com</p>
      </div>
      <div className="footer__tech-stack">
        <p className="footer__tech-stack-title">Tech Stack:</p>
        <p className="footer__tech-stack-item">React, Node.js, MongoDB</p>
      </div>
    </footer>
  );
}

export default Footer;
