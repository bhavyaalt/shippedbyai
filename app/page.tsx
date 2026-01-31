'use client';

import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink, Sparkles, Trophy, Briefcase, Code, Zap, Globe } from 'lucide-react';

const shippedWithAI = [
  {
    name: 'CrabNews 🦀',
    description: 'AI-generated news videos from Moltbook (Reddit for AI agents). Hourly viral content with HeyGen avatars.',
    url: 'https://crabnews.shippedbyai.com',
    twitter: 'https://x.com/crabnews_',
    tags: ['HeyGen', 'Grok', 'Automation'],
    status: 'live',
  },
  {
    name: 'Peer Credit Circles',
    description: 'Decentralized peer-to-peer lending pools on Base. Farcaster mini app with 46 passing tests.',
    url: 'https://pcc-miniapp.vercel.app',
    github: 'https://github.com/bhavyaalt/peer-credit-circles',
    tags: ['Solidity', 'Base', 'Farcaster'],
    status: 'live',
  },
  {
    name: 'MemeWars',
    description: 'Meme battle prediction market. Brands sponsor battles, users create content, winners get paid.',
    url: 'https://app-lemon-theta.vercel.app',
    tags: ['Prediction Market', 'Base', 'UGC'],
    status: 'live',
  },
  {
    name: 'AI Prophet',
    description: 'AI-powered prediction insights with on-chain betting.',
    tags: ['AI', 'Predictions', 'Base Sepolia'],
    status: 'deployed',
  },
];

const hackathonWins = [
  {
    name: 'onchain-hojayega',
    description: 'Simplifying Web2 to Web3 transition by automating architecture planning with AI.',
    url: 'https://onchain-hojayega.vercel.app/',
    tags: ['🏆 Finalist ETH India 2024'],
    links: { github: 'https://github.com/bhavyagor12/onchain-hojayega' },
  },
  {
    name: 'Lumen',
    description: 'Web3 MVP enabling product traceability and tokenized sustainability on Base.',
    url: 'https://ilumen.earth/',
    tags: ['🏆 Finalist Based India 2024', '💰 Raising VC'],
  },
  {
    name: 'ezframes',
    description: 'No-code Farcaster Frames builder. Create and manage frames through a dashboard.',
    url: 'https://www.ezframes.xyz/',
    tags: ['🏆 Onchain Summer 2024', '🏆 ETH Mumbai 2024', '💰 Gitcoin Grants'],
  },
  {
    name: 'Scaffold Essential',
    description: 'Tool that simplifies starting projects with Next.js and Pint (DSL for Rust).',
    url: 'https://scaffold-essential.vercel.app/',
    tags: ['🏆 ETH Bangkok 2024', 'Developer Tooling'],
    links: { github: 'https://github.com/ScaffoldEssential/scaffold-essential' },
  },
];

