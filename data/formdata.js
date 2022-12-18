export function getData(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2N4eHpqZmhxb2V6d2pmY2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwMDc0MjAsImV4cCI6MTk4NjU4MzQyMH0.BJq3v8T6zH0wXPrB_iARN1ymt4XHFRkPzYRfX-ndlzE";
  const url = "https://sdscxxzjfhqoezwjfcax.supabase.co";
  fetch(url + "/rest/v1/Ragnarök", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2N4eHpqZmhxb2V6d2pmY2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwMDc0MjAsImV4cCI6MTk4NjU4MzQyMH0.BJq3v8T6zH0wXPrB_iARN1ymt4XHFRkPzYRfX-ndlzE",
      Authorization: "Bearer",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
}
