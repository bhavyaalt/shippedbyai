-- Projects table for shippedbyai.com marketplace
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

-- Index for searching
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Full text search
CREATE INDEX IF NOT EXISTS idx_projects_search ON projects USING GIN (
  to_tsvector('english', name || ' ' || tagline || ' ' || description)
);

-- Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Anyone can read
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);

-- Only authenticated can insert (or use service key)
CREATE POLICY "Authenticated insert" ON projects FOR INSERT WITH CHECK (true);

-- Function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for updated_at
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
