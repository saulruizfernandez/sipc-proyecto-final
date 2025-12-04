// Profile page logic
document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {
    phase: "planeando",
    interests: [],
    language: "es",
  };

  // Display user info
  document.getElementById("userName").textContent = "Usuario Erasmus";
  document.getElementById("userPhase").textContent = `Fase: ${userData.phase}`;

  // Toggle switches
  const toggles = {
    personalizationToggle: true,
    locationToggle: userData.locationEnabled || false,
    visibilityToggle: true,
    translationToggle: true,
  };

  Object.keys(toggles).forEach((id) => {
    const toggle = document.getElementById(id);
    if (toggle) {
      toggle.checked = toggles[id];
      toggle.addEventListener("change", (e) => {
        toggles[id] = e.target.checked;
        // Save to localStorage
        userData[id] = e.target.checked;
        localStorage.setItem("userData", JSON.stringify(userData));
      });
    }
  });

  // Verify institution button
  document.getElementById("verifyBtn")?.addEventListener("click", () => {
    alert(
      "Verificación institucional: enviaremos un correo a tu email universitario para confirmar tu identidad."
    );
  });
});
