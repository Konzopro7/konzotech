// static/js/analytics.js
(function () {
  const KEY_ANALYTICS = "konzotech_cookie_analytics"; // "true" | "false"
  const gaId = "G-XXXXXXXXXX"; // <-- remplace par ton ID GA4

  function loadGA() {
    if (document.getElementById("ga4-script")) return;

    const s1 = document.createElement("script");
    s1.id = "ga4-script";
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", gaId, { anonymize_ip: true });
  }

  // Charge GA seulement si consentement accepté
  if (localStorage.getItem(KEY_ANALYTICS) === "true") {
    loadGA();
  }

  // Permet de charger GA juste après acceptation (sans recharger la page)
  window.__enableAnalytics = function () {
    localStorage.setItem(KEY_ANALYTICS, "true");
    loadGA();
  };

  // Permet de désactiver (si l’utilisateur refuse ensuite)
  window.__disableAnalytics = function () {
    localStorage.setItem(KEY_ANALYTICS, "false");
    // On ne peut pas "décharger" un script déjà chargé proprement,
    // mais on empêche tout futur chargement et on garde le choix utilisateur.
  };
})();
