function saludar(nombre, genero, edad, idioma) {
  let saludo = "";

  if (idioma === "ingles") {
    // Genera el saludo en inglés basado en el nombre y género
    if (nombre) {
      switch (genero) {
        case "masculino":
          saludo = `Hello, Mr. ${nombre}!`;
          break;
        case "femenino":
          saludo = `Hello, Ms. ${nombre}!`;
          break;
        case "no-binario":
          saludo = `Hello, ${nombre}!`;
          break;
        default:
          saludo = `Hello, ${nombre}!`;
      }
    } else {
      saludo = "Hello!";
    }

    // Añade un mensaje basado en la edad en inglés
    if (edad) {
      const edadNumber = Number(edad);
      saludo += ` You are ${edadNumber} years old.`;
    }
  } else {
    // Genera el saludo en español basado en el nombre y género
    if (nombre) {
      switch (genero) {
        case "masculino":
          saludo = `Hola, Sr. ${nombre}!`;
          break;
        case "femenino":
          saludo = `Hola, Sra. ${nombre}!`;
          break;
        case "no-binario":
          saludo = `Hola, ${nombre}!`;
          break;
        default:
          saludo = `Hola, ${nombre}!`;
      }
    } else {
      saludo = "¡Hola!";
    }

    // Añade un mensaje basado en la edad en español
    if (edad) {
      const edadNumber = Number(edad);
      saludo += ` Tienes ${edadNumber} años.`;
    }
  }

  return saludo;
}

export default saludar;
