# Erasmus Bergamo — Mobile Mockup

Prototipo móvil completo para app Erasmus en Bérgamo (MVP + Visión FuturUX integrada).

## 📱 Estructura de pantallas

### A) MVP Real (implementable hoy)

1. **index.html** — Pantalla de bienvenida/splash
2. **onboarding.html** — Onboarding completo en 4 pasos:
   - Elegir fase del Erasmus
   - Seleccionar intereses
   - Configurar idioma
   - Permisos de geolocalización (ético y transparente)
3. **home.html** — Home personalizada según fase del usuario
4. **map.html** — Mapa con capa Erasmus (Leaflet + OpenStreetMap)
   - Filtros: seguridad, ocio, estudio, precios, accesibilidad
5. **feed.html** — Feed de experiencias verificadas
   - Badges de rol (Erasmus actual, ex-Erasmus, mentor)
   - Traducción automática simulada
   - "Por qué ves este contenido"
6. **profile.html** — Perfil y panel de privacidad
   - Control de personalización
   - Control de geolocalización
   - Ajuste ético transparente
   - Verificación institucional
7. **accessible.html** — Modo inclusivo
   - Alto contraste
   - Navegación sin mapa (lista)
   - Compatible con lectores de pantalla

### B) FuturUX (tecnología mañana — conceptual)

8. **futur-ar.html** — Vista AR (Realidad Aumentada)
   - Capa AR sobre la ciudad (inspiración Minority Report ética)
   - Vivienda recomendada
   - Puntos Erasmus
   - Rutas seguras iluminadas
9. **futur-predictive.html** — Mapa inteligente predictivo
   - Anticipa necesidades según fase
   - Capa contextual según estado emocional/fase (estimación ética, sin biometría)

## 🛠️ Tecnologías

- **TailwindCSS** vía CDN (diseño rápido y responsive)
- **Leaflet.js** para mapas interactivos (OpenStreetMap, sin API key)
- **JavaScript vanilla** para interactividad
- **localStorage** para persistencia de datos del usuario

## 🚀 Cómo usar

### Local

```bash
cd /home/sfernandez/Documents/ing-informatica/cuarto/SIPC/PROYECTO_FINAL
python3 -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `/`
5. Guarda y espera unos minutos
6. Accede a `https://<tu-usuario>.github.io/<repo>/`

## 📂 Archivos JavaScript

- `assets/js/app.js` — Estado global (localStorage)
- `assets/js/onboarding.js` — Lógica del onboarding
- `assets/js/home.js` — Personalización del home
- `assets/js/map.js` — Mapa interactivo con filtros
- `assets/js/feed.js` — Traducción de posts
- `assets/js/profile.js` — Configuración de privacidad

## ✨ Características destacadas

- Navegación fluida entre pantallas
- Personalización según fase Erasmus
- Traducción automática simulada
- Mapa con capas temáticas
- Modo accesible completo
- Pantallas FuturUX integradas (no como sección separada)
- Diseño ético y transparente (control de privacidad)

## 📝 Notas

- Todo es un mockup/prototipo funcional
- Las pantallas FuturUX son conceptuales (simulan tecnología futura)
- No hay backend real — datos en localStorage
- Preparado para presentaciones y demos
# sipc-proyecto-final
