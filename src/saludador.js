function saludar(nombre, genero, edad) {
  let saludo = "";

  // Genera el saludo basado en el nombre y género
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
    saludo = "Hola!";
  }

  // Añade un mensaje basado en la edad
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

  return saludo;
}

export default saludar;
