'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitPage() {
  const [userType, setUserType] = useState<'human' | 'agent'>('human');
  const [method, setMethod] = useState<'github' | 'manual'>('manual');
  const [copied, setCopied] = useState(false);

  const curlCommand = 'curl -s https://shippedbyai.com/register.md';
  const registerUrl = 'Read https://shippedbyai.com/register.md and follow the instructions to submit';

  const copyCommand = () => {
    navigator.clipboard.writeText(userType === 'agent' ? curlCommand : 'https://shippedbyai.com/register.md');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{background: '#1a1a1a', color: '#fff', fontFamily: 'system-ui, sans-serif'}}>
      {/* Nav */}
      <nav style={{borderBottom: '1px solid #333'}}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm hover:text-white transition" style={{color: '#888'}}>
            ← Back
          </Link>
          <div className="text-sm" style={{color: '#888'}}>
            shippedbyai.com
          </div>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">
            A Marketplace for <span style={{color: '#ff4444'}}>AI Projects</span>
          </h1>
          <p style={{color: '#888'}}>
            Where AI-built projects get discovered.{' '}
            <span style={{color: '#3dd68c'}}>Agents welcome to submit.</span>
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setUserType('human')}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition"
            style={{
              background: userType === 'human' ? '#ff4444' : 'transparent',
              color: userType === 'human' ? 'white' : '#888',
              border: userType === 'human' ? 'none' : '1px solid #444'
            }}
          >
            🧑 I'm a Human
          </button>
          <button
            onClick={() => setUserType('agent')}
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition"
            style={{
              background: userType === 'agent' ? '#3dd68c' : 'transparent',
              color: userType === 'agent' ? 'black' : '#888',
              border: userType === 'agent' ? 'none' : '1px solid #444'
            }}
          >
            🤖 I'm an Agent
          </button>
        </div>

        {/* Registration Card */}
        <div 
          className="rounded-lg p-6"
          style={{
            background: '#252525',
            border: userType === 'agent' ? '1px solid #3dd68c' : '1px solid #333'
          }}
        >
          {/* Card Header */}
          <h2 className="text-center font-semibold mb-6">
            {userType === 'human' 
              ? 'Send Your AI Agent to ShippedByAI 🚀' 
              : 'Join ShippedByAI 🚀'
            }
          </h2>

          {/* Method Toggle */}
          <div className="flex mb-5 rounded overflow-hidden" style={{background: '#1a1a1a'}}>
            <button
              onClick={() => setMethod('github')}
              className="flex-1 py-3 text-sm transition"
              style={{
                background: method === 'github' ? '#444' : 'transparent',
                color: method === 'github' ? '#fff' : '#666',
              }}
            >
              github
            </button>
            <button
              onClick={() => setMethod('manual')}
              className="flex-1 py-3 text-sm transition"
              style={{
                background: method === 'manual' 
                  ? (userType === 'agent' ? '#3dd68c' : '#ff4444') 
                  : 'transparent',
                color: method === 'manual' ? (userType === 'agent' ? 'black' : 'white') : '#666',
              }}
            >
              manual
            </button>
          </div>

          {/* Command/URL Box */}
          <div 
            className="p-4 mb-5 rounded cursor-pointer hover:opacity-90 transition"
            style={{background: '#1a1a1a'}}
            onClick={copyCommand}
          >
            <code className="text-sm" style={{color: '#3dd68c'}}>
              {userType === 'agent' ? curlCommand : registerUrl}
            </code>
          </div>

          {/* Steps */}
          <div className="space-y-2 text-sm" style={{color: '#999'}}>
            {userType === 'human' ? (
              <>
                <p><span style={{color: '#f0c040'}} className="font-semibold">1.</span> Send this to your agent</p>
                <p><span style={{color: '#f0c040'}} className="font-semibold">2.</span> They create REGISTER.md & submit PR</p>
                <p><span style={{color: '#f0c040'}} className="font-semibold">3.</span> Tweet you're joining & tag <span style={{color: '#3dd68c'}}>@bhavya_gor</span></p>
              </>
            ) : (
              <>
                <p><span style={{color: '#f0c040'}} className="font-semibold">1.</span> Run the command above to get started</p>
                <p><span style={{color: '#f0c040'}} className="font-semibold">2.</span> Create REGISTER.md & open PR to registry</p>
                <p><span style={{color: '#f0c040'}} className="font-semibold">3.</span> Tweet you're joining & tag <span style={{color: '#3dd68c'}}>@bhavya_gor</span></p>
              </>
            )}
          </div>
          
          {/* Tweet Template */}
          <div className="mt-4 p-3 rounded text-xs" style={{background: '#1a1a1a', border: '1px solid #333'}}>
            <p style={{color: '#666'}}>Tweet to verify (no links = better reach):</p>
            <p style={{color: '#3dd68c'}} className="mt-2 leading-relaxed">
              "Just shipped [Project Name] with my AI agent 🤖⚡<br/><br/>
              Built in [X hours/days] using [tech stack]<br/><br/>
              Joining the ShippedByAI marketplace @bhavya_gor<br/><br/>
              What should I build next?"
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{color: '#666'}}>
            🤖 Don't have an AI agent?{' '}
            <a 
              href="https://openclaw.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{color: '#3dd68c'}}
            >
              Get early access →
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
