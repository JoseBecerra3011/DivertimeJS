let respuestasCorrectas = [];

// Objeto para representar una categoría
function Categoria(nombre, preguntas) {
    this.nombre = nombre;
    this.preguntas = preguntas;
}

// Array que contiene instancias de cada categoría
let categorias = [
    new Categoria("Deportes", [
        // PREGUNTA 1
        { enunciado: "¿Cuántos jugadores conforman un equipo de fútbol en el campo durante un partido típico?", opciones: "1 - 11\n2 - 12\n3 - 10", respuestaCorrecta: 1 },
        // PREGUNTA 2
        { enunciado: "¿En qué deporte se utiliza un balón de baloncesto?", opciones: "1 - Fútbol\n2 - Baloncesto\n3 - Golf", respuestaCorrecta: 2 },
        // PREGUNTA 3
        { enunciado: "¿Cuál es el evento deportivo que se celebra cada cuatro años y reúne a atletas de todo el mundo?", opciones: "1 - Copa Mundial de Fútbol\n2 - Juegos Olímpicos\n3 - Super Bowl", respuestaCorrecta: 2 },
        // PREGUNTA 4
        { enunciado: "¿Qué deporte se juega con un palo y una pelota pequeña en un campo con hoyos?", opciones: "1 - Golf\n2 - Tenis\n3 - Cricket", respuestaCorrecta: 1 },
        // PREGUNTA 5
        { enunciado: "¿En qué deporte se compite en una pista y los atletas saltan sobre obstáculos?", opciones: "1 - Salto con pértiga\n2 - Carrera de obstáculos\n3 - Maratón", respuestaCorrecta: 2 },
        // PREGUNTA 6
        { enunciado: "¿Cuál es el deporte acuático en el que los participantes surfean sobre las olas?", opciones: "1 - Windsurf\n2 - Surf\n3 - Esquí acuático", respuestaCorrecta: 2 },
        { enunciado: "¿Cuál es el deporta:e acuático en el que los participantes surfean sobre las olas?", opciones: "1 - Windsurf\n2 - Surf\n3 - Esquí acuático", respuestaCorrecta: 2 },
        // PREGUNTA 7
        { enunciado: "¿Qué deporte se juega en una mesa dividida por una red y se golpea una pelota con una paleta?", opciones: "1 - Tenis de mesa\n2 - Badminton\n3 - Ping pong", respuestaCorrecta: 1 },
        // PREGUNTA 8
        { enunciado: "¿Cuál es el deporte que se practica en una cancha dividida por una red y se golpea una pelota con raquetas?", opciones: "1 - Tenis\n2 - Squash\n3 - Bádminton", respuestaCorrecta: 1 },
    ]),
    
    new Categoria("Cocina", [
        // PREGUNTA 1
        { enunciado: "¿Para qué se utiliza comúnmente un horno en la cocina?", opciones: "1 - Asar carne\n2 - Cocinar alimentos\n3 - Refrigerar alimentos", respuestaCorrecta: 2 },
        // PREGUNTA 2
        { enunciado: "¿Cuál es el ingrediente principal de la receta de guacamole?", opciones: "1 - Tomate\n2 - Aguacate\n3 - Cebolla", respuestaCorrecta: 2 },
        // PREGUNTA 3
        { enunciado: "¿Qué método de cocina implica sumergir alimentos en agua hirviendo para cocinarlos?", opciones: "1 - Asar\n2 - Hervir\n3 - Freír", respuestaCorrecta: 2 },
        // PREGUNTA 4
        { enunciado: "¿Cuál es el ingrediente principal del plato italiano llamado lasaña?", opciones: "1 - Carne de res\n2 - Queso\n3 - Pasta", respuestaCorrecta: 3 },
        // PREGUNTA 5
        { enunciado: "¿Cuál es la bebida caliente tradicional en Japón hecha con té verde en polvo?", opciones: "1 - Té negro\n2 - Té de jazmín\n3 - Matcha", respuestaCorrecta: 3 },
        // PREGUNTA 6
        { enunciado: "¿Cuál es el ingrediente principal del plato mexicano llamado tacos?", opciones: "1 - Pollo\n2 - Tortilla de maíz\n3 - Arroz", respuestaCorrecta: 2 },
        // PREGUNTA 7
        { enunciado: "¿Qué tipo de alimento es el kimchi en la cocina coreana?", opciones: "1 - Sopa\n2 - Ensalada\n3 - Condimento fermentado", respuestaCorrecta: 3 },
    ]),
    new Categoria("Cultura", [
        // PREGUNTA 1
        { enunciado: "¿Cuál es el propósito principal de la Gran Muralla China?", opciones: "1 - Proteger contra invasiones\n2 - Marcar fronteras\n3 - Almacenar alimentos", respuestaCorrecta: 1 },
        // PREGUNTA 2
        { enunciado: "¿En qué país se encuentra la famosa estatua del Cristo Redentor?", opciones: "1 - Brasil\n2 - Italia\n3 - España", respuestaCorrecta: 1 },
        // PREGUNTA 3
        { enunciado: "¿Quién escribió 'Romeo y Julieta'?", opciones: "1 - William Shakespeare\n2 - Jane Austen\n3 - Charles Dickens", respuestaCorrecta: 1 },
        // PREGUNTA 4
        { enunciado: "¿Cuál es la capital de Japón?", opciones: "1 - Pekín\n2 - Seúl\n3 - Tokio", respuestaCorrecta: 3 },
        // PREGUNTA 5
        { enunciado: "¿Cuál es la moneda oficial de Australia?", opciones: "1 - Dólar australiano\n2 - Euro\n3 - Libra esterlina", respuestaCorrecta: 1 },
        // PREGUNTA 6
        { enunciado: "¿En qué continente se encuentra el desierto del Sahara?", opciones: "1 - África\n2 - Asia\n3 - América del Sur", respuestaCorrecta: 1 },
        // PREGUNTA 7
        { enunciado: "¿Cuál es el río más largo del mundo?", opciones: "1 - Amazonas\n2 - Nilo\n3 - Yangtsé", respuestaCorrecta: 2 },
        // PREGUNTA 8
        { enunciado: "¿Qué país es conocido como 'la Tierra del Sol Naciente'?", opciones: "1 - China\n2 - Japón\n3 - Corea del Sur", respuestaCorrecta: 2 },
    ]),
    new Categoria("Autos", [
        // PREGUNTA 1
        { enunciado: "¿Cuál es una marca famosa de automóviles conocida por su logo de 'anillos entrelazados'?", opciones: "1 - Ford\n2 - Toyota\n3 - Audi", respuestaCorrecta: 3 },
        // PREGUNTA 2
        { enunciado: "¿En qué país se fabrica el automóvil de lujo llamado Ferrari?", opciones: "1 - Italia\n2 - Alemania\n3 - Estados Unidos", respuestaCorrecta: 1 },
        // PREGUNTA 3
        { enunciado: "¿Cuál es la velocidad máxima permitida en muchas autopistas de todo el mundo?", opciones: "1 - 80 km/h\n2 - 120 km/h\n3 - 160 km/h", respuestaCorrecta: 2 },
        // PREGUNTA 4
        { enunciado: "¿Qué tipo de combustible utiliza comúnmente un automóvil eléctrico?", opciones: "1 - Gasolina\n2 - Diésel\n3 - Electricidad", respuestaCorrecta: 3 },
        // PREGUNTA 5
        { enunciado: "¿Qué marca es conocida por su modelo icónico llamado 'Mustang'?", opciones: "1 - Chevrolet\n2 - Ford\n3 - Honda", respuestaCorrecta: 2 },
        // PREGUNTA 6
        { enunciado: "¿Cuál es el componente clave del motor que convierte la energía del combustible en energía mecánica?", opciones: "1 - Alternador\n2 - Transmisión\n3 - Pistones", respuestaCorrecta: 3 },
        // PREGUNTA 7
        { enunciado: "¿En qué parte del automóvil se almacena el combustible antes de que llegue al motor?", opciones: "1 - Radiador\n2 - Tanque de combustible\n3 - Filtro de aire", respuestaCorrecta: 2 },
        // PREGUNTA 8
        { enunciado: "¿Qué famosa marca de automóviles produce el modelo '911'?", opciones: "1 - Mercedes-Benz\n2 - Porsche\n3 - BMW", respuestaCorrecta: 2 },
    ]),
    new Categoria("Animales", [
        // PREGUNTA 1
        { enunciado: "¿Cuál es el animal más grande del planeta Tierra?", opciones: "1 - Elefante africano\n2 - Ballena azul\n3 - Jirafa", respuestaCorrecta: 2 },
        // PREGUNTA 2
        { enunciado: "¿Qué animal es conocido por su capacidad para cambiar de color y camuflarse con su entorno?", opciones: "1 - Camaleón\n2 - Pavo real\n3 - Tigre", respuestaCorrecta: 1 },
        // PREGUNTA 3
        { enunciado: "¿Cuál es el mamífero volador que se alimenta principalmente de frutas?", opciones: "1 - Murciélago\n2 - Águila\n3 - Colibrí", respuestaCorrecta: 1 },
        // PREGUNTA 4
        { enunciado: "¿Qué animal es famoso por su trompa larga y colmillos grandes?", opciones: "1 - Rinoceronte\n2 - Elefante\n3 - Hipopótamo", respuestaCorrecta: 2 },
        // PREGUNTA 5
        { enunciado: "¿Cuál es el animal nacional de Australia que se caracteriza por llevar a su cría en una bolsa?", opciones: "1 - Canguro\n2 - Koala\n3 - Wombat", respuestaCorrecta: 1 },
        // PREGUNTA 6
        { enunciado: "¿Qué animal es conocido por su capacidad de regenerar extremidades?", opciones: "1 - Estrella de mar\n2 - Salamandra\n3 - Serpiente", respuestaCorrecta: 2 },
        // PREGUNTA 7
        { enunciado: "¿Cuál es el felino más grande y poderoso del mundo?", opciones: "1 - León\n2 - Tigre\n3 - Guepardo", respuestaCorrecta: 2 },
        // PREGUNTA 8
        { enunciado: "¿Cuál es el animal que bate sus alas más rápido y es capaz de quedarse suspendido en el aire?", opciones: "1 - Águila\n2 - Colibrí\n3 - Búho", respuestaCorrecta: 2 },
    ]),
];
let url = window.location.href.replace('index.html','preguntas.json');
// Función para cargar preguntas desde el archivo JSON local usando fetch y promesas
async function cargarPreguntasDesdeJSON() {
    return new Promise((resolve, reject) => {
        fetch(url, {
                mode: "no-cors"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la respuesta del servidor: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                categorias = data; // Asigna las preguntas cargadas desde el archivo JSON a la variable global
                resolve();
            })
            .catch(error => {
                console.error('Error al cargar preguntas desde el archivo JSON:', error);
                reject(error);
            })
            .finally(() => {
                console.log('Intentando cargar preguntas desde JSON...'); // Mensaje para la consola
            });
    });
}


