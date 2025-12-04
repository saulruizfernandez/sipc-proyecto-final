// Feed translation functionality
document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {
    language: "es",
  };

  document.querySelectorAll(".translate-btn").forEach((btn, index) => {
    const postText = btn.closest("article").querySelector(".post-text");
    const originalText = postText.dataset.original || postText.textContent;
    let isTranslated = false;

    btn.addEventListener("click", () => {
      if (isTranslated) {
        // Show original
        postText.textContent = originalText;
        btn.textContent = "Traducir a tu idioma";
        isTranslated = false;
      } else {
        // Simulate translation
        const langMap = {
          es: "español",
          it: "italiano",
          en: "inglés",
        };
        postText.textContent = `[Traducido a ${
          langMap[userData.language]
        }] ${originalText}`;
        btn.textContent = "Mostrar original";
        isTranslated = true;
      }
    });
  });
});
