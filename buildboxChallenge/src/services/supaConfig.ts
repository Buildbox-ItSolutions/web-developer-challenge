import { createClient } from "@supabase/supabase-js";

const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTE0MjIxLCJleHAiOjE5NTg0OTAyMjF9.d-rjEkZOyaV04SVFGVg_xKxv_QK4N_DyOpDZyXUlLsg';
const SUPA_RUL = 'https://qelkbubgpdwwhqzoqphu.supabase.in';


export const dbClient = createClient(SUPA_RUL, SUPA_KEY);