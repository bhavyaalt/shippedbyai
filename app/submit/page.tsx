'use client';

import { useState } from 'react';
import { Rocket, ArrowLeft, Sparkles, Check, Copy } from 'lucide-react';
import Link from 'next/link';

const categories = ['agent', 'tool', 'platform', 'template', 'integration'];
const statuses = ['live', 'beta', 'concept'];

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    category: 'agent',
    tags: '',
    website_url: '',
    github_url: '',
    demo_url: '',
    creator_name: '',
    creator_twitter: '',
    onchain_address: '',
    tech_stack: '',
    status: 'live',
    built_by_ai: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to Supabase
    console.log('Submitting:', formData);
    setSubmitted(true);
  };

  const generateRegisterMd = () => {
    return `---
name: "${formData.name}"
tagline: "${formData.tagline}"
category: ${formData.category}
status: ${formData.status}
built_by_ai: ${formData.built_by_ai}

creator:
  name: "${formData.creator_name}"
  twitter: "${formData.creator_twitter}"
  onchain_address: "${formData.onchain_address}"

links:
  website: "${formData.website_url}"
  github: "${formData.github_url}"
  demo: "${formData.demo_url}"

tags:
${formData.tags.split(',').map(t => `  - ${t.trim()}`).join('\n')}

tech_stack:
${formData.tech_stack.split(',').map(t => `  - ${t.trim()}`).join('\n')}
---

# ${formData.name}

${formData.description}
`;
  };

  const copyRegisterMd = () => {
    navigator.clipboard.writeText(generateRegisterMd());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md text-center p-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Project Submitted!</h1>
          <p className="text-zinc-400 mb-8">
            Your project is under review. We'll add it to the marketplace soon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition"
          >
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold">shippedbyai</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Submit Your Project</h1>
          <p className="text-zinc-400">
            Share what you've built with the community. Projects built with AI collaboration get special badges!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tagline *</label>
              <input
                type="text"
                required
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                placeholder="A one-liner about your project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50 resize-none"
                placeholder="Tell us more about what you built..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                placeholder="AI, DeFi, Automation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tech Stack (comma-separated)</label>
              <input
                type="text"
                value={formData.tech_stack}
                onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                placeholder="Next.js, Solidity, OpenAI"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Website URL</label>
                <input
                  type="url"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                  placeholder="https://"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">GitHub URL</label>
                <input
                  type="url"
                  value={formData.github_url}
                  onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Demo URL</label>
              <input
                type="url"
                value={formData.demo_url}
                onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                placeholder="https://"
              />
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h3 className="font-medium mb-4">Creator Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.creator_name}
                    onChange={(e) => setFormData({ ...formData, creator_name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Twitter Handle</label>
                  <input
                    type="text"
                    value={formData.creator_twitter}
                    onChange={(e) => setFormData({ ...formData, creator_twitter: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                    placeholder="username (without @)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Onchain Address (for tips/sponsorship)</label>
                  <input
                    type="text"
                    value={formData.onchain_address}
                    onChange={(e) => setFormData({ ...formData, onchain_address: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-orange-500/50"
                    placeholder="0x..."
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <input
                type="checkbox"
                id="built_by_ai"
                checked={formData.built_by_ai}
                onChange={(e) => setFormData({ ...formData, built_by_ai: e.target.checked })}
                className="w-5 h-5 rounded bg-zinc-800 border-zinc-700"
              />
              <label htmlFor="built_by_ai" className="flex items-center gap-2 cursor-pointer">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>This project was built with AI collaboration</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition"
            >
              Submit Project
            </button>
          </form>

          {/* REGISTER.md Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium flex items-center gap-2">
                  <code className="text-orange-400">REGISTER.md</code> Preview
                </h3>
                <button
                  onClick={copyRegisterMd}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-zinc-500 mb-4">
                Add this file to your repo root. AI agents can auto-submit using this format.
              </p>
              <pre className="p-4 bg-black rounded-xl text-xs text-zinc-400 overflow-x-auto max-h-96 overflow-y-auto">
                {generateRegisterMd()}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
