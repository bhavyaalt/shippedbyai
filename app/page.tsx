'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
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
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProjects = demoProjects.filter((p) => {
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tagline.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}} />
      
      {/* Nav */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">&gt;</span>
            <span className="font-bold tracking-wider">SHIPPED_BY_AI</span>
            <span className="text-zinc-600 text-sm">v1.0</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/about" className="text-zinc-500 hover:text-orange-500 transition">[ABOUT]</a>
            <a href="/submit" className="text-orange-500 hover:text-orange-400 transition">[SUBMIT]</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-zinc-600 text-sm mb-4">&gt;INITIALIZING_REGISTRY...</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-orange-500">SHIPPED</span>_BY_AI
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl mb-8">
            DISCOVER PROJECTS BUILT BY HUMANS + AI AGENTS // FROM IDEA TO PRODUCTION
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="SEARCH PROJECTS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-sm tracking-wider placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 transition"
            />
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-orange-500">{demoProjects.length}</div>
            <div className="text-zinc-600 text-sm">PROJECTS</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">{demoProjects.filter(p => p.built_by_ai).length}</div>
            <div className="text-zinc-600 text-sm">AI_BUILT</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500">{demoProjects.filter(p => p.status === 'live').length}</div>
            <div className="text-zinc-600 text-sm">LIVE</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto text-sm">
            <span className="text-zinc-600">[FILTER]</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 border transition ${
                  category === cat
                    ? 'border-orange-500 text-orange-500'
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-zinc-600 text-sm mb-6">## [REGISTRY] ALL_PROJECTS</div>
        
        {filteredProjects.length > 0 ? (
          <div className="space-y-4">
            {filteredProjects.map((project, i) => (
              <a
                key={project.id}
                href={project.website_url || project.github_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-zinc-800 hover:border-orange-500/50 transition group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-zinc-600 text-sm">{String(i + 1).padStart(2, '0')}.</span>
                      <h3 className="font-bold group-hover:text-orange-500 transition">
                        {project.name}
                      </h3>
                      {project.built_by_ai && (
                        <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs">
                          AI_BUILT
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-xs ${
                        project.status === 'live' 
                          ? 'bg-green-500/10 border border-green-500/30 text-green-500'
                          : 'bg-zinc-500/10 border border-zinc-500/30 text-zinc-500'
                      }`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-3">{project.tagline}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-600">
                      <span>BY: {project.creator_name}</span>
                      <span>CAT: {project.category.toUpperCase()}</span>
                      <span>STACK: {project.tech_stack.slice(0, 3).join(', ')}</span>
                    </div>
                  </div>
                  <div className="text-zinc-600 group-hover:text-orange-500 transition">
                    [→]
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-600">
            [EMPTY] No projects found matching query.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-zinc-600 text-sm mb-4">## [PROTOCOL] SUBMIT_PROJECT</div>
          <h2 className="text-2xl font-bold mb-4">ADD YOUR PROJECT TO THE REGISTRY</h2>
          <p className="text-zinc-500 mb-6 max-w-xl">
            Create a REGISTER.md file in your repo. Your AI agent can submit it automatically, 
            or open a PR to our registry.
          </p>
          <a
            href="/submit"
            className="inline-block px-6 py-3 bg-orange-500 text-black font-bold hover:bg-orange-400 transition"
          >
            [READ_INSTRUCTIONS]
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-zinc-600">
          <span>&gt;SHIPPED_BY_AI // 2025</span>
          <span>BUILT_WITH_⚡_BY_HUMANS_+_AI</span>
        </div>
      </footer>
    </div>
  );
}
