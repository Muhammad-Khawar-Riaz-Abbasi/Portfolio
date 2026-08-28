import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile-professional.jpeg";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-khawar-riaz-abbasi-9b98632a6", icon: "in" },
  { label: "Email", href: "mailto:khawarworkspace@gmail.com", icon: "@" },
  { label: "Portfolio", href: "https://khawar-riaz-abbasi.vercel.app/", icon: "↗" },
];

function Home() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="section-wrap relative grid items-center gap-16 py-24 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>IT engineering · automation · cloud</motion.p>
          <motion.h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-.06em] text-[var(--ink)] sm:text-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Muhammad Khawar<br /><span className="text-[var(--accent)]">Riaz Abbasi.</span>
          </motion.h1>
          <motion.p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-[var(--ink)] sm:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            IT Engineer & Troubleshooting · Website & Office Management · AWS Certified Cloud Practitioner
          </motion.p>
          <motion.p className="section-copy mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            An automation-focused engineer who builds end-to-end web, marketing, and data pipelines — from donor-outreach automation to full-stack apps.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <a className="btn btn-primary" href="#projects">View My Work <span aria-hidden="true">→</span></a>
            <a className="btn btn-secondary" href="/resume-khawar-abbasi.pdf" download>Download Resume <span aria-hidden="true">↓</span></a>
          </motion.div>
          <div className="mt-9 flex items-center gap-3">
            {socials.map((social) => <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.94 }} className="social-link" key={social.label} href={social.href} target={social.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" aria-label={social.label}><span>{social.icon}</span></motion.a>)}
            <span className="ml-2 text-sm text-[var(--muted)]">Open to meaningful engineering work</span>
          </div>
        </div>
        <div className="hero-visual">
          <motion.div className="hero-portrait-card" initial={{ opacity: 0, scale: .9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .25, duration: .7 }}>
            <img src={profile} alt="Muhammad Khawar Riaz Abbasi" className="hero-portrait" fetchPriority="high" />
            <div className="hero-portrait-caption"><span>IT Engineer</span><span>Islamabad, PK</span></div>
          </motion.div>
          <motion.div className="hero-panel" initial={{ opacity: 0, scale: .9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .25, duration: .7 }}>
          <div className="hero-panel-grid" />
          <div className="relative z-10">
            <div className="mb-10 flex items-center justify-between text-xs font-bold uppercase tracking-[.18em] text-[#9ac3e4]"><span>Engineer profile</span><span className="status-dot">Available</span></div>
            <div className="space-y-5">
              {["Build systems that remove busywork", "Connect cloud, data & people", "Ship with clarity and care"].map((item, index) => <motion.div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .55 + index * .12 }}><span className="font-mono text-sm text-[#79b8e6]">0{index + 1}</span><span className="font-semibold">{item}</span></motion.div>)}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-center"><div className="rounded-xl bg-white/10 p-4"><strong className="block text-2xl text-white">AWS</strong><span className="text-xs text-[#b7d4e9]">Certified</span></div><div className="rounded-xl bg-white/10 p-4"><strong className="block text-2xl text-white">24/7</strong><span className="text-xs text-[#b7d4e9]">Automation mindset</span></div></div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