cargarPreguntasDesdeJSON()
    .then(() => bienvenida())
    .catch(() => {
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        alert('Error al cargar preguntas desde el archivo JSON. Por favor, intenta nuevamente más tarde.');
    })
    .finally(() => {
        console.log('Intento de carga de preguntas completado.'); // Mensaje para la consola
    });

// Almacenar preguntas en localStorage
localStorage.setItem('preguntas', JSON.stringify(categorias));

// Cargar preguntas desde localStorage
let storedPreguntas = localStorage.getItem('preguntas');
if (storedPreguntas) {
    categorias = JSON.parse(storedPreguntas);
}

// Cargar respuestas correctas desde localStorage
let storedRespuestasCorrectas = localStorage.getItem('respuestasCorrectas');
if (storedRespuestasCorrectas) {
    respuestasCorrectas = JSON.parse(storedRespuestasCorrectas);
}

// Buscar una pregunta por enunciado
function buscarPreguntaPorEnunciado(enunciado) {
    for (let categoria of categorias) {
        let preguntaEncontrada = categoria.preguntas.find(pregunta => pregunta.enunciado.toLowerCase() === enunciado.toLowerCase());
        if (preguntaEncontrada) {
            return preguntaEncontrada;
        }
    }
    return null;
}
// Método para filtrar preguntas por respuesta correcta en una categoría
function filtrarPreguntasPorRespuestaCorrecta(categoria, respuestaCorrecta) {
    return categoria.preguntas.filter(pregunta => pregunta.respuestaCorrecta === respuestaCorrecta);
}

