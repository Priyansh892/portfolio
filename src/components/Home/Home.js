import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-inner">
        <div className="home-tag">
          <span className="home-tag-dot"></span>
          Available for Opportunities
        </div>

        <h1 className="home-name">
          Priyansh
          <br />
          <span className="outline">Agarwal</span>
        </h1>

        <p className="home-role">Full Stack Engineer</p>

        <p className="home-desc">
          Building high-performance web applications with Angular, React, and
          Node.js. 2+ years turning complex product requirements into scalable,
          production-grade code.
        </p>

        <div className="home-actions">
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1o9Nx9IrUr3bDpCnR9PChqILhSWGFkHD8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Download CV
          </a>
        </div>

        <div className="home-stats">
          <div>
            <div className="home-stat-val">2+</div>
            <div className="home-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="home-stat-val">40%</div>
            <div className="home-stat-label">Perf Gains Achieved</div>
          </div>
          <div>
            <div className="home-stat-val">3</div>
            <div className="home-stat-label">Companies Worked</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-hint-line"></div>
        scroll
      </div>
    </section>
  );
};

export default Home;
