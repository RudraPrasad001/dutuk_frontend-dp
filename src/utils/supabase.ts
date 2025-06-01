import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://unqpmwlzyaqrryzyrslf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucXBtd2x6eWFxcnJ5enlyc2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTI5ODUsImV4cCI6MjA2NDE4ODk4NX0.RwDqMBy9ctQzxG9CuVzaUlriK6M5cGycPhQviNQfcxw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
