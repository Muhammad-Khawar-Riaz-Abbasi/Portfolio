import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const skillGroups = [
  { title: "Web Development", mark: "</>", prominent: true, skills: ["React", "JavaScript", "HTML/CSS", "Flask", "FastAPI", "Python", "REST APIs"] },
  { title: "Cloud & Infrastructure", mark: "☁", skills: ["AWS (SES, EC2, S3)", "PostgreSQL", "Git/GitHub", "Linux"] },
  { title: "Automation & AI", mark: "✦", skills: ["Web scraping", "Automation pipelines", "Gemini API", "Jinja2", "Prompt engineering"] },
  { title: "Marketing & Content", mark: "◎", skills: ["Email campaigns", "Audience segmentation", "Donor outreach", "CapCut", "Graphic design"] },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <p className="eyebrow">02 — Capabilities</p><h2 className="section-title">A practical stack for ambitious work.</h2>
        <p className="section-copy">From a polished interface to the infrastructure and automation behind it, I enjoy making the whole system work.</p>
        <Swiper className="skills-swiper mt-10" modules={[Pagination, A11y]} pagination={{ clickable: true }} spaceBetween={18} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 980: { slidesPerView: 3 } }}>
          {skillGroups.map((group) => <SwiperSlide key={group.title}><motion.article whileHover={{ y: -7 }} className={`skill-card ${group.prominent ? "skill-card-featured" : ""}`}><div className="flex items-center justify-between"><span className="skill-mark">{group.mark}</span><span className="font-mono text-xs text-[var(--muted)]">0{skillGroups.indexOf(group) + 1}</span></div><h3>{group.title}</h3><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></motion.article></SwiperSlide>)}
        </Swiper>
        <div className="cert-badge mt-8"><span className="cert-icon">AWS</span><div><strong>AWS Certified Cloud Practitioner</strong><p>Issued May 2026 · Expires May 2029</p></div></div>
      </div>
    </section>
  );
}

export default Skills;
