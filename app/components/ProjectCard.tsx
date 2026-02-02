'use client';

import { ExternalLink, Github, Twitter, Wallet, Sparkles } from 'lucide-react';
import type { Project } from '../lib/supabase';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const statusColors = {
    live: 'bg-green-500/20 text-green-400',
    beta: 'bg-blue-500/20 text-blue-400',
    concept: 'bg-yellow-500/20 text-yellow-400',
    archived: 'bg-zinc-500/20 text-zinc-400',
  };

  const categoryColors = {
    agent: 'bg-purple-500/20 text-purple-400',
    tool: 'bg-cyan-500/20 text-cyan-400',
    platform: 'bg-orange-500/20 text-orange-400',
    template: 'bg-pink-500/20 text-pink-400',
    integration: 'bg-emerald-500/20 text-emerald-400',
  };

  return (
    <div
      className={`group relative p-6 bg-gradient-to-br from-zinc-900 to-zinc-900/50 border rounded-2xl transition-all hover:shadow-lg ${
        featured
          ? 'border-orange-500/50 hover:border-orange-400 hover:shadow-orange-500/20'
          : 'border-zinc-800 hover:border-zinc-700'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs font-semibold rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {project.logo_url ? (
            <img
              src={project.logo_url}
              alt={project.name}
              className="w-12 h-12 rounded-xl object-cover bg-zinc-800"
            />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-xl font-bold">
              {project.name.charAt(0)}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg group-hover:text-orange-400 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
        {project.built_by_ai && (
          <div className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI-built
          </div>
        )}
      </div>

      {/* Tagline */}
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.tagline}</p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-1 text-zinc-500 text-xs">+{project.tags.length - 4}</span>
        )}
      </div>

      {/* Tech stack */}
      <div className="flex gap-1 flex-wrap mb-4">
        {project.tech_stack.slice(0, 3).map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Creator */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <div className="text-sm text-zinc-500">
          by <span className="text-zinc-300">{project.creator_name}</span>
        </div>
        <div className="flex items-center gap-2">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-zinc-400 hover:text-white" />
            </a>
          )}
          {project.creator_twitter && (
            <a
              href={`https://twitter.com/${project.creator_twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter className="w-4 h-4 text-zinc-400 hover:text-white" />
            </a>
          )}
          {project.onchain_address && (
            <a
              href={`https://basescan.org/address/${project.onchain_address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Wallet className="w-4 h-4 text-zinc-400 hover:text-white" />
            </a>
          )}
          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-zinc-400 hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
