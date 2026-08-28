import React from "react";
import { motion } from "framer-motion";
import workingImage from "../assets/profile-working.jpeg";

function About() {
  return (
    <section id="about" className="surface-alt">
      <div className="section-wrap grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">01 — About</p><h2 className="section-title">Engineering with a human outcome.</h2></div>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-copy">
          <div className="about-layout"><div className="about-image-frame"><img src={workingImage} alt="Muhammad Khawar working on a laptop" loading="lazy" /><span className="about-image-note">Build. Automate. Improve.</span></div>
          <div className="about-text"><p>AWS Certified marketing and automation specialist with NGO sector experience managing donor engagement campaigns across GlobalGiving, Benevity, and Myriad USA. I built a complete end-to-end email marketing automation engine for NHSD (NGO) — from donor discovery to AWS-powered delivery.</p>
          <p>I also teach IT, AI, and web development at a technical institute, and I&apos;m comfortable across the stack: Python/Flask/FastAPI on the backend, React on the front end, AWS for infrastructure. I&apos;m looking to bring that same automation mindset and clean engineering to my next team.</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
