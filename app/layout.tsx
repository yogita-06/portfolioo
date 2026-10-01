import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yogitajha.dev"),
  title: "Yogita Jha | AI Automation Developer & AI Engineer",
  description: "AI Automation Developer and Full-Stack Engineer building AI agents, voice assistants, RAG systems, ERP solutions and intelligent business automation using Python, FastAPI, LangChain, LangGraph, React and modern LLM technologies.",
  keywords: ["Yogita Jha", "AI Engineer", "AI Automation Developer", "Python Developer", "FastAPI Developer", "LangChain Developer", "LangGraph", "AI Agent Developer", "RAG Developer", "Voice AI Developer", "Full Stack Developer", "ERP Developer", "AI Automation India"],
  openGraph: { title: "Yogita Jha | AI Automation Developer", description: "I build intelligent systems that automate real businesses.", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Yogita Jha | AI Automation Developer", description: "AI agents, voice assistants, RAG systems and business automation." },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Yogita Jha", jobTitle: "AI Automation Developer & Full-Stack Engineer", knowsAbout: ["AI Automation", "Python", "FastAPI", "Large Language Models", "React", "RAG", "AI Agents"] };
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
