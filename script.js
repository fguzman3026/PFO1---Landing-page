// Formulario de contacto: como es solo visual, evitamos que la página
// se recargue y en cambio mostramos un mensaje de confirmación simple.

const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita que el formulario intente enviarse a un servidor

  feedback.textContent = "¡Mensaje simulado! Esta demo no envía datos reales.";
  form.reset();
});
