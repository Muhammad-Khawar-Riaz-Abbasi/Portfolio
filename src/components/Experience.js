import React from "react";
import { motion } from "framer-motion";

const roles = [
  { date: "Apr 2026 – Sep 2026", title: "Marketing & Automation Specialist", company: "NHSD (NGO) · Islamabad", context: "PSEB RITIL Apprenticeship (6 Months)", bullets: ["Ran email fundraising campaigns on GlobalGiving, Benevity, and Myriad USA — donor appeals, personalisation, scheduling, and AWS SES delivery tracking.", "Built a donor scraper → AI classifier (25+ themes + Gemini API) → audience router → Jinja2 personalizer → AWS SES → PostgreSQL analytics engine.", "Executed segmented event campaigns with personalised blasts, automated follow-ups, and engagement reporting — zero manual effort after setup."] },
  { date: "Jun 2025 – Aug 2026", title: "Instructor — Basics of IT, AI & Web Development", company: "La Compte IT Institute · Rawalpindi", bullets: ["Delivered courses in Basics of IT, Introduction to AI, and Web Development to a wide range of learners.", "Taught Prompt Engineering, Graphic Design, and Vibe Coding as part of the applied digital skills curriculum."] },
  { date: "Feb 2024 – Jun 2025", title: "IT & Software Developer", company: "High Five Tech Solutions · Islamabad", bullets: ["Built full-stack web experiences using Python Flask and JavaScript in an agile team environment, delivering to client specifications with code reviews."] },
];

function Experience() {
  return <section id="experience" className="surface-alt"><div className="section-wrap"><p className="eyebrow">03 — Experience</p><h2 className="section-title">Roles where systems got sharper.</h2><div className="timeline mt-12">{roles.map((role, index) => <motion.article key={role.title} className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div className="timeline-date">{role.date}</div><div className="timeline-card"><h3>{role.title}</h3><p className="timeline-company">{role.company}</p>{role.context && <p className="timeline-context">{role.context}</p>}<ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></motion.article>)}</div></div></section>;
}

export default Experience;
