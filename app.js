// Paste your deployed Apps Script Web App URL here.
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyhZpkt4bvXIZIiZH1_HBbtf0gacHsgWjMjNj7eAtKGaJUsCD-Qi1AHL6oOnHbyLFA/exec";

const qs = new URLSearchParams(location.search);
const isAdmin = qs.get("admin") === "1";
const iframe = document.getElementById("app");

if (!APPS_SCRIPT_URL.includes("PASTE_")) {
  iframe.src = APPS_SCRIPT_URL + (isAdmin ? "?admin=1" : "");
} else {
  document.body.innerHTML = '<div style="font-family:Arial;padding:30px"><h2>Setup pending</h2><p>Open <b>app.js</b> and paste your Apps Script Web App URL.</p></div>';
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.warn));
}
