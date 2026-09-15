const capabilities = [
  ["Privacy engineering", "Passwords are analyzed in memory. No credentials are stored or sent to social platforms."],
  ["Explainable scoring", "Every score is backed by visible findings: length, repetition, sequences, context, and breach exposure."],
  ["Secure API design", "FastAPI, Pydantic validation, controlled CORS, bounded inputs, and explicit failure handling."],
  ["Production discipline", "Docker, automated tests, CI, typed frontend code, and documentation designed for handoff."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="/">K<span>R</span>A</a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#contextforge">ContextForge</a>
          <a href="#about">Approach</a>
          <a className="nav-cta" href="mailto:khawarworkspace@gmail.com">Let&apos;s talk <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell">
        <p className="eyebrow">Software engineer · security-minded builder</p>
        <h1>I build products where <em>clarity</em> and engineering rigor meet.</h1>
        <p className="hero-copy">I&apos;m Muhammad Khawar Riaz Abbasi. I design and ship thoughtful web experiences, reliable APIs, and privacy-conscious systems that turn complex problems into products people can trust. My latest backend project is <strong>ContextForge</strong>, an evidence-backed incident intelligence platform built around RAG and vector search.</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">Explore my work <span>↓</span></a>
          <a className="button secondary" href="mailto:khawarworkspace@gmail.com">Get in touch <span>↗</span></a>
        </div>
      </section>

      <section id="work" className="work shell">
        <div className="section-label"><span>01</span><p>Featured project</p></div>
        <article className="project-card">
          <div className="project-top">
            <div>
              <p className="project-kicker">SecureScope / 2026</p>
              <h2>A privacy-first password security auditor.</h2>
              <p className="project-summary">A full-stack defensive security product that helps people understand password risk without attempting logins, storing credentials, or scraping social accounts.</p>
            </div>
            <div className="project-mark">SS</div>
          </div>
          <div className="project-details">
            <div><span className="detail-label">Stack</span><p>Python · FastAPI · React · TypeScript · Docker</p></div>
            <div><span className="detail-label">Highlights</span><p>k-anonymity breach checks · Explainable risk scoring · CI</p></div>
          </div>
          <div className="project-footer">
            <span className="status-dot">● Live engineering case study</span>
            <a href="https://github.com/Muhammad-Khawar-Riaz-Abbasi/securescope" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a>
          </div>
        </article>
        <article id="contextforge" className="project-card" style={{ marginTop: "18px" }}>
          <div className="project-top">
            <div>
              <p className="project-kicker">ContextForge / 2026</p>
              <h2>Evidence-backed incident intelligence for engineering teams.</h2>
              <p className="project-summary">A production-minded backend that combines async ingestion, hybrid retrieval, vector-ready storage, and cited RAG answers to help teams investigate outages without losing the evidence trail.</p>
            </div>
            <div className="project-mark">CF</div>
          </div>
          <div className="project-details">
            <div><span className="detail-label">Stack</span><p>Python · FastAPI · PostgreSQL · pgvector · Redis</p></div>
            <div><span className="detail-label">Highlights</span><p>Tenant boundaries · Idempotent ingestion · Grounded citations</p></div>
          </div>
          <div className="project-footer">
            <span className="status-dot">● Backend platform in active development</span>
            <a href="https://github.com/Muhammad-Khawar-Riaz-Abbasi/securescope/tree/main/contextforge" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a>
          </div>
        </article>
      </section>

      <section id="about" className="approach shell">
        <div className="section-label"><span>02</span><p>How I build</p></div>
        <div className="approach-grid">
          <h2>Good software makes the right thing easier.</h2>
          <div className="capabilities">{capabilities.map(([title, detail], index) => <div className="capability" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div>
        </div>
      </section>

      <section className="contact shell">
        <p className="eyebrow">Have a hard problem?</p>
        <h2>Let&apos;s make something <em>worth using.</em></h2>
        <a className="contact-link" href="mailto:khawarworkspace@gmail.com">khawarworkspace@gmail.com <span>↗</span></a>
      </section>

      <footer className="shell"><span>© 2026 Muhammad Khawar Riaz Abbasi</span><span>Built with Next.js · Designed for the web</span></footer>
    </main>
  );
}
