import { Section, Pills } from "./ui";
import { skillGroups } from "@/data/skills";
import { Sparkles, Server, PanelsTopLeft, Workflow, Wrench } from "lucide-react";
const icons = { Sparkles, Server, PanelsTopLeft, Workflow, Wrench };
export default function Skills() { return <Section id="skills" eyebrow="02 / Capabilities" title="Skills & Technologies" subtitle="Technologies I use to turn ideas into production-ready AI systems."><div className="skills-grid">{skillGroups.map((g, i) => { const Icon = icons[g.icon as keyof typeof icons]; return <article className={`skill-card skill-${i}`} key={g.title}><div className="card-icon"><Icon /></div><h3>{g.title}</h3><Pills items={g.skills} /></article>; })}</div></Section>; }
