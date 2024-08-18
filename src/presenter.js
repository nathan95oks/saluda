import saludar from "./saludador";

// Selecciona los elementos del DOM
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaSelect = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

// Añade un manejador de eventos para el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtiene el valor del nombre, género, edad e idioma
  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;
  const edad = edadInput.value.trim();
  const idioma = idiomaSelect.value;

  // Llama a la función de saludo con el nombre, género, edad e idioma
  const saludo = saludar(nombre, genero, edad, idioma);

  // Muestra el saludo en el div
  div.innerHTML = `<p>${saludo}</p>`;
});