async function realizarPreguntaDOM(pregunta) {
    return new Promise(async (resolve, reject) => {
        let preguntaContainer = document.createElement('div');
    preguntaContainer.id = 'preguntaContainer'; // Añade el ID al contenedor de preguntas
    preguntaContainer.innerHTML = `
    <p>${pregunta.enunciado}</p>
    <p>${pregunta.opciones}</p>
    `;

        let respuestaInput = document.createElement('input');
        respuestaInput.type = 'text';

        let enviarBtn = document.createElement('button');
        enviarBtn.textContent = 'Enviar Respuesta';

        enviarBtn.addEventListener('click', async function () {
            let respuestaUsuario = respuestaInput.value;
            if (respuestaUsuario === pregunta.respuestaCorrecta.toString()) {
                await showSweetAlert('success', 'Correcto', '¡Respuesta correcta!');
                respuestasCorrectas.push(pregunta.enunciado);
            } else {
                await showSweetAlert('error', 'Respuesta Incorrecta', 'Inténtalo de nuevo.');
            }

            // Cerrar ventana abierta de SweetAlert antes de mostrar una nueva
            Swal.close();

            preguntaContainer.remove();
            respuestaInput.remove();
            enviarBtn.remove();
            resolve(respuestaUsuario === pregunta.respuestaCorrecta.toString());
        });

        document.body.appendChild(preguntaContainer);
        document.body.appendChild(respuestaInput);
        document.body.appendChild(enviarBtn);
    });
}

