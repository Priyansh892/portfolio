import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";

const INFO = [
  { icon: "📍", label: "Location", value: "Indore / Bengaluru, India" },
  { icon: "📞", label: "Phone", value: "+91 9009803777" },
  { icon: "✉️", label: "Email", value: "agarwalpriyansh892@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "priyansh-agarwal-sde" },
  { icon: "🐙", label: "GitHub", value: "@Priyansh892" },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    try {
      const res = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      } else {
        alert(
          "Something went wrong. Email me directly at agarwalpriyansh892@gmail.com",
        );
      }
    } catch {
      alert(
        "Something went wrong. Email me directly at agarwalpriyansh892@gmail.com",
      );
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-label fade-up">05 - Contact</div>
        <h2 className="section-title fade-up">
          Let's build
          <br />
          something great
        </h2>
        <p className="section-sub fade-up">
          Open to full-time roles, freelance projects, and interesting
          conversations.
        </p>

        <div className="contact-grid">
          {/* Info */}
          <div className="fade-up">
            {INFO.map((item) => (
              <div className="contact-info-item" key={item.label}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-detail">{item.label}</div>
                  <div className="contact-val">{item.value}</div>
                </div>
              </div>
            ))}
            <div className="contact-socials">
              <a
                href="https://github.com/Priyansh892"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/priyansh-agarwal-sde"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap fade-up">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  placeholder="Your message here..."
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={`form-submit${sent ? " sent" : ""}`}
              >
                {sent ? "Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
