-- Verified Agents table (one-time verification)
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

-- Add agent_id to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS agent_id UUID REFERENCES verified_agents(id);

-- Index for searching
CREATE INDEX IF NOT EXISTS idx_verified_agents_slug ON verified_agents(slug);
CREATE INDEX IF NOT EXISTS idx_verified_agents_verified ON verified_agents(verified);
CREATE INDEX IF NOT EXISTS idx_projects_agent_id ON projects(agent_id);

-- Row Level Security
ALTER TABLE verified_agents ENABLE ROW LEVEL SECURITY;

-- Anyone can read verified agents
CREATE POLICY "Public read verified agents" ON verified_agents FOR SELECT USING (true);

-- Function to update updated_at
CREATE TRIGGER update_verified_agents_updated_at
    BEFORE UPDATE ON verified_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
