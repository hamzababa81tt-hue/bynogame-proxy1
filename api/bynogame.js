export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.bynogame.com/tr/oyunlar/knight-online/gold-bar");
    const html = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Hata: " + err.message);
  }
}
