import React, { useEffect, useRef } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    num: "Project 01",
    title: "RozanaNews",
    desc: "Production-grade personalized PWA news platform. Redis caching delivers feeds in under 10ms. Helmet.js security + API rate limiting included.",
    stack: ["Angular 18", "Node.js", "MongoDB", "Redis", "GNews API"],
    link: "https://github.com/Priyansh892/RozanaNewsWebsite",
    demo: null,
  },
  {
    num: "Project 02",
    title: "Pulzz",
    desc: "Spotify-integrated music analytics platform. Improved insight discovery speed by 30% through optimized data visualization and Python-powered analysis.",
    stack: ["Python", "JavaScript", "Spotify API", "Data Viz"],
    link: "https://github.com/Priyansh892/Spotify-Data-Analysis",
    demo: null,
  },
  // {
  //   num: "Project 03",
  //   title: "ThirdSpace",
  //   desc: "Mood-relaxing ambient sounds website. Clean HTML/CSS/JS with a focus on calming UX and atmospheric audio layering.",
  //   stack: ["HTML", "CSS", "JavaScript"],
  //   link: "https://github.com/Priyansh892/ThirdSpace---The-relaxing-sounds-website",
  //   demo: null,
  // },
  // {
  //   num: "Project 04",
  //   title: "FoodyGeek",
  //   desc: "Full-featured food ordering web app built with React.js. Includes cart management, menu filtering, and a clean ordering flow.",
  //   stack: ["React.js", "JavaScript", "CSS"],
  //   link: "https://github.com/Priyansh892/Canteen-Management-System-with-React",
  //   demo: null,
  // },
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
