// Onboarding flow logic
document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;
  const totalSteps = 4;
  const userData = {
    phase: null,
    interests: [],
    language: null,
    locationEnabled: false,
  };

  const nextBtn = document.getElementById("nextBtn");
  const steps = document.querySelectorAll(".step-content");

  // Phase selection
  document.querySelectorAll(".phase-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".phase-option").forEach((b) => {
        b.classList.remove("border-indigo-500", "bg-indigo-50");
        b.classList.add("border-slate-200");
      });
      btn.classList.remove("border-slate-200");
      btn.classList.add("border-indigo-500", "bg-indigo-50");
      userData.phase = btn.dataset.phase;
      nextBtn.disabled = false;
    });
  });

  // Interest selection
  document.querySelectorAll(".interest-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("border-indigo-500");
      btn.classList.toggle("bg-indigo-50");
      const interest = btn.dataset.interest;
      if (userData.interests.includes(interest)) {
        userData.interests = userData.interests.filter((i) => i !== interest);
      } else {
        userData.interests.push(interest);
      }
      nextBtn.disabled = userData.interests.length === 0;
    });
  });

  // Language selection
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-option").forEach((b) => {
        b.classList.remove("border-indigo-500", "bg-indigo-50");
        b.classList.add("border-slate-200");
      });
      btn.classList.remove("border-slate-200");
      btn.classList.add("border-indigo-500", "bg-indigo-50");
      userData.language = btn.dataset.lang;
      nextBtn.disabled = false;
    });
  });

  // Geolocation buttons
  document.getElementById("allowGeoBtn")?.addEventListener("click", () => {
    userData.locationEnabled = true;
    saveAndFinish();
  });

  document.getElementById("skipGeoBtn")?.addEventListener("click", () => {
    userData.locationEnabled = false;
    saveAndFinish();
  });

  // Next button logic
  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      steps[currentStep - 1].classList.add("hidden");
      steps[currentStep].classList.remove("hidden");
      currentStep++;

      // Update progress
      document.querySelector(
        "header .text-xs"
      ).textContent = `Paso ${currentStep} de ${totalSteps}`;

      // Reset button state for next step
      if (currentStep === 2) {
        nextBtn.disabled = userData.interests.length === 0;
      } else if (currentStep === 3) {
        nextBtn.disabled = !userData.language;
      } else if (currentStep === 4) {
        nextBtn.classList.add("hidden");
      }
    }
  });

  function saveAndFinish() {
    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("onboardingComplete", "true");

    // Redirect to home
    window.location.href = "home.html";
  }
});
