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
      if (edadNumber < 18) {
        saludo += " You're very young!";
      } else if (edadNumber >= 18 && edadNumber < 60) {
        saludo += " Nice to meet you!";
      } else {
        saludo += " Greetings to a wise adult!";
      }
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
      if (edadNumber < 18) {
        saludo += " ¡Eres muy joven!";
      } else if (edadNumber >= 18 && edadNumber < 60) {
        saludo += " ¡Qué gusto conocerte!";
      } else {
        saludo += " ¡Un saludo a un adulto sabio!";
      }
    }
  }

  return saludo;
}

export default saludar;
