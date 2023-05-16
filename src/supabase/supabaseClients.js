import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://fbldcgzujbakqpkiaxwy.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibGRjZ3p1amJha3Fwa2lheHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTgxMTQsImV4cCI6MTk5OTM5NDExNH0.RqZHdhQjDcZyLBna5uQl05Ean9V3W3QhkcvZel9B0HY"
// const supabaseUrl = import.meta.env.PUBLIC_ANYBODY
// const supabaseKey = import.meta.env.VITE_PWD
const supabase = createClient(import.meta.env.PUBLIC_URL, import.meta.env.PUBLIC_KEY);

// const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase