-- Add ELO Rating to Profiles (if it doesn't exist)
-- Note: Assuming 'profiles' table exists and mirrors auth.users. 
-- If you don't have a 'profiles' table yet, this creates a basic one or adds columns to auth.users metadata wrapper.
-- Since we often can't modify auth.users directly, we'll create/update a public.profiles table.

create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text,
  avatar_url text,
  elo_rating int default 1000,
  ranked_matches_played int default 0,
  updated_at timestamp with time zone
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- Create Ranked Matches Table
create table public.ranked_matches (
  id uuid default gen_random_uuid() primary key,
  player1_id uuid references auth.users(id) not null,
  player2_id uuid references auth.users(id), -- Can be null if it's a Bot/Ghost which we might handle differently, but usually we want a record. For Ghost, maybe we store the Ghost ID or null.
  winner_id uuid references auth.users(id),
  elo_change int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Matches
alter table public.ranked_matches enable row level security;

create policy "Anyone can read matches"
  on public.ranked_matches for select
  using ( true );

create policy "Server/Functions can insert matches" 
  on public.ranked_matches for insert
  with check ( true ); -- Ideally locked down to service role, but for client-side demo:
  
-- Allow authenticated users to insert match results (In production, move ELO logic to Database Function/Edge Function to prevent cheating)
create policy "Users can insert matches"
  on public.ranked_matches for insert
  with check ( auth.role() = 'authenticated' );
