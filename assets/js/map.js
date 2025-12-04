// Map with Leaflet and filters
document.addEventListener("DOMContentLoaded", () => {
  // Initialize map centered on Bergamo
  const map = L.map("map").setView([45.6983, 9.6773], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  // Define layers for different categories
  const layers = {
    seguridad: L.layerGroup(),
    ocio: L.layerGroup(),
    estudio: L.layerGroup(),
    precios: L.layerGroup(),
    accesibilidad: L.layerGroup(),
  };

  // Add markers to layers
  // Seguridad
  L.circle([45.703, 9.677], {
    radius: 250,
    color: "green",
    fillColor: "#10b981",
    fillOpacity: 0.2,
  })
    .bindPopup("<b>Barrio seguro</b><br>Zona Città Alta - bien iluminada")
    .addTo(layers.seguridad);

  L.marker([45.695, 9.67])
    .bindPopup("<b>Comisaría de Policía</b><br>Emergencias y ayuda")
    .addTo(layers.seguridad);

  // Ocio
  L.marker([45.695, 9.675])
    .bindPopup('<b>Bar Erasmus "Il Punto"</b><br>Popular entre estudiantes')
    .addTo(layers.ocio);
  L.marker([45.7, 9.665])
    .bindPopup('<b>Club "Garage"</b><br>Música y eventos nocturnos')
    .addTo(layers.ocio);

  // Estudio
  L.marker([45.705, 9.685])
    .bindPopup("<b>Campus UniBG</b><br>Universidad de Bérgamo")
    .addTo(layers.estudio);
  L.marker([45.698, 9.672])
    .bindPopup("<b>Biblioteca Civica</b><br>Espacio de estudio público")
    .addTo(layers.estudio);

  // Precios
  L.marker([45.69, 9.68])
    .bindPopup("<b>Residencia Borgopalazzo</b><br>€400-500/mes")
    .addTo(layers.precios);
  L.marker([45.697, 9.669])
    .bindPopup("<b>Supermercado Eurospin</b><br>Precios económicos")
    .addTo(layers.precios);

  // Accesibilidad
  L.marker([45.696, 9.673])
    .bindPopup(
      "<b>Parada accesible</b><br>Bus línea 1 - acceso silla de ruedas"
    )
    .addTo(layers.accesibilidad);

  // Filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const activeFilters = new Set();

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      if (activeFilters.has(filter)) {
        // Remove filter
        activeFilters.delete(filter);
        btn.classList.remove(
          "border-indigo-500",
          "bg-indigo-50",
          "text-indigo-700"
        );
        btn.classList.add("border-slate-200");
        map.removeLayer(layers[filter]);
      } else {
        // Add filter
        activeFilters.add(filter);
        btn.classList.remove("border-slate-200");
        btn.classList.add(
          "border-indigo-500",
          "bg-indigo-50",
          "text-indigo-700"
        );
        layers[filter].addTo(map);
      }
    });
  });
});
