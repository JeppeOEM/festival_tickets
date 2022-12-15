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

// const options = {
//   method: 'POST',
//   headers: {
//     apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obGdnemJhanhrbXdyeHp2YXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MzcsImV4cCI6MTk4MjE3NDczN30.4O4liHBgTXEsuG1ZCpIJmUpj_ZMPNGngu4EDFBpv2gw',
//     Authorization: 'Bearer',
//     'Content-Type': 'application/json',
//     Prefer: 'return=representation'
//   },
//   body: '{"genres":["comedy"],"seasons":9,"rating":2,"ongoing":true,"name":["somename"]}'
// };

// fetch('https://nhlggzbajxkmwrxzvayl.supabase.co/rest/v1/tv%20shows', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
