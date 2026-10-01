const tech = ["Python", "FastAPI", "LangChain", "LangGraph", "OpenAI", "LLMs", "RAG", "Vector Databases", "Node.js", "React", "Next.js", "MongoDB", "PostgreSQL", "Odoo", "REST APIs", "Git", "Docker"];
export default function TechStack() { return <div className="marquee" aria-label="Technology stack"><div>{[...tech, ...tech].map((x, i) => <span key={`${x}-${i}`}><i />{x}</span>)}</div></div>; }
