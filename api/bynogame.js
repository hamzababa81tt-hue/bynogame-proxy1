// api/bynogame.js (Vercel / GitHub)
export default async function handler(req, res) {
  try {
    // hedef: EnUcuzGB (zero gb listesi)
    const target = "https://www.enucuzgb.com/?d=1";
    const response = await fetch(target, {
      headers: {
        // bazı siteler user-agent kontrolü yapabiliyor, tarayıcı gibi davranalım
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
      }
    });
    const html = await response.text();

    // CORS izni ver
    res.setHeader("Access-Control-Allow-Origin", "*");
    // isteği başarı ile döndür
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Hata: " + err.message);
  }
}
