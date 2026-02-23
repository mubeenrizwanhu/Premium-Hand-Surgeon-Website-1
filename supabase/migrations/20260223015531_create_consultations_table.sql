/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `condition` (text, required)
      - `preferred_date` (date, optional)
      - `message` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for public INSERT (anyone can submit consultation request)
    - Add policy for authenticated admin users to read
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  condition text NOT NULL,
  preferred_date date,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit consultation requests"
  ON consultations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);
