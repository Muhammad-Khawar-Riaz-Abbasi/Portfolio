import React, { useState } from "react";
import profile from "../assets/profile-professional.jpeg";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function Navbar({ activeSection, darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--surface)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[72px] w-[min(1160px,calc(100%-28px))] items-center justify-between" aria-label="Primary navigation">
        <button className="brand-lockup" onClick={() => navigate("home")} aria-label="Return to home">
          <img src={profile} alt="" />
          <span>Muhammad Khawar <strong>Riaz Abbasi</strong></span>
        </button>
        <button className="hidden rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-lg text-[var(--ink)] sm:block" onClick={onToggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>
          {darkMode ? "☼" : "☾"}
        </button>
        <button className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-xl text-[var(--ink)] sm:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation menu">
          {open ? "×" : "☰"}
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute left-3 right-3 top-[66px] flex-col gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-xl sm:static sm:flex sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)} className={`rounded-lg border-0 bg-transparent px-3 py-2 text-sm font-semibold transition-colors hover:text-[var(--accent)] ${activeSection === id ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}>
              {label}
            </button>
          ))}
          <button className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-lg text-[var(--ink)] sm:hidden" onClick={onToggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            {darkMode ? "☼ Light mode" : "☾ Dark mode"}
          </button>
          <button className="nav-contact mobile-contact" onClick={() => navigate("contact")}>Let&apos;s talk <span aria-hidden="true">↗</span></button>
        </div>
        <button className="nav-contact desktop-contact" onClick={() => navigate("contact")}>Let&apos;s talk <span aria-hidden="true">↗</span></button>
      </nav>
    </header>
  );
}

export default Navbar;
