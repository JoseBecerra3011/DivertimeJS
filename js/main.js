let respuestasCorrectas = [];
let categorias = [];

let url = window.location.href.replace('index.html','preguntas.json');
// Función para cargar preguntas desde el archivo JSON local usando fetch y promesas
const cargarPreguntasDesdeJSON = async()=> {
    try{
        const response = await fetch(url, {
            mode: "no-cors"
        });
        if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.status}`);
        }
        else{
            const data = await response.json();
            return data;
        }
    }catch(error){
        console.log('Error al cargar preguntas desde el archivo JSON');
        console.error(error)
    }
};

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
    preguntaContainer.id = 'preguntaContainer'; 
    preguntaContainer.className = 'container'
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

        
        Swal.close();
    }

    if (intentosIncorrectos >= 3) {
        await showSweetAlert('error', 'Juego terminado', 'Has alcanzado el límite de intentos incorrectos.');
    } else {
        await showSweetAlert('success', 'Felicidades', 'Has respondido todas las preguntas correctamente en ' + categoria.categoria + '.');
    }
}

async function showSweetAlert(icon, title, text) {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}

async function mostrarMensaje(icon, title, text) {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
        customClass: {
            popup: 'custom-swal-popup', // fondo del popup
            title: 'custom-swal-title', // título
            content: 'custom-swal-content', // contenido
            confirmButton: 'custom-swal-confirm', // botón de confirmar
            cancelButton: 'custom-swal-cancel' // botón de cancelar
        }
    });
}



async function mostrarMensajeConInput(inputType, title, text) {
    return Swal.fire({
        title: title,
        text: text,
        input: inputType,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    });
}

async function mostrarMensajeConfirmacion(icon, title, text) {
   return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    })
}
async function comprobarEdad() {   
    const input = document.getElementById('input');
    const container = document.getElementById('bienvenidaContainer');
    const edad = input.value;

    if (!isNaN(edad) && edad >= 18) {
        await mostrarMensaje('info', '¡Podes ingresar!', 'Único requisito: ¡DIVERTIRTE!');
        container.remove();
        await iniciarJuego();
    } else {
        await mostrarMensaje('error', 'Lo siento', 'No cumples con la edad necesaria para entrar a jugar. ¡Hasta luego!');
    }
}

async function iniciarJuego() {
    try{
        let seleccion;
        let continuarJugando = true;
        categorias= await cargarPreguntasDesdeJSON();
        // Almacenar preguntas en localStorage
        localStorage.setItem('preguntas', JSON.stringify(await categorias)); 
        
        while (continuarJugando) {
            let opcionesCategorias = categorias.map((categoria) =>`${categorias.indexOf(categoria) + 1} - ${categoria.categoria}`).join('\n');
            await mostrarMensajeConInput('number', 'Selecciona una categoría:', opcionesCategorias).then((result)=>{
                if(result.isConfirmed){
                    seleccion = result.value;
                }
            });
            const indiceCategoria = parseInt(seleccion) - 1;

            if (!isNaN(indiceCategoria) && indiceCategoria >= 0 && indiceCategoria < categorias.length) {
                await jugarCategoriaDOM(categorias[indiceCategoria]);
            } else {
                await mostrarMensaje('error', 'Opción no válida', '¡Relájate y selecciona una categoría válida!');
            }

            await mostrarMensajeConfirmacion('question', 'Muy bien', '¿Deseas continuar con otra categoría?').then((result)=>{
                if(!result.isConfirmed){
                    continuarJugando=false;
                }
            });
            
            if (!continuarJugando) {
                await mostrarMensaje('info', 'Gracias por jugar', '¡Nos vemos pronto!');
            }
        }
    }catch(error){
        console.error(error);
    }
}

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