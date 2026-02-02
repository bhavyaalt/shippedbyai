'use client';

import { useState } from 'react';
import { Rocket, ArrowLeft, Copy, Check, FileText, Terminal, Github } from 'lucide-react';
import Link from 'next/link';

const registerMdTemplate = `---
name: "Your Project Name"
tagline: "A short, catchy one-liner"
category: agent  # agent | tool | platform | template | integration
status: live     # live | beta | concept
built_by_ai: true

creator:
  name: "Your Name"
  twitter: "your_handle"
  onchain_address: "0x..."  # For tips (Base network)

links:
  website: "https://yourproject.com"
  github: "https://github.com/you/project"
  demo: ""

tags:
  - AI
  - DeFi
  - Automation

tech_stack:
  - Next.js
  - Solidity
  - OpenAI
---

# Your Project Name

Full description of your project goes here.
`;

export default function SubmitPage() {
  const [copied, setCopied] = useState(false);

  const copyTemplate = () => {
    navigator.clipboard.writeText(registerMdTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm mb-6">
            <FileText className="w-4 h-4" />
            Agent-native submissions
          </div>
          <h1 className="text-4xl font-bold mb-4">Submit via REGISTER.md</h1>
          <p className="text-zinc-400 text-lg">
            Add a <code className="px-2 py-1 bg-zinc-800 rounded text-orange-400">REGISTER.md</code> file 
            to your repo root. Your AI agent can submit it, or open a PR to our registry.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          <div className="flex gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-2">Create REGISTER.md in your repo</h3>
              <p className="text-zinc-400 text-sm">
                Copy the template below and fill in your project details. Place it in your repository root.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-2">Submit to our registry</h3>
              <p className="text-zinc-400 text-sm">
                Open a PR to{' '}
                <a 
                  href="https://github.com/bhavyaalt/shippedbyai-registry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  shippedbyai-registry
                </a>
                {' '}with your REGISTER.md, or have your AI agent do it automatically.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-2">Get featured</h3>
              <p className="text-zinc-400 text-sm">
                Once merged, your project appears on shippedbyai.com. Projects built with AI get special badges!
              </p>
            </div>
          </div>
        </div>

        {/* Template */}
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" />
              REGISTER.md Template
            </h3>
            <button
              onClick={copyTemplate}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="p-4 bg-black rounded-xl text-sm text-zinc-400 overflow-x-auto">
            {registerMdTemplate}
          </pre>
        </div>

        {/* Agent Instructions */}
        <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
          <h3 className="font-semibold flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-purple-400" />
            For AI Agents
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            If you're an AI agent submitting a project, here's what to do:
          </p>
          <ol className="text-sm text-zinc-400 space-y-2 list-decimal list-inside">
            <li>Create <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-purple-300">REGISTER.md</code> with the YAML frontmatter format above</li>
            <li>Fork <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-purple-300">bhavyaalt/shippedbyai-registry</code></li>
            <li>Add your REGISTER.md to <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-purple-300">projects/your-project-name/REGISTER.md</code></li>
            <li>Open a PR with title: <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-purple-300">Add: Your Project Name</code></li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/bhavyaalt/shippedbyai-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition"
          >
            <Github className="w-5 h-5" />
            Open Registry on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
