const API_URL = process.env.VITE_API_URL;

export default async function handler(req, res) {
  await fetchData();
  setInterval(async () => {
    await fetchData();
  }, 60000); 

  res.status(200).end("Hello Cron!");
}

async function fetchData() {
  try {
    const result = await fetch(API_URL);
    console.log("Fetch successful:", result.status, result.ok);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
