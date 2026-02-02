import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'agent' | 'tool' | 'platform' | 'template' | 'integration';
  tags: string[];
  logo_url?: string;
  screenshot_urls: string[];
  website_url?: string;
  github_url?: string;
  demo_url?: string;
  docs_url?: string;
  creator_name: string;
  creator_twitter?: string;
  creator_farcaster?: string;
  onchain_address?: string;
  tech_stack: string[];
  status: 'live' | 'beta' | 'concept' | 'archived';
  built_by_ai: boolean;
  featured: boolean;
  upvotes: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectSubmission {
  name: string;
  tagline: string;
  description: string;
  category: Project['category'];
  tags: string[];
  logo_url?: string;
  screenshot_urls?: string[];
  website_url?: string;
  github_url?: string;
  demo_url?: string;
  docs_url?: string;
  creator_name: string;
  creator_twitter?: string;
  creator_farcaster?: string;
  onchain_address?: string;
  tech_stack: string[];
  status: Project['status'];
  built_by_ai?: boolean;
}
