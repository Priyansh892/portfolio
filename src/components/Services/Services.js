import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      { name: "Angular", pct: 90 },
      { name: "React.js", pct: 80 },
      { name: "TypeScript", pct: 85 },
      { name: "RxJS / NgRx", pct: 85 },
      { name: "SCSS / CSS3", pct: 85 },
      { name: "HTML5", pct: 85 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", pct: 80 },
      { name: "Express.js", pct: 78 },
      { name: "Java", pct: 80 },
      { name: "MySQL", pct: 75 },
      { name: "MongoDB / Redis", pct: 72 },
      { name: "JWT", pct: 72 },
      { name: "Microservices", pct: 72 },
      { name: "Rest APIs", pct: 72 },
    ],
  },
  {
    label: "Cloud & Tooling",
    skills: [
      { name: "AWS (Lambda/S3/Lex)", pct: 70 },
      { name: "Git / GitHub", pct: 92 },
      { name: "CI/CD (Jenkins)", pct: 68 },
      { name: "PWA / Service Workers", pct: 75 },
      { name: "Agile / Scrum", pct: 85 },
      { name: "Webpack", pct: 85 },
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 100);
            }
          });
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label fade-up">04 - Skills</div>
        <h2 className="section-title fade-up">Tech I work with</h2>

        <div className="skills-grid fade-up">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.label}>
              <h4>{group.label}</h4>
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-wrap">
                    <div
                      className="skill-bar"
                      style={{ width: animated ? `${skill.pct}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
