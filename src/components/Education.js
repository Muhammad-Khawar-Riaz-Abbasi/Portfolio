import React from "react";
import { motion } from "framer-motion";
import graduationImage from "../assets/graduation.jpeg";

const education = [["2021 – 2025", "BSCS", "SZABIST University, Islamabad"], ["Jan – Mar 2026", "AWS Training", "MetaPi"], ["Feb – Sep 2023", "Full-Stack Development", "EWX"]];

function Education() {
  return <section id="education" className="surface-alt"><div className="section-wrap">  <p className="eyebrow">05 — Education</p><h2 className="section-title">The foundations behind the practice.</h2><div className="education-highlight"><img src={graduationImage} alt="Muhammad Khawar at his university graduation" loading="lazy" /><div><span className="font-mono text-xs text-[#9ac3e4]">SZABIST University · Islamabad</span><h3>A milestone worth building from.</h3><p>BSCS graduate, with a continued focus on cloud infrastructure, applied AI, and practical software systems.</p></div></div><div className="education-grid mt-10">{education.map(([date, degree, school], index) => <motion.article key={degree} whileHover={{ y: -5 }} className="education-card"><span className="font-mono text-xs text-[var(--accent)]">{date}</span><h3>{degree}</h3><p>{school}</p><span className="education-number">0{index + 1}</span></motion.article>)}</div></div></section>;
}

export default Education;
