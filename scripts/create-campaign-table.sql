-- Create campaign_requests table
CREATE TABLE IF NOT EXISTS campaign_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE campaign_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (since we're using anon key)
CREATE POLICY "Allow public inserts" ON campaign_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reading your own submissions
CREATE POLICY "Allow public reads" ON campaign_requests
  FOR SELECT
  TO anon
  USING (true);
