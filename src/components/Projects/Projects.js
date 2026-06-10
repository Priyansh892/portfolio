import React, { useEffect, useRef } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    num: "Project 01",
    title: "RozanaNews",
    desc: "Production-grade personalized PWA news platform. Redis caching delivers feeds in under 10ms. Helmet.js security + API rate limiting included.",
    stack: ["Angular 18", "Node.js", "MongoDB", "Redis", "GNews API"],
    link: "https://github.com/Priyansh892/RozanaNewsWebsite",
    demo: "https://rozana-news-website.vercel.app",
  },
  {
    num: "Project 02",
    title: "Gitlysis - AI GitHub Profile Analyzer",
    desc: "AI-powered GitHub profile analyzer that generates developer personality reports, roasts, and interactive chat using Groq AI (Llama 3.3 70B) and live GitHub data.",
    stack: ["React 18", "TypeScript", "Groq AI", "GitHub API", "Tailwind CSS"],
    link: "https://github.com/Priyansh892/Github-analyser-app",
    demo: "https://gitlysisbypriyansh.netlify.app",
  },
];

const Projects = () => {
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
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label fade-up"> 03 — Projects</div>
        <h2 className="section-title fade-up">Selected work</h2>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div className="proj-card fade-up" key={i}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span className="stack-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                >
                  GitHub →
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link-demo"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
