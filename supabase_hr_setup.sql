
-- HR Preparation Module Tables

-- 1. Interview Sessions (Tracks the full interview attempt)
create table if not exists interview_sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  level text not null, -- 'fresher', 'professional', 'managerial'
  status text default 'in_progress', -- 'in_progress', 'completed'
  score_summary jsonb, -- { grammar: 8.5, confidence: 9, ... }
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Interview Answers (Tracks individual Q&A within a session)
create table if not exists interview_answers (
  id uuid default gen_random_uuid() primary key,
  session_id uuid references interview_sessions not null,
  question text not null,
  transcript text, -- User's spoken answer
  analysis jsonb, -- AI Analysis: { grammar_score: 8, feedback: "...", ... }
  duration int, -- Duration in seconds
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table interview_sessions enable row level security;
alter table interview_answers enable row level security;

-- Policies (Allow users to see/insert their own data)
create policy "Users can view their own sessions"
  on interview_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert their own sessions"
  on interview_sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own sessions"
  on interview_sessions for update
  using (auth.uid() = user_id);

create policy "Users can view their own answers"
  on interview_answers for select
  using (
    exists (
      select 1 from interview_sessions
      where interview_sessions.id = interview_answers.session_id
      and interview_sessions.user_id = auth.uid()
    )
  );

create policy "Users can insert their own answers"
  on interview_answers for insert
  with check (
    exists (
      select 1 from interview_sessions
      where interview_sessions.id = interview_answers.session_id
      and interview_sessions.user_id = auth.uid()
    )
  );
