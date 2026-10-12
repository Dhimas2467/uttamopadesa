fetch("navigasi.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("navigasi-container").innerHTML = html;
  });


/* Tombol berbagi otomatis */
document.addEventListener("DOMContentLoaded", function () {
  const share = document.createElement("div");
  share.className = "tombol-share";

  const url = encodeURIComponent(window.location.href);
  const judul = encodeURIComponent(document.title);
  const teks = encodeURIComponent(document.title + " " + window.location.href);

  share.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" aria-label="Facebook">
      <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook">
    </a>
    <a href="https://twitter.com/intent/tweet?text=${teks}" target="_blank" rel="noopener" aria-label="X">
      <img src="https://cdn.simpleicons.org/x/000000" alt="X">
    </a>
    <button type="button" aria-label="Instagram" onclick="navigator.share ? navigator.share({title: document.title, url: location.href}) : window.open('https://www.instagram.com/')">
      <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram">
    </button>
    <a href="https://api.whatsapp.com/send?text=${teks}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp">
    </a>
    <a href="https://t.me/share/url?url=${url}&text=${judul}" target="_blank" rel="noopener" aria-label="Telegram">
      <img src="https://cdn.simpleicons.org/telegram/26A5E4" alt="Telegram">
    </a>
  `;

  share.style.cssText = "display:flex;align-items:center;gap:12px;margin:20px 0;";

  share.querySelectorAll("a, button").forEach(el => {
    el.style.cssText = "display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;padding:0;border:0;background:transparent;";
  });

  share.querySelectorAll("img").forEach(img => {
    img.style.cssText = "width:28px;height:28px;object-fit:contain;";
  });

  document.body.appendChild(share);
});

