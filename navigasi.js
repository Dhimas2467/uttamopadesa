fetch("navigasi.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("navigasi-container").innerHTML = html;
  });
