"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: { id: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`}><motion.div className="container" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>
    <div className="section-head">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{children}
  </motion.div></section>;
}
export function Pills({ items }: { items: string[] }) { return <div className="pills">{items.map(x => <span key={x}>{x}</span>)}</div>; }
