document.addEventListener("DOMContentLoaded", () => {

  // === Navbar shrink on scroll ===
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-small');
      } else {
        navbar.classList.remove('navbar-small');
      }
    });
  }

  // === Back to top button ===
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // === Reveal on scroll ===
  const revealElements = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.88;
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // === Smooth scroll for internal links ===
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
// chatbot basic
document.addEventListener("DOMContentLoaded", () => {
  const chatToggle = document.getElementById('chatbot-toggle');
  const chatBox = document.getElementById('chatbot');
  const chatClose = document.getElementById('chatbot-close');
  const chatSend = document.getElementById('chatbot-send');
  const chatInput = document.getElementById('chatbot-text');
  const chatMessages = document.getElementById('chatbot-messages');

  function addMessage(text, sender='bot') {
    const div = document.createElement('div');
    div.className = 'msg ' + sender;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (chatToggle && chatBox) {
    chatToggle.addEventListener('click', () => {
      chatBox.style.display = 'flex';
    });
  }
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatBox.style.display = 'none';
    });
  }
  if (chatSend) {
    chatSend.addEventListener('click', () => {
      const text = chatInput.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      chatInput.value = '';
      // réponse simple
      setTimeout(() => {
        addMessage("Merci pour votre message 🙏 On revient vers vous rapidement.");
      }, 500);
    });
  }
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        chatSend.click();
      }
    });
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const settingsBtn = document.getElementById("cookie-settings");

  const analyticsToggle = document.getElementById("cookie-analytics");
  const saveBtn = document.getElementById("cookie-save");
  const closeBtn = document.getElementById("cookie-close");

  const KEY = "konzotech_cookie_consent"; // "accepted" | "rejected" | "custom"
  const KEY_ANALYTICS = "konzotech_cookie_analytics"; // "true" | "false"

  function showBanner() { if (banner) banner.style.display = "block"; }
  function hideBanner() { if (banner) banner.style.display = "none"; }

  function openModal() {
    if (!modal) return;
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  function applyAnalyticsConsent() {
    // IMPORTANT : ici, tu chargeras GA uniquement si analytics = true
    const allowed = localStorage.getItem(KEY_ANALYTICS) === "true";
    if (!allowed) return;

    // Exemple: injecter le script GA plus tard
    // (tu mettras ton ID GA4 ici quand tu l'auras)
    // const gaId = "G-XXXXXXXXXX";
    // const s1 = document.createElement("script");
    // s1.async = true;
    // s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    // document.head.appendChild(s1);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', gaId);
  }

  // Initial
  const consent = localStorage.getItem(KEY);
  if (!consent) {
    showBanner();
  } else {
    applyAnalyticsConsent();
  }

  // Buttons
  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "accepted");
    localStorage.setItem(KEY_ANALYTICS, "true");
    hideBanner();
    applyAnalyticsConsent();
  });

  rejectBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "rejected");
    localStorage.setItem(KEY_ANALYTICS, "false");
    hideBanner();
  });

  settingsBtn?.addEventListener("click", () => {
    // Pré-remplir le switch
    analyticsToggle.checked = localStorage.getItem(KEY_ANALYTICS) === "true";
    openModal();
  });

  saveBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "custom");
    localStorage.setItem(KEY_ANALYTICS, analyticsToggle.checked ? "true" : "false");
    closeModal();
    hideBanner();
    applyAnalyticsConsent();
  });

  closeBtn?.addEventListener("click", () => closeModal());

  // Optional: fermer modal en cliquant dehors
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