const experience = [
  {
    role: 'Former Founding Engineer',
    company: 'niti.ai',
    period: 'Oct 2022 - Jan 2025',
    description: 'Second engineering hire. Built AI-driven SaaS for product managers - in-app marketing, analytics, and user engagement tools.',
    url: 'https://www.niti.ai',
    current: false,
  },
  {
    role: 'Full Stack Developer',
    company: 'Front Door',
    period: 'May 2022 - Sep 2022',
    description: 'Web3-powered recruitment platform with smart contracts and on-chain reputation. Built frontend and Solidity contracts.',
  },
];

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Web3', items: ['Solidity', 'Hardhat', 'Foundry', 'ethers.js', 'wagmi'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase'] },
  { category: 'AI/ML', items: ['OpenAI', 'Grok', 'LangChain', 'HeyGen'] },
  { category: 'Chains', items: ['Base', 'Ethereum', 'Polygon', 'Farcaster'] },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['shipped', 'hackathons', 'experience', 'skills'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-full px-6 py-2 hidden md:flex gap-6 text-sm">
        <a href="#shipped" className={`hover:text-orange-400 transition ${activeSection === 'shipped' ? 'text-orange-400' : 'text-zinc-400'}`}>Shipped with AI</a>
        <a href="#hackathons" className={`hover:text-orange-400 transition ${activeSection === 'hackathons' ? 'text-orange-400' : 'text-zinc-400'}`}>Hackathons</a>
        <a href="#experience" className={`hover:text-orange-400 transition ${activeSection === 'experience' ? 'text-orange-400' : 'text-zinc-400'}`}>Experience</a>
        <a href="#skills" className={`hover:text-orange-400 transition ${activeSection === 'skills' ? 'text-orange-400' : 'text-zinc-400'}`}>Skills</a>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Shipping products with AI agents</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Bhavya Gor
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8">
            Curious developer who loves building things. 
            Shipping Web3 products and winning hackathons.
          </p>
          
          <div className="flex items-center gap-4 mb-12">
            <a href="https://x.com/bhavya_gor" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
              <Twitter className="w-5 h-5 group-hover:text-orange-400" />
            </a>
            <a href="https://github.com/bhavyagor12" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
              <Github className="w-5 h-5 group-hover:text-orange-400" />
            </a>
            <a href="https://linkedin.com/in/bhavya-gor" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:text-orange-400" />
            </a>
            <a href="mailto:bhavya.gor9999@gmail.com"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
              <Mail className="w-5 h-5 group-hover:text-orange-400" />
            </a>
            <a href="https://app.buidlguidl.com/builders/0x95E08FA8ac4301acC5b943f860Cd8AC84433e3CF" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
              <Globe className="w-5 h-5 group-hover:text-orange-400" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-orange-400">5+</div>
              <div className="text-sm text-zinc-500">Hackathon Wins</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">4</div>
              <div className="text-sm text-zinc-500">Shipped with AI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">2+</div>
              <div className="text-sm text-zinc-500">Years Building</div>
            </div>
          </div>
        </div>
      </header>

      {/* Shipped with AI Section */}
      <section id="shipped" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-6 h-6 text-orange-400" />
          <h2 className="text-3xl font-bold">Shipped with AI</h2>
        </div>
        <p className="text-zinc-500 mb-8">Products built collaboratively with AI agents. From idea to production in hours, not weeks.</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {shippedWithAI.map((project) => (
            <a
              key={project.name}
              href={project.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 rounded-2xl transition-all hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-orange-400 transition-colors">
                  {project.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'live' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hackathon Wins */}
      <section id="hackathons" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-6 h-6 text-orange-400" />
          <h2 className="text-3xl font-bold">Hackathon Wins</h2>
        </div>
        <p className="text-zinc-500 mb-8">Building under pressure, shipping fast, and winning prizes.</p>
        
        <div className="grid gap-4">
          {hackathonWins.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold group-hover:text-orange-400 transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-zinc-400 text-sm">{project.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap md:ml-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-orange-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-zinc-800">
              <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full -translate-x-[9px]" />
              {exp.current && (
                <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full mb-2">Current</span>
              )}
              <div className="text-sm text-orange-400 mb-1">{exp.period}</div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 text-sm mb-3 hover:text-orange-400 transition">
                {exp.company} ↗
              </a>
              <p className="text-zinc-400 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-6 h-6 text-orange-400" />
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-sm font-medium text-orange-400 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="p-8 md:p-12 bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Looking to collaborate on Web3 projects, AI experiments, or just want to chat about the future of tech.
          </p>
          <a 
            href="mailto:bhavya.gor9999@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            Built with ⚡ by Bhavya + AI agents
          </p>
          <div className="flex items-center gap-4 text-zinc-600 text-sm">
            <a href="https://shippedbyai.com" className="hover:text-orange-400 transition">shippedbyai.com</a>
            <span>•</span>
            <a href="https://crabnews.shippedbyai.com" className="hover:text-orange-400 transition">CrabNews</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
