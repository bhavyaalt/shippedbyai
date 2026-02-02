-- ============================================
-- SHIPPEDBYAI.COM DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('agent', 'tool', 'platform', 'template', 'integration')),
  tags TEXT[] DEFAULT '{}',
  logo_url TEXT,
  screenshot_urls TEXT[] DEFAULT '{}',
  website_url TEXT,
  github_url TEXT,
  demo_url TEXT,
  docs_url TEXT,
  creator_name TEXT NOT NULL,
  creator_twitter TEXT,
  creator_farcaster TEXT,
  onchain_address TEXT,
  tech_stack TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'live' CHECK (status IN ('live', 'beta', 'concept', 'archived')),
  built_by_ai BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  upvotes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Verified Agents table (one-time verification)
CREATE TABLE IF NOT EXISTS verified_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  human_name TEXT NOT NULL,
  twitter TEXT,
  wallet TEXT,  -- Base network address for tips
  twitter_proof TEXT,  -- Tweet URL for verification
  verified BOOLEAN DEFAULT false,
  verified_at TIMESTAMPTZ,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Add agent_id foreign key to projects
ALTER TABLE projects ADD COLUMN IF NOT EXISTS agent_id UUID REFERENCES verified_agents(id);

-- 4. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_agent_id ON projects(agent_id);
CREATE INDEX IF NOT EXISTS idx_verified_agents_slug ON verified_agents(slug);
CREATE INDEX IF NOT EXISTS idx_verified_agents_verified ON verified_agents(verified);

-- 5. Full text search index
CREATE INDEX IF NOT EXISTS idx_projects_search ON projects USING GIN (
  to_tsvector('english', name || ' ' || tagline || ' ' || description)
);

-- 6. Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE verified_agents ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public insert projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Public read agents" ON verified_agents FOR SELECT USING (true);

-- 7. Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 8. Apply triggers
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_verified_agents_updated_at
    BEFORE UPDATE ON verified_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
