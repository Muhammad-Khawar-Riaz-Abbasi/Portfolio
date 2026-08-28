import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("idle");
  const endpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
  const submit = async (event) => {
    event.preventDefault();
    if (!endpoint) { setStatus("error"); return; }
    setStatus("loading");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
      if (!response.ok) throw new Error("Unable to send");
      event.currentTarget.reset();
      setStatus("success");
    } catch (error) { setStatus("error"); }
  };
  return <section id="contact"><div className="section-wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">06 — Contact</p><h2 className="section-title">Let&apos;s make something useful.</h2><p className="section-copy">For engineering, automation, or digital systems work, send a note. I&apos;ll get back to you at the email below.</p><div className="contact-details"><a href="mailto:khawarworkspace@gmail.com">khawarworkspace@gmail.com</a><a href="tel:03405755406">0340-5755406</a><a href="https://www.linkedin.com/in/muhammad-khawar-riaz-abbasi-9b98632a6" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><form className="contact-form" onSubmit={submit}><label>Name<input name="name" required minLength="2" placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" required minLength="10" rows="5" placeholder="Tell me what you are building..." /></label><motion.button whileTap={{ scale: .97 }} className="btn btn-primary w-full" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : status === "success" ? "Message sent ✓" : "Send message →"}</motion.button>{status === "error" && <p className="form-status error">Add your Formspree endpoint to `.env` to enable submissions.</p>}{status === "success" && <p className="form-status success">Thanks — your message is on its way.</p>}</form></div></section>;
}

export default Contact;
