function saludar(nombre, genero) {
  if (nombre) {
    switch (genero) {
      case "masculino":
        return `Hola, Sr. ${nombre}!`;
      case "femenino":
        return `Hola, Sra. ${nombre}!`;
      case "no-binario":
        return `Hola, ${nombre}!`;
      default:
        return `Hola, ${nombre}!`;
    }
  } else {
    return "Hola!";
  }
}

export default saludar;
