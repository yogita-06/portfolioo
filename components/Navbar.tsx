"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(scrollY > 20); fn(); addEventListener("scroll", fn); return () => removeEventListener("scroll", fn); }, []);
  return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}><div className="nav-inner"><a href="#home" className="logo" aria-label="Yogita Jha home">YJ<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</nav><a className="button compact desktop-cta" href="#contact">Let&apos;s Talk <span>↗</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}<a className="button" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Talk</a></nav>}</header>;
}
