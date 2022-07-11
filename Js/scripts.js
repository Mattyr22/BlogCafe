//seleccionar un elemento y asociarle evento.

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario');
// })


// Eventos de los Inputs y txt area.

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El elemento de Submit

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

// Validar Formulario
const {nombre, email, mensaje } = datos

if(nombre === '' || email === '' || mensaje === '') {
    mostrarAlerta('Todos los campos son obligatorios', 'error');

    return;  // Corta la ejecucion del codigo.
}

//crear alerta de enviado
mostrarAlerta('Mensaje enviado Correctamente');

// Enviar Formulario

    console.log('Enviando Formulario');
});

function leerTexto(e) {
    // console.log(e.target.value);
    
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }
        formulario.appendChild(alerta);
        // Desaparesca despues de 5seg.
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
