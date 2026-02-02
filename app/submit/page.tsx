'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
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
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}} />
      
      {/* Nav */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-zinc-500 hover:text-orange-500 transition">[← BACK]</Link>
          <div className="flex items-center gap-2">
            <span className="text-orange-500">&gt;</span>
            <span className="font-bold tracking-wider">SHIPPED_BY_AI</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-zinc-600 text-sm mb-4">&gt;LOADING_SUBMISSION_PROTOCOL...</div>
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-orange-500">[SUBMIT]</span> REGISTER.MD
        </h1>
        <p className="text-zinc-500 mb-12">
          ADD A REGISTER.MD FILE TO YOUR REPO // YOUR AGENT CAN SUBMIT IT AUTOMATICALLY
        </p>

        {/* Steps */}
        <div className="mb-12">
          <div className="text-zinc-600 text-sm mb-6">## [PROTOCOL] HOW_IT_WORKS</div>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-6 border border-zinc-800">
              <span className="text-orange-500 font-bold">01.</span>
              <div>
                <h3 className="font-bold mb-2">CREATE REGISTER.MD</h3>
                <p className="text-zinc-500 text-sm">
                  Copy the template below. Fill in your project details. Place it in your repo root.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-zinc-800">
              <span className="text-orange-500 font-bold">02.</span>
              <div>
                <h3 className="font-bold mb-2">SUBMIT TO REGISTRY</h3>
                <p className="text-zinc-500 text-sm">
                  Open a PR to{' '}
                  <a 
                    href="https://github.com/bhavyaalt/shippedbyai-registry" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    shippedbyai-registry
                  </a>
                  {' '}or have your AI agent do it.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-zinc-800">
              <span className="text-orange-500 font-bold">03.</span>
              <div>
                <h3 className="font-bold mb-2">GET FEATURED</h3>
                <p className="text-zinc-500 text-sm">
                  Once merged, your project appears on shippedbyai.com. AI-built projects get special badges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Template */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-zinc-600 text-sm">## [TEMPLATE] REGISTER.MD</div>
            <button
              onClick={copyTemplate}
              className="flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-orange-500 text-sm transition"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? 'COPIED' : 'COPY'}
            </button>
          </div>
          <pre className="p-6 bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400 overflow-x-auto">
            {registerMdTemplate}
          </pre>
        </div>

        {/* Agent Instructions */}
        <div className="p-6 border border-orange-500/30 bg-orange-500/5">
          <div className="text-orange-500 text-sm mb-4">## [FOR_AGENTS] AUTO_SUBMIT</div>
          <ol className="text-sm text-zinc-400 space-y-2">
            <li><span className="text-orange-500">01.</span> Create REGISTER.md with the YAML frontmatter format</li>
            <li><span className="text-orange-500">02.</span> Fork bhavyaalt/shippedbyai-registry</li>
            <li><span className="text-orange-500">03.</span> Add to projects/your-project-name/REGISTER.md</li>
            <li><span className="text-orange-500">04.</span> Open PR with title: "Add: Your Project Name"</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/bhavyaalt/shippedbyai-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-orange-500 text-black font-bold hover:bg-orange-400 transition"
          >
            [OPEN_REGISTRY]
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-600">
          &gt;SHIPPED_BY_AI // BUILT_WITH_⚡_BY_HUMANS_+_AI
        </div>
      </footer>
    </div>
  );
}
