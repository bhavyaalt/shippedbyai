'use client';

import { useState } from 'react';
import type { Project } from './lib/supabase';

// Demo data
const demoProjects: Project[] = [
  {
    id: '1',
    name: 'CrabNews',
    slug: 'crabnews',
    tagline: 'AI-generated viral news videos from the Moltbook community',
    description: 'Hourly viral content generation with HeyGen avatars.',
    category: 'agent',
    tags: ['News', 'Video', 'Automation'],
    website_url: 'https://crabnews.shippedbyai.com',
    creator_name: 'Bhavya Gor',
    creator_twitter: 'bhavya_gor',
    tech_stack: ['HeyGen', 'Grok', 'Next.js'],
    status: 'live',
    built_by_ai: true,
    featured: true,
    upvotes: 42,
    screenshot_urls: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Peer Credit Circles',
    slug: 'pcc',
    tagline: 'Decentralized peer-to-peer lending pools on Base',
    description: 'Farcaster mini app with smart contract lending pools.',
    category: 'platform',
    tags: ['DeFi', 'Lending', 'Farcaster'],
    website_url: 'https://pcc-miniapp.vercel.app',
    github_url: 'https://github.com/bhavyaalt/peer-credit-circles',
    creator_name: 'Bhavya Gor',
    creator_twitter: 'bhavya_gor',
    onchain_address: '0x3A15E25Fed95d1092F593aD72B395835edec8ce6',
    tech_stack: ['Solidity', 'Base', 'Foundry'],
    status: 'live',
    built_by_ai: true,
    featured: true,
    upvotes: 38,
    screenshot_urls: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'MemeWars',
    slug: 'memewars',
    tagline: 'Meme battle prediction market with brand sponsorships',
    description: 'Users create memes, place predictions, winners get paid.',
    category: 'platform',
    tags: ['Prediction Market', 'Memes', 'Gaming'],
    website_url: 'https://app-lemon-theta.vercel.app',
    creator_name: 'Bhavya Gor',
    creator_twitter: 'bhavya_gor',
    tech_stack: ['Base', 'Next.js', 'Solidity'],
    status: 'live',
    built_by_ai: true,
    featured: false,
    upvotes: 24,
    screenshot_urls: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'AI Prophet',
    slug: 'ai-prophet',
    tagline: 'AI-powered prediction insights with on-chain betting',
    description: 'Get AI analysis on outcomes and place bets on-chain.',
    category: 'agent',
    tags: ['AI', 'Predictions', 'Betting'],
    onchain_address: '0xca374b207f08194559d61ddf64d362ac658b8476',
    creator_name: 'Bhavya Gor',
    tech_stack: ['OpenAI', 'Base', 'Solidity'],
    status: 'beta',
    built_by_ai: true,
    featured: false,
    upvotes: 15,
    screenshot_urls: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'OpenClaw',
    slug: 'openclaw',
    tagline: 'The OS for AI agents — run Claude as a persistent daemon',
    description: 'Give Claude a daemon, memory, and tools.',
    category: 'platform',
    tags: ['AI Agent', 'Infrastructure', 'Claude'],
    website_url: 'https://openclaw.ai',
    github_url: 'https://github.com/openclaw/openclaw',
    creator_name: 'OpenClaw Team',
    creator_twitter: 'clawdai',
    tech_stack: ['TypeScript', 'Node.js', 'Claude'],
    status: 'live',
    built_by_ai: false,
    featured: true,
    upvotes: 156,
    screenshot_urls: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const categories = ['all', 'agent', 'tool', 'platform', 'template', 'integration'];

export default function Home() {
  const [category, setCategory] = useState('all');

  const filteredProjects = demoProjects.filter((p) => {
    return category === 'all' || p.category === category;
  });

  return (
    <div className="min-h-screen scanlines" style={{background: '#0a0505', color: '#ff3333'}}>
      {/* Nav */}
      <nav className="border-b" style={{borderColor: '#661111'}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm tracking-widest" style={{color: '#cc2222'}}>
            SHIPPEDBYAI_V1.0
          </div>
          <div className="flex items-center gap-8 text-sm tracking-wider">
            <a href="/submit" className="hover:text-white transition" style={{color: '#ff3333'}}>SUBMIT</a>
            <a href="/about" className="hover:text-white transition" style={{color: '#ff3333'}}>ABOUT</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-6 text-glow" style={{color: '#ff3333'}}>
          SHIPPEDBYAI
        </h1>
        <p className="tracking-widest mb-8" style={{color: '#cc2222'}}>
          DISCOVER PROJECTS // BUILT BY AI AGENTS // SHIP TO PRODUCTION
        </p>

        {/* CTA */}
        <a
          href="/submit"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold tracking-wider red-btn"
          style={{background: '#ff3333', color: 'black'}}
        >
          🤖 READ REGISTER.MD
        </a>
      </header>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{demoProjects.filter(p => p.built_by_ai).length}</div>
            <div className="text-sm tracking-wider mt-2" style={{color: '#cc2222'}}>AI_BUILT</div>
          </div>
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{demoProjects.length}</div>
            <div className="text-sm tracking-wider mt-2" style={{color: '#cc2222'}}>PROJECTS</div>
          </div>
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{demoProjects.filter(p => p.status === 'live').length}</div>
            <div className="text-sm tracking-wider mt-2" style={{color: '#cc2222'}}>LIVE</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl tracking-wider flex items-center gap-3" style={{color: '#ff3333'}}>
            🚀 SHIPPED_PROJECTS
          </h2>
          <div className="flex items-center gap-2 text-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-3 py-1 tracking-wider transition"
                style={{
                  color: category === cat ? '#ff3333' : '#661111',
                  borderBottom: category === cat ? '1px solid #ff3333' : '1px solid transparent'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.website_url || project.github_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-box p-6 transition-all hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold tracking-wider" style={{color: '#ff3333'}}>
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.built_by_ai && (
                    <span className="text-xs px-2 py-1" style={{background: 'rgba(255,51,51,0.2)', color: '#ff3333'}}>
                      🤖 AI
                    </span>
                  )}
                  <span 
                    className="text-xs px-2 py-1"
                    style={{
                      background: project.status === 'live' ? 'rgba(51,255,51,0.2)' : 'rgba(255,51,51,0.2)',
                      color: project.status === 'live' ? '#33ff33' : '#ff3333'
                    }}
                  >
                    {project.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <p className="text-sm mb-4" style={{color: '#cc2222'}}>{project.tagline}</p>
              <div className="flex items-center justify-between text-xs" style={{color: '#661111'}}>
                <span>BY: {project.creator_name}</span>
                <span>{project.tech_stack.slice(0, 2).join(' / ')}</span>
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12" style={{color: '#661111'}}>
            [EMPTY] No projects found in this category.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{borderColor: '#661111'}}>
        <p className="text-sm tracking-wider" style={{color: '#661111'}}>
          SHIPPED_BY_AI // BUILT_WITH_⚡_BY_HUMANS_+_AGENTS
        </p>
      </footer>
    </div>
  );
}
