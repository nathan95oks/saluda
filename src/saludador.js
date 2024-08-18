function saludar(nombre) {
  if (nombre) {
    return `Hola, ${nombre}!`;
  } else {
    return "Hola!";
  }
}

export default saludar;