async function jugarCategoriaDOM(categoria) {
    let contador = 0;
    let intentosIncorrectos = 0;
    const cantidadDePreguntas = categoria.preguntas.length;

    while (intentosIncorrectos < 3 && contador < cantidadDePreguntas) {
        const respuestaCorrecta = await realizarPreguntaDOM(categoria.preguntas[contador]);

        if (respuestaCorrecta) {
            contador++;
        } else {
            intentosIncorrectos++;
        }

        // Cerrar ventana abierta de SweetAlert antes de mostrar una nueva
        Swal.close();
    }

    if (intentosIncorrectos >= 3) {
        await showSweetAlert('error', 'Juego terminado', 'Has alcanzado el límite de intentos incorrectos.');
    } else {
        await showSweetAlert('success', 'Felicidades', 'Has respondido todas las preguntas correctamente en ' + categoria.nombre + '.');
    }
}

async function showSweetAlert(icon, title, text) {
    return await Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}

async function bienvenida() {
    const edadInput = document.createElement('input');
    edadInput.type = 'number';
    edadInput.placeholder = 'Por favor, ingresa tu edad.';
    
    const confirmarEdadBtn = document.createElement('button');
    confirmarEdadBtn.textContent = 'Bienvenido a DIVERTIME.';
    

    const bienvenidaContainer = document.createElement('div');
    bienvenidaContainer.appendChild(edadInput);
    bienvenidaContainer.appendChild(confirmarEdadBtn);

    document.body.appendChild(bienvenidaContainer);

    return new Promise(resolve => {
        confirmarEdadBtn.addEventListener('click', async () => {
            const edad = parseInt(edadInput.value);

            if (!isNaN(edad) && edad >= 18) {
                await mostrarMensaje('info', '¡Podes ingresar!', 'Único requisito: ¡DIVERTIRTE!');
                bienvenidaContainer.remove();
                resolve();
            } else {
                mostrarMensaje('error', 'Lo siento', 'No cumples con la edad necesaria para entrar a jugar. ¡Hasta luego!');
            }
        });
    });
}

async function mostrarMensaje(icon, title, text) {
    return await Swal.fire({
        icon: icon,
        title: title,
        text: text,
        customClass: {
            popup: 'custom-swal-popup', // Clase personalizada para el fondo del popup
            title: 'custom-swal-title', // Clase personalizada para el título
            content: 'custom-swal-content', // Clase personalizada para el contenido
            confirmButton: 'custom-swal-confirm', // Clase personalizada para el botón de confirmar
            cancelButton: 'custom-swal-cancel' // Clase personalizada para el botón de cancelar
        }
    });
}

// Llamada inicial
bienvenida()
    .then(() => iniciarJuego())
    .catch(error => console.error(error));

async function iniciarJuego() {
    let continuarJugando = true;
    
    while (continuarJugando) {
        let opcionesCategorias = categorias.map((categoria, index) => `${index + 1} - ${categoria.nombre}`).join('\n');
        const seleccion = await mostrarMensajeConInput('number', 'Selecciona una categoría:', opcionesCategorias);

        const indiceCategoria = parseInt(seleccion) - 1;

        if (!isNaN(indiceCategoria) && indiceCategoria >= 0 && indiceCategoria < categorias.length) {
            await jugarCategoriaDOM(categorias[indiceCategoria]);
        } else {
            mostrarMensaje('error', 'Opción no válida', '¡Relájate y selecciona una categoría válida!');
        }

        continuarJugando = await mostrarMensajeConfirmacion('question', 'Muy bien', '¿Deseas continuar con otra categoría?');
        
        if (!continuarJugando) {
            mostrarMensaje('info', 'Gracias por jugar', '¡Nos vemos pronto!');
        }
    }
}

async function mostrarMensajeConInput(inputType, title, text) {
    const { value } = await Swal.fire({
        title: title,
        text: text,
        input: inputType,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
        
    });

    return value;
}

async function mostrarMensajeConfirmacion(icon, title, text) {
    const { value } = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    });

    return value;
}