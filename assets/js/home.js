// Home page dynamic content
document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {
    phase: "planeando",
    interests: ["alojamiento"],
    language: "es",
  };

  // Update phase display
  document.getElementById(
    "phaseDisplay"
  ).textContent = `Fase: ${userData.phase}`;

  // Personalized greeting
  const greeting = document.getElementById("greeting");
  const greetingMessage = document.getElementById("greetingMessage");
  const whyContent = document.getElementById("whyContent");

  const greetings = {
    planeando: {
      title: "¡Prepárate para tu aventura!",
      message:
        "Te ayudamos a organizar tu llegada a Bérgamo con toda la información que necesitas.",
      why: `Estás en fase de planeación y te interesan: ${userData.interests.join(
        ", "
      )}. Por eso priorizamos información sobre alojamiento, documentación y contactos útiles.`,
    },
    "recién llegado": {
      title: "¡Bienvenido a Bérgamo!",
      message:
        "Los primeros días son importantes. Aquí encontrarás todo lo necesario para instalarte.",
      why: `Acabas de llegar y te mostramos eventos de bienvenida, rutas esenciales y comunidad Erasmus cercana porque son tus prioridades ahora.`,
    },
    instalado: {
      title: "¡Disfruta tu experiencia!",
      message:
        "Ya conoces la ciudad. Descubre eventos, oportunidades y conecta con la comunidad.",
      why: `Llevas tiempo aquí, así que te sugerimos actividades culturales, voluntariado y eventos sociales que coinciden con tus intereses.`,
    },
  };

  const content = greetings[userData.phase] || greetings.planeando;
  greeting.textContent = content.title;
  greetingMessage.textContent = content.message;
  whyContent.textContent = content.why;

  // Dynamic checklist based on phase
  const dynamicContent = document.getElementById("dynamicContent");
  let checklistHTML = "";

  if (userData.phase === "planeando") {
    checklistHTML = `
      <section class="mb-6">
        <h3 class="font-semibold mb-3">Checklist de preparación</h3>
        <div class="bg-white border rounded-lg p-4">
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Contactar con la universidad de destino</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Buscar alojamiento temporal</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Fijar cita con oficina de llegada</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Obtener el código fiscal italiano</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Obtener el bono de transporte</span>
            </li>
          </ul>
        </div>
      </section>
    `;
  } else if (userData.phase === "recién llegado") {
    checklistHTML = `
      <section class="mb-6">
        <h3 class="font-semibold mb-3">Primeros pasos en Bérgamo</h3>
        <div class="bg-white border rounded-lg p-4">
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Registrarte en la universidad</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Asistir a orientación ESN</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Conseguir tarjeta SIM italiana</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Explorar el campus y servicios</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Conectar con otros Erasmus</span>
            </li>
          </ul>
        </div>
      </section>
    `;
  } else {
    checklistHTML = `
      <section class="mb-6">
        <h3 class="font-semibold mb-3">Aprovecha al máximo tu Erasmus</h3>
        <div class="bg-white border rounded-lg p-4">
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Participar en eventos culturales</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Explorar ciudades cercanas (Milán, Venecia)</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Unirte a clubes o voluntariado</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Mejorar tu italiano</span>
            </li>
            <li class="flex items-center gap-2">
              <input type="checkbox" class="w-4 h-4" />
              <span>Documentar tu experiencia</span>
            </li>
          </ul>
        </div>
      </section>
    `;
  }

  dynamicContent.innerHTML = checklistHTML;
});
