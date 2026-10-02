export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  tech: string[];
  impact: string;
  challenges: string;
  learned: string;
  github: string;
  live: { label: string; url: string }[];
  visual: "agent" | "document" | "voice" | "logistics" | "school" | "salon";
};

export const projects: Project[] = [
  {
    title: "Traceable Multi-Agent Research Assistant",
    category: "Agentic AI / Auditable Research",
    description: "A source-grounded research system where seven cooperating agents gather evidence, verify claims, surface contradictions and produce fully traceable answers.",
    problem: "A single LLM response can hide unsupported claims, fabricate citations and flatten genuine disagreement between sources—risks that make it unsuitable for audit-sensitive research.",
    solution: "A LangGraph workflow decomposes research into specialist agents, validates source IDs at every boundary and routes weak evidence back through a conditional research loop before synthesis.",
    architecture: "Question → planning → multi-source retrieval → claim extraction → verification → contradiction analysis → synthesis → audit trail",
    features: ["Seven-agent LangGraph workflow", "Claim-to-source traceability", "Confidence scoring", "Contradiction detection", "Conditional feedback loop", "Live agent timeline", "Graceful degraded mode"],
    tech: ["Python", "FastAPI", "LangGraph", "React", "Vite", "SQLite", "Groq", "Multi-Agent AI"],
    impact: "Produces defensible research outputs whose evidence path can be reconstructed from question to conclusion.",
    challenges: "Preventing invented source references while coordinating multiple model-driven stages and external retrieval providers.",
    learned: "Reliable agent systems need deterministic validation, explicit state transitions and visible uncertainty—not only capable models.",
    github: "https://github.com/yogita-06/traceable-multi-agents-system",
    live: [{ label: "Live Demo", url: "https://traceable-multi-agents-system-1.onrender.com/" }],
    visual: "agent",
  },
  {
    title: "ResearchAI Multi-Agent System",
    category: "Multi-Agent AI / Research",
    description: "A collaborative research assistant where Researcher, Analyst and Writer agents build professional reports through a streamed, observable workflow.",
    problem: "Creating a structured research report involves distinct discovery, analysis and writing tasks that are difficult to manage in a single opaque AI request.",
    solution: "Three specialized agents work sequentially, with each stage enriching the previous output while real-time server events keep the workflow visible to the user.",
    architecture: "Research topic → Researcher agent → Analyst agent → Writer agent → structured report → PDF export",
    features: ["Three specialized AI agents", "Server-Sent Events", "Real-time progress", "Structured report sections", "PDF export", "Research history", "Dark and light themes"],
    tech: ["Node.js", "Express", "React", "Groq", "LLaMA 3.3", "SSE", "Tailwind CSS", "Puppeteer"],
    impact: "Turns a research topic into a structured, exportable report while showing the contribution and status of each agent.",
    challenges: "Streaming reliable stage-by-stage updates while passing useful context across specialized agent roles.",
    learned: "Clear agent responsibilities and observable progress make multi-agent workflows easier to trust and debug.",
    github: "https://github.com/yogita-06/multi-agents-system",
    live: [{ label: "Live Demo", url: "https://multi-agents-system-6gdj.vercel.app/" }],
    visual: "agent",
  },
  {
    title: "SupportAI Customer Support Agent",
    category: "Customer Support AI / Automation",
    description: "A production-style customer support agent with fast AI responses, automatic escalation detection, email alerts and an Intercom-inspired chat interface.",
    problem: "Support teams need to resolve routine conversations quickly without allowing urgent, sensitive or unresolved cases to disappear inside an automated chat.",
    solution: "The assistant maintains conversation context, detects escalation signals and triggers a human-support email alert while clearly notifying the customer in the interface.",
    architecture: "Customer message → context window → Groq LLM → escalation detector → AI response or human email alert",
    features: ["Context-aware AI chat", "Automatic escalation detection", "Nodemailer alerts", "Quick actions", "Conversation search", "PDF attachment UI", "Responsive chat experience"],
    tech: ["React", "Vite", "Node.js", "Express", "Groq", "LLaMA 3.3", "Nodemailer", "Tailwind CSS"],
    impact: "Demonstrates how an AI-first support flow can combine immediate answers with clear human escalation paths.",
    challenges: "Separating routine queries from cases that require a human without repeatedly firing escalation notifications.",
    learned: "Production support automation needs transparent fallback behavior and operational alerts alongside conversational quality.",
    github: "https://github.com/yogita-06/ai-support-agents",
    live: [{ label: "Live Demo", url: "https://ai-support-agents.vercel.app/" }],
    visual: "voice",
  },
  {
    title: "ShopEase RAG Support Chatbot",
    category: "RAG / E-commerce Support",
    description: "A grounded support chatbot for an Indian clothing store that retrieves relevant FAQ content before answering and shows the sources behind every response.",
    problem: "Generic chatbots can invent store policies and delivery information when they answer without access to verified business documentation.",
    solution: "A local embedding and ChromaDB retrieval pipeline supplies relevant FAQ context to the LLM, restricting answers to known ShopEase information.",
    architecture: "Question → local embedding → ChromaDB similarity search → grounded prompt → Groq LLM → answer with sources",
    features: ["FAQ ingestion pipeline", "Local MiniLM embeddings", "ChromaDB vector search", "Grounded responses", "Source attribution", "Suggested questions", "India-focused commerce prompts"],
    tech: ["RAG", "React", "Node.js", "Express", "ChromaDB", "Transformers.js", "Groq", "Tailwind CSS"],
    impact: "Provides accurate, source-visible customer assistance without relying on a paid embedding service or cloud vector database.",
    challenges: "Designing useful document chunks and retrieving enough context to answer accurately without introducing irrelevant material.",
    learned: "Grounded answers depend heavily on ingestion quality, chunking strategy and explicit source presentation.",
    github: "https://github.com/yogita-06/shopease-rag-chatbot",
    live: [{ label: "Live Demo", url: "https://shopeasee-rag-chatbot.vercel.app/" }],
    visual: "document",
  },
  {
    title: "Vaibhav Industries",
    category: "Business Website / Global Export",
    description: "A professional website for an India-based merchant exporter, presenting products, sourcing capabilities and a clear quotation journey for international buyers.",
    problem: "An export business needs to communicate trust, product scope and procurement workflow clearly to buyers across different international markets.",
    solution: "A fast, responsive business website organizes product categories, sourcing services, company credibility and enquiry calls-to-action into a polished buyer journey.",
    architecture: "Next.js website → product and service content → buyer enquiry flow → quote/contact handoff",
    features: ["Export-focused landing experience", "Product catalogue", "Sourcing workflow", "Responsive navigation", "Quote enquiries", "SEO metadata", "Business contact journey"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO"],
    impact: "Gives global buyers a credible, structured path to understand the company and start a sourcing conversation.",
    challenges: "Presenting multiple industrial product categories without overwhelming buyers or weakening the primary enquiry journey.",
    learned: "Strong B2B websites combine clear positioning, trust signals and focused conversion paths with technical performance.",
    github: "https://github.com/yogita-06/vaibhav-industries",
    live: [{ label: "Live Website", url: "https://www.vaibhavindus.com/" }],
    visual: "logistics",
  },
  {
    title: "Aurelia Beauty Lounge",
    category: "Service Business / AI Demo",
    description: "A premium salon sales experience combining editorial presentation, transparent services, appointment enquiries, WhatsApp journeys and a local AI-style beauty concierge.",
    problem: "Service businesses often lose potential bookings when pricing, service discovery and enquiry steps are fragmented or unavailable after hours.",
    solution: "A conversion-focused Next.js experience brings services, offers, consultation guidance and appointment intent into one responsive customer journey.",
    architecture: "Service discovery → beauty concierge → appointment preferences → WhatsApp or contact handoff",
    features: ["Service and pricing catalogue", "Appointment request flow", "WhatsApp enquiries", "Local concierge assistant", "Responsive editorial UI", "Form validation", "Clear demo disclosures"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "WhatsApp Automation"],
    impact: "Demonstrates how a service business can turn a premium web presence into structured leads and appointment conversations.",
    challenges: "Making the demo feel useful and premium while clearly distinguishing local interactions from confirmed real-world bookings.",
    learned: "Automation should improve the customer journey while keeping confirmations and operational decisions deterministic.",
    github: "https://github.com/yogita-06/beautysalon",
    live: [{ label: "Live Demo", url: "https://beautysalon-puce.vercel.app/" }],
    visual: "salon",
  },
];
