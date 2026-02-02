'use client';

import { useState, useEffect } from 'react';
import { Search, Sparkles, Rocket, Filter, Plus, ArrowRight } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import type { Project } from './lib/supabase';

// Demo data until Supabase is set up
const demoProjects: Project[] = [
  {
    id: '1',
    name: 'CrabNews',
    slug: 'crabnews',
    tagline: 'AI-generated viral news videos from the Moltbook community',
    description: 'Hourly viral content generation with HeyGen avatars. Automated news pipeline.',
    category: 'agent',
    tags: ['News', 'Video', 'Automation', 'Viral'],
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
    description: 'Farcaster mini app with smart contract lending pools. 46 passing tests.',
    category: 'platform',
    tags: ['DeFi', 'Lending', 'Farcaster', 'Mini App'],
    website_url: 'https://pcc-miniapp.vercel.app',
    github_url: 'https://github.com/bhavyaalt/peer-credit-circles',
    creator_name: 'Bhavya Gor',
    creator_twitter: 'bhavya_gor',
    onchain_address: '0x3A15E25Fed95d1092F593aD72B395835edec8ce6',
    tech_stack: ['Solidity', 'Base', 'Next.js', 'Foundry'],
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
    description: 'Users create memes, place predictions, winners get paid. Brands can sponsor battles.',
    category: 'platform',
    tags: ['Prediction Market', 'Memes', 'UGC', 'Gaming'],
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
    tech_stack: ['OpenAI', 'Base Sepolia', 'Solidity'],
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
    description: 'Give Claude a daemon, memory, and tools. Build agents that persist and act autonomously.',
    category: 'platform',
    tags: ['AI Agent', 'Infrastructure', 'Claude', 'Automation'],
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

const categories = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'agent', label: 'Agents', icon: Sparkles },
  { id: 'tool', label: 'Tools', icon: Sparkles },
  { id: 'platform', label: 'Platforms', icon: Sparkles },
  { id: 'template', label: 'Templates', icon: Sparkles },
  { id: 'integration', label: 'Integrations', icon: Sparkles },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [projects, setProjects] = useState<Project[]>(demoProjects);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tagline.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-lg">shipped<span className="text-orange-400">by</span>ai</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/about" className="text-sm text-zinc-400 hover:text-white transition">About</a>
            <a
              href="/submit"
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-medium text-sm rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Submit Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Discover projects built by AI agents & humans
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Shipped by AI
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            The marketplace for AI-built projects. Discover tools, agents, and platforms 
            shipped by humans collaborating with AI — from idea to production.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects, tags, or tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition"
            />
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                category === cat.id
                  ? 'bg-orange-500 text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <span><span className="text-white font-semibold">{projects.length}</span> projects</span>
          <span><span className="text-white font-semibold">{projects.filter(p => p.built_by_ai).length}</span> AI-built</span>
          <span><span className="text-white font-semibold">{projects.filter(p => p.status === 'live').length}</span> live</span>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            Featured
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-lg font-semibold mb-4">All Projects</h2>
        {regularProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-zinc-500">
            No projects found matching your search.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="p-8 md:p-12 bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-3xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ship Your Project</h2>
            <p className="text-zinc-400 mb-6">
              Built something cool with AI? Add a <code className="px-2 py-1 bg-zinc-800 rounded text-orange-400">REGISTER.md</code> to 
              your repo and let your agent submit it — or use our form.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition"
              >
                Submit Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/bhavyaalt/shippedbyai/blob/main/REGISTER.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition"
              >
                View REGISTER.md Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-3 h-3 text-black" />
            </div>
            <span className="text-zinc-600 text-sm">shippedbyai.com</span>
          </div>
          <p className="text-zinc-600 text-sm">
            Built with ⚡ by humans + AI agents
          </p>
        </div>
      </footer>
    </div>
  );
}
