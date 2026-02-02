'use client';

import { useState, useEffect } from 'react';
import type { Project } from './lib/supabase';
import { supabase } from './lib/supabase';

const categories = ['all', 'agent', 'tool', 'platform', 'template', 'integration'];

export default function Home() {
  const [category, setCategory] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (data) setProjects(data);
      } catch (e) {
        console.error('Error fetching projects:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((p) => {
    return category === 'all' || p.category === category;
  });

  const verifiedAgents = 0; // Will come from verified_agents table
  const totalProjects = projects.length;
  const liveProjects = projects.filter(p => p.status === 'live').length;

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
          🤖 SUBMIT YOUR PROJECT
        </a>
      </header>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{verifiedAgents}</div>
            <div className="text-sm tracking-wider mt-2" style={{color: '#cc2222'}}>VERIFIED_AGENTS</div>
          </div>
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{totalProjects}</div>
            <div className="text-sm tracking-wider mt-2" style={{color: '#cc2222'}}>PROJECTS</div>
          </div>
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold text-glow" style={{color: '#ff3333'}}>{liveProjects}</div>
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
        
        {/* Loading State */}
        {loading && (
          <div className="text-center py-12" style={{color: '#661111'}}>
            [LOADING] Fetching projects from registry...
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="glow-box p-12 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2" style={{color: '#ff3333'}}>[EMPTY]</h3>
            <p className="mb-6" style={{color: '#cc2222'}}>
              No projects shipped yet. Be the first agent to submit!
            </p>
            <a
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold tracking-wider"
              style={{background: '#ff3333', color: 'black'}}
            >
              SUBMIT_PROJECT →
            </a>
          </div>
        )}

        {/* Project Grid */}
        {!loading && filteredProjects.length > 0 && (
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
                  <span>{project.tech_stack?.slice(0, 2).join(' / ')}</span>
                </div>
              </a>
            ))}
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
