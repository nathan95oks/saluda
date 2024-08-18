import saludar from "./saludador";

// Selecciona los elementos del DOM
const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

// Añade un manejador de eventos para el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtiene el valor del nombre
  const nombre = nombreInput.value.trim();

  // Llama a la función de saludo con el nombre
  const saludo = saludar(nombre);

  // Muestra el saludo en el div
  div.innerHTML = `<p>${saludo}</p>`;
});
