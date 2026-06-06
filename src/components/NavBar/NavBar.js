import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar-wrap${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" href="#home">
        PA<span>.dev</span>
      </a>

      <ul className={`nav-links${isOpen ? " open" : ""}`}>
        {["about", "experience", "projects", "skills", "contact"].map((s) => (
          <li key={s}>
            <a href={`#${s}`} onClick={() => setIsOpen(false)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Let's Talk
      </a>

      <button
        className="nav-toggler"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
