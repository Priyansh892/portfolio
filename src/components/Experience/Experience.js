import React, { useEffect, useRef } from "react";
import "./Experience.css";

const EXPERIENCE = [
  {
    period: "Jul 2025 - Present",
    company: "Digital Future of Education",
    location: "Bengaluru · Remote",
    role: "Full Stack Engineer",
    badge: "Current",
    bullets: [
      "Optimized Node.js and MySQL APIs - reduced dashboard load time by 35%",
      "Reduced post-deployment defects by 20% via structured code reviews and Git workflows",
      "Owned Backoffice redesign with Angular standalone components; boosted adoption 30%, cut config effort 50%",
    ],
  },
  {
    period: "Jul 2024 - Jul 2025",
    company: "Pepperfry Limited",
    location: "Bengaluru",
    role: "Software Engineer I",
    bullets: [
      "Increased furniture protection plan attach rates by 5% by building a scalable, cross-browser compatible Angular interface",
      "Migrated legacy PHP workflows to Angular - reducing processing latency by 40% and support tickets by 30%",
      "Built RxJS-powered promotional systems boosting CTR 25% across 50+ high-traffic campaigns",
    ],
  },
  {
    period: "Feb 2024 - May 2024",
    company: "Impelsys",
    location: "Bengaluru",
    role: "Software Engineer",
    bullets: [
      "Built React.js conversational AI interface - CSAT scores up 40% across 100+ pilot users",
      "Achieved 85% response accuracy via AWS Lex + Lambda optimization across 100+ real-time conversations",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label fade-up">02 - Experience</div>
        <h2 className="section-title fade-up">Where I've shipped</h2>

        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div className="exp-item fade-up" key={i}>
              <div className="exp-meta">
                <div className="exp-period">{exp.period}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-location">{exp.location}</div>
                {exp.badge && <div className="exp-badge">{exp.badge}</div>}
              </div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <div className="exp-bullet" key={j}>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
