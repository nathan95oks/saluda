import saludar from "./saludador";

// Selecciona los elementos del DOM
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

// Añade un manejador de eventos para el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Llama a la función de saludo sin parámetros
  const saludo = saludar();

  // Muestra el saludo en el div
  div.innerHTML = `<p>${saludo}</p>`;
});
