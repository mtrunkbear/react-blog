const API_URL = process.env["VITE_API_URL"];

export default async function handler(req, res) {
  const result = await fetch(API_URL);

  res.status(200).end("Hello Cron!" + result.status + result.ok);
}
