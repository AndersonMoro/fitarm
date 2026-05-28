-- FitARM MVP schema for Supabase
-- Execute this file in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  daily_calories numeric not null default 2200,
  weight numeric not null default 80,
  height numeric not null default 175,
  age integer not null default 35,
  sex text not null default 'male',
  activity numeric not null default 1.55,
  goal text not null default 'maintain',
  calorie_strategy text not null default 'basal10',
  meals_left integer not null default 5,
  diabetes boolean not null default false,
  hypertension boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists public.meals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  meal_date date not null,
  display_time text,
  label text not null,
  kcal numeric not null default 0,
  carbs numeric not null default 0,
  protein numeric not null default 0,
  fat numeric not null default 0,
  fiber numeric not null default 0,
  sodium numeric not null default 0,
  glycemic_load numeric not null default 0,
  flags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.meal_items (
  id uuid primary key default gen_random_uuid(),
  meal_id uuid not null references public.meals(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  sort_order integer not null default 0,
  food_name text not null,
  food_group text,
  prep text not null default 'cozido',
  grams numeric not null default 0,
  oil numeric not null default 0,
  sugar numeric not null default 0,
  salt numeric not null default 0,
  food_snapshot jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists meals_user_date_idx on public.meals(user_id, meal_date);
create index if not exists meal_items_meal_idx on public.meal_items(meal_id);
create index if not exists meal_items_user_idx on public.meal_items(user_id);

alter table public.profiles enable row level security;
alter table public.meals enable row level security;
alter table public.meal_items enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "meals_select_own" on public.meals;
drop policy if exists "meals_insert_own" on public.meals;
drop policy if exists "meals_update_own" on public.meals;
drop policy if exists "meals_delete_own" on public.meals;
drop policy if exists "meal_items_select_own" on public.meal_items;
drop policy if exists "meal_items_insert_own" on public.meal_items;
drop policy if exists "meal_items_update_own" on public.meal_items;
drop policy if exists "meal_items_delete_own" on public.meal_items;

create policy "profiles_select_own"
on public.profiles for select
using ((select auth.uid()) is not null and (select auth.uid()) = id);

create policy "profiles_insert_own"
on public.profiles for insert
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

create policy "profiles_update_own"
on public.profiles for update
using ((select auth.uid()) is not null and (select auth.uid()) = id)
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

create policy "meals_select_own"
on public.meals for select
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meals_insert_own"
on public.meals for insert
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meals_update_own"
on public.meals for update
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meals_delete_own"
on public.meals for delete
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meal_items_select_own"
on public.meal_items for select
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meal_items_insert_own"
on public.meal_items for insert
with check (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
  and exists (
    select 1 from public.meals
    where meals.id = meal_items.meal_id
      and meals.user_id = (select auth.uid())
  )
);

create policy "meal_items_update_own"
on public.meal_items for update
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "meal_items_delete_own"
on public.meal_items for delete
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);
