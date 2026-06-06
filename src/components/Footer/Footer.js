import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Priyansh Agarwal</span>. All rights
          reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Priyansh892"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/priyansh-agarwal-sde"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:agarwalpriyansh892@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
