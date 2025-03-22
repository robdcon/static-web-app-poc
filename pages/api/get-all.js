import { createClient }  from '@supabase/supabase-js';
const supabase = createClient("https://sehfleogetdiurnioiix.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlaGZsZW9nZXRkaXVybmlvaWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzA3MDgsImV4cCI6MjA1ODA0NjcwOH0.sKjIXBD0u-HuT_scVZuBcd6gw-VIr_vgLzIdIT9ZIXE");

export default async function getAllJourneys(req, res) {
  let { data: donation_journeys, error } = await supabase
    .from('donation_journeys')
    .select('*')
  return res.status(200).json({donation_journeys});
}
          