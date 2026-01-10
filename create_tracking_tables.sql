-- Create table for Speaking Practice Sessions
create table public.speaking_sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  zone_id int, -- Which RPG zone (1=Home, 2=Market, etc)
  duration_seconds int default 0,
  pronunciation_score int default 0,
  grammar_score int default 0,
  confidence_score int default 0,
  overall_score int generated always as ((pronunciation_score + grammar_score + confidence_score) / 3) stored,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create table for Verbal Practice Results (MCQ)
create table public.verbal_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  category text, -- e.g., 'Grammar', 'Vocabulary'
  score int default 0, -- Number of correct answers
  total_questions int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create table for Listening Practice Results
create table public.listening_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  scenario_id text,
  score int default 0,
  total_questions int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS Policies (Optional but recommended)
alter table public.speaking_sessions enable row level security;
alter table public.verbal_results enable row level security;
alter table public.listening_results enable row level security;

create policy "Users can insert their own speaking sessions"
on public.speaking_sessions for insert with check (auth.uid() = user_id);

create policy "Users can view their own speaking sessions"
on public.speaking_sessions for select using (auth.uid() = user_id);

create policy "Users can insert their own verbal results"
on public.verbal_results for insert with check (auth.uid() = user_id);

create policy "Users can view their own verbal results"
on public.verbal_results for select using (auth.uid() = user_id);

create policy "Users can insert their own listening results"
on public.listening_results for insert with check (auth.uid() = user_id);

create policy "Users can view their own listening results"
on public.listening_results for select using (auth.uid() = user_id);
