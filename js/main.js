function realizarPregunta(pregunta, opciones, opcionCorrecta) {
    let respuestaUsuario = prompt(`${pregunta}\n${opciones}`);

    if (respuestaUsuario === opcionCorrecta) {
        alert("Correcto!");
        return true;
    } else {
        alert("Respuesta Incorrecta");
        return false;
    }
}

function bienvenida() {
    let edad = prompt("Bienvenido a DIVERTIME. Ingresa tu edad");

    if (edad >= 18) {
        alert("Podes ingresar. Único requisito: ¡DIVERTIRTE!");
        return true;
    } else {
        alert("Lo siento, no cumplis con la edad necesaria.");
        return false;
    }
}

function juego() {
    let contador = 0;

    if (bienvenida()) {
        if (realizarPregunta("¿Un horno se utiliza para cocinar alimentos?", "1 - Si \n2 - No \n3 - A veces", "1")) {
            contador++;
        }

        if (realizarPregunta("¿Un equipo de fútbol tiene 12 jugadores en el campo durante un partido típico?", "1 - Si \n2 - No \n3 - No estoy seguro", "2")) {
            contador++;
        }

        if (realizarPregunta("¿La Gran Muralla China fue construida para proteger contra invasiones?", "1 - Si \n2 - No \n3 - No estoy seguro", "1")) {
            contador++;
        }

        alert("Respuestas Correctas: " + contador);
    }
}

juego();