import React, { useEffect, useRef } from "react";
import "./About.css";
// import AboutMe from './About_Me.PNG'; // uncomment when image is ready

const CHIPS = [
  "Angular",
  "React.js",
  "Node.js",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "AWS",
  "Redis",
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 100);
            }
          });
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label fade-up">01 - About</div>
        <h2 className="section-title fade-up">
          The person
          <br />
          behind the code
        </h2>

        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap fade-up">
            <div className="about-img-frame">
              {(() => {
                try {
                  const img = require("./About_Me.PNG");
                  return <img src={img} alt="Priyansh Agarwal" />;
                } catch {
                  return (
                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "5rem",
                        fontWeight: 800,
                        color: "rgba(0,229,255,0.15)",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      PA
                    </div>
                  );
                }
              })()}
            </div>
            <div className="about-badge">
              <div className="about-badge-val">9.06</div>
              <div className="about-badge-label">VIT-AP CGPA / 10</div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text fade-up">
            <h3>Full Stack Engineer building things that scale</h3>
            <p>
              I'm Priyansh - a full stack engineer with a genuine obsession for
              clean architecture and fast UIs. Based in Indore/Bengaluru, I've
              shipped production code at Digital Future of Education Pvt Ltd, Pepperfry and Impelsys,
              impacting high-traffic platforms and real users.
            </p>
            <p>
              I graduated from VIT-AP with a 9.06 CGPA in Computer Science.
              Outside of work, I'm constantly exploring new tools - recently
              diving deep into Redis caching patterns and PWA architecture. I
              hold a strong grasp of frontend architecture, performance
              optimization, and API design - with a growing interest in
              cloud-native patterns.
            </p>

            <div className="about-chips">
              {CHIPS.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="about-ctas">
              <a
                href="#contact"
                className="btn-primary"
                style={{ fontSize: "0.8rem", padding: "0.625rem 1.5rem" }}
              >
                Hire Me
              </a>
              <a
                href="https://linkedin.com/in/priyansh-agarwal-sde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.625rem 1.5rem" }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
