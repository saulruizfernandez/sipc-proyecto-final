// State management using localStorage
const AppState = {
  get: (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  clear: () => {
    localStorage.clear();
  },
};

// Initialize default state if needed
if (!AppState.get("userData")) {
  AppState.set("userData", {
    phase: "planeando",
    interests: ["alojamiento"],
    language: "es",
    locationEnabled: false,
  });
}
