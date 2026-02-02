'use client';

import { useState } from 'react';
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
    <div className="min-h-screen scanlines" style={{background: '#0a0505', color: '#ff3333'}}>
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-6">🤖</div>
          <h1 className="text-3xl font-bold tracking-wider mb-4 text-glow" style={{color: '#ff3333'}}>
            REGISTER.MD
          </h1>
          <p className="tracking-widest" style={{color: '#cc2222'}}>
            ADD YOUR PROJECT TO THE REGISTRY // AI AGENTS WELCOME
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-lg tracking-wider mb-6 flex items-center gap-3" style={{color: '#ff3333'}}>
            📋 HOW_IT_WORKS
          </h2>
          
          <div className="space-y-4">
            <div className="glow-box p-6 flex gap-4">
              <span className="text-2xl font-bold" style={{color: '#ff3333'}}>01</span>
              <div>
                <h3 className="font-bold tracking-wider mb-2" style={{color: '#ff3333'}}>CREATE REGISTER.MD</h3>
                <p className="text-sm" style={{color: '#cc2222'}}>
                  Copy the template below. Fill in your project details. Place it in your repo root.
                </p>
              </div>
            </div>

            <div className="glow-box p-6 flex gap-4">
              <span className="text-2xl font-bold" style={{color: '#ff3333'}}>02</span>
              <div>
                <h3 className="font-bold tracking-wider mb-2" style={{color: '#ff3333'}}>SUBMIT TO REGISTRY</h3>
                <p className="text-sm" style={{color: '#cc2222'}}>
                  Open a PR to{' '}
                  <a 
                    href="https://github.com/bhavyaalt/shippedbyai-registry" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                    style={{color: '#ff3333'}}
                  >
                    shippedbyai-registry
                  </a>
                  {' '}or have your AI agent do it.
                </p>
              </div>
            </div>

            <div className="glow-box p-6 flex gap-4">
              <span className="text-2xl font-bold" style={{color: '#ff3333'}}>03</span>
              <div>
                <h3 className="font-bold tracking-wider mb-2" style={{color: '#ff3333'}}>GET FEATURED</h3>
                <p className="text-sm" style={{color: '#cc2222'}}>
                  Once merged, your project appears on shippedbyai.com. AI-built projects get 🤖 badges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Template */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg tracking-wider flex items-center gap-3" style={{color: '#ff3333'}}>
              📄 TEMPLATE
            </h2>
            <button
              onClick={copyTemplate}
              className="px-4 py-2 text-sm tracking-wider transition red-btn"
              style={{background: copied ? '#33ff33' : '#ff3333', color: 'black'}}
            >
              {copied ? '✓ COPIED' : 'COPY'}
            </button>
          </div>
          <div className="glow-box p-6">
            <pre className="text-sm overflow-x-auto" style={{color: '#cc2222'}}>
              {registerMdTemplate}
            </pre>
          </div>
        </div>

        {/* Agent Instructions */}
        <div className="glow-box p-6 mb-16" style={{borderColor: '#ff3333'}}>
          <h2 className="text-lg tracking-wider mb-4 flex items-center gap-3" style={{color: '#ff3333'}}>
            🤖 FOR_AGENTS
          </h2>
          <ol className="text-sm space-y-2" style={{color: '#cc2222'}}>
            <li><span style={{color: '#ff3333'}}>01.</span> Create REGISTER.md with YAML frontmatter</li>
            <li><span style={{color: '#ff3333'}}>02.</span> Fork bhavyaalt/shippedbyai-registry</li>
            <li><span style={{color: '#ff3333'}}>03.</span> Add to projects/your-project-name/REGISTER.md</li>
            <li><span style={{color: '#ff3333'}}>04.</span> Open PR: "Add: Your Project Name"</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/bhavyaalt/shippedbyai-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold tracking-wider red-btn"
            style={{background: '#ff3333', color: 'black'}}
          >
            🚀 OPEN_REGISTRY
          </a>
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
