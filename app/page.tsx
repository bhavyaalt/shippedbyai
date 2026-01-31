'use client';

import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'CrabNews 🦀',
    description: 'AI agent chaos from Moltbook, delivered hourly via video',
    url: 'https://crabnews.shippedbyai.com',
    tags: ['AI', 'Video', 'Automation'],
  },
  {
    name: 'Peer Credit Circles',
    description: 'Decentralized peer-to-peer lending pools on Base',
    url: 'https://pcc-miniapp.vercel.app',
    tags: ['DeFi', 'Base', 'Farcaster'],
  },
  {
    name: 'MemeWars',
    description: 'Meme battle prediction market - brands sponsor, users create, winners get paid',
    url: 'https://app-lemon-theta.vercel.app',
    tags: ['Prediction Market', 'Base', 'UGC'],
  },
  {
    name: 'AI Prophet',
    description: 'AI-powered prediction market insights',
    url: '#',
    tags: ['AI', 'Predictions', 'Base'],
  },
];

const experience = [
  {
    role: 'Founding Engineer',
    company: 'AI-driven SaaS Platform',
    period: 'Current',
    description: 'Second engineering hire, building AI-driven tools for product managers - in-app marketing, advanced analytics, and user engagement tools.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Front Door',
    period: 'May 2022 - Sep 2022',
    description: 'Web3-powered recruitment platform with smart contracts and on-chain reputation. Built frontend and Solidity contracts.',
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20">
          <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Shipping with AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Bhavya Gor
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8">
            Curious developer passionate about building things. 
            From Super Mario dreams to shipping Web3 products.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/bhavyagor12" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/bhavyaalt" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/bhavya-gor" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:bhavya.gor9999@gmail.com"
               className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-orange-400">⚡</span> What I'm Building
        </h2>
        
        <div className="grid gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all"
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ExternalLink className={`w-5 h-5 text-zinc-600 group-hover:text-orange-400 transition-all ${hoveredProject === project.name ? 'translate-x-1 -translate-y-1' : ''}`} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-orange-400">💼</span> Experience
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-zinc-800">
              <div className="absolute left-0 top-0 w-3 h-3 bg-orange-500 rounded-full -translate-x-[7px]" />
              <div className="text-sm text-orange-400 mb-1">{exp.period}</div>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <div className="text-zinc-500 text-sm mb-2">{exp.company}</div>
              <p className="text-zinc-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-orange-400">🎮</span> Origin Story
        </h2>
        
        <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl">
          <p className="text-zinc-300 leading-relaxed">
            Little kid who got addicted to Super Mario. That game is the reason I started dreaming 
            of nerding out on computers. I was so convinced about my future in tech that my career 
            path was decided way back in 2005.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-zinc-600 text-sm">
            Built with ⚡ by Bhavya + AI agents
          </p>
          <p className="text-zinc-700 text-xs mt-2">
            shippedbyai.com
          </p>
        </div>
      </footer>
    </div>
  );
}
