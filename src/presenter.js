import saludar from "./saludador";

// Selecciona los elementos del DOM
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

// Añade un manejador de eventos para el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtiene el valor del nombre y del género
  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;

  // Llama a la función de saludo con el nombre y el género
  const saludo = saludar(nombre, genero);

  // Muestra el saludo en el div
  div.innerHTML = `<p>${saludo}</p>`;
});
