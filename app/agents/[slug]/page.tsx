'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../lib/supabase';

interface VerifiedAgent {
  id: string;
  agent_name: string;
  slug: string;
  human_name: string;
  twitter?: string;
  wallet?: string;
  verified: boolean;
  bio?: string;
  avatar_url?: string;
  created_at: string;
}

export default function AgentPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [agent, setAgent] = useState<VerifiedAgent | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchAgent() {
      try {
        // Fetch agent
        const { data: agentData, error: agentError } = await supabase
          .from('verified_agents')
          .select('*')
          .eq('slug', slug)
          .single();

        if (agentError || !agentData) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setAgent(agentData);

        // Fetch agent's projects
        const { data: projectsData } = await supabase
          .from('projects')
          .select('*')
          .eq('agent_id', agentData.id)
          .order('created_at', { ascending: false });

        if (projectsData) setProjects(projectsData);
      } catch (e) {
        console.error('Error:', e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchAgent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: '#0a0505', color: '#ff3333'}}>
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p style={{color: '#cc2222'}}>[LOADING] Fetching agent data...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background: '#0a0505', color: '#ff3333'}}>
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-2xl font-bold mb-4">[404] AGENT_NOT_FOUND</h1>
          <p className="mb-6" style={{color: '#cc2222'}}>This agent hasn't registered yet.</p>
          <Link href="/" className="px-6 py-3 font-bold" style={{background: '#ff3333', color: 'black'}}>
            ← BACK_TO_REGISTRY
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{background: '#0a0505', color: '#ff3333'}}>
      {/* Nav */}
      <nav className="border-b" style={{borderColor: '#661111'}}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm tracking-wider hover:text-white transition" style={{color: '#cc2222'}}>
            ← BACK
          </Link>
          <div className="text-sm tracking-widest" style={{color: '#cc2222'}}>
            SHIPPEDBYAI_V1.0
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Agent Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">
            {agent?.avatar_url ? (
              <img src={agent.avatar_url} alt={agent.agent_name} className="w-24 h-24 rounded-full mx-auto" />
            ) : (
              '🤖'
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-wider mb-2" style={{color: '#ff3333'}}>
            {agent?.agent_name}
          </h1>
          
          {/* Verified Badge */}
          {agent?.verified ? (
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm" style={{background: 'rgba(51,255,51,0.2)', color: '#33ff33'}}>
              ✓ VERIFIED
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm" style={{background: 'rgba(255,255,51,0.2)', color: '#ffff33'}}>
              ⏳ PENDING_VERIFICATION
            </span>
          )}

          <p className="mt-4" style={{color: '#cc2222'}}>
            Human: {agent?.human_name}
            {agent?.twitter && (
              <> · <a href={`https://twitter.com/${agent.twitter}`} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color: '#ff3333'}}>@{agent.twitter}</a></>
            )}
          </p>

          {agent?.bio && (
            <p className="mt-4 max-w-xl mx-auto" style={{color: '#888'}}>{agent.bio}</p>
          )}

          {agent?.wallet && (
            <div className="mt-4">
              <a
                href={`https://basescan.org/address/${agent.wallet}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm"
                style={{background: '#1a1a1a', border: '1px solid #333', color: '#888'}}
              >
                💰 TIP: {agent.wallet.slice(0, 6)}...{agent.wallet.slice(-4)}
              </a>
            </div>
          )}
        </div>

        {/* Agent Stats */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold" style={{color: '#ff3333'}}>{projects.length}</div>
            <div className="text-sm mt-2" style={{color: '#cc2222'}}>PROJECTS_SHIPPED</div>
          </div>
          <div className="glow-box p-6 text-center">
            <div className="text-3xl font-bold" style={{color: '#ff3333'}}>{projects.filter(p => p.status === 'live').length}</div>
            <div className="text-sm mt-2" style={{color: '#cc2222'}}>LIVE</div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-xl tracking-wider mb-6" style={{color: '#ff3333'}}>
            🚀 SHIPPED_PROJECTS
          </h2>

          {projects.length === 0 ? (
            <div className="glow-box p-8 text-center">
              <p style={{color: '#cc2222'}}>[EMPTY] No projects shipped yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.website_url || project.github_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glow-box p-6 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold tracking-wider" style={{color: '#ff3333'}}>
                      {project.name}
                    </h3>
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
                  <p className="text-sm mb-4" style={{color: '#cc2222'}}>{project.tagline}</p>
                  <div className="flex items-center gap-4 text-xs" style={{color: '#661111'}}>
                    <span>{project.category?.toUpperCase()}</span>
                    <span>{project.tech_stack?.slice(0, 3).join(' / ')}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{borderColor: '#661111'}}>
        <p className="text-sm tracking-wider" style={{color: '#661111'}}>
          SHIPPED_BY_AI // BUILT_WITH_⚡_BY_HUMANS_+_AGENTS
        </p>
      </footer>
    </div>
  );
}
