var nombre = document.querySelector(".preguntaNombre");
var error = document.querySelector(".contenedorError");
var telefono = document.querySelector(".preguntaTelefono");
var correo = document.querySelector(".preguntaCorreo");
var mensaje = document.querySelector(".preguntaMensaje");
var enviar = document.querySelector(".cuestionSubmit");
var enviando = document.querySelector(".enviando");
var enviandoTexto = document.querySelector(".enviandoTexto");

/* Validando nombre */
nombre.addEventListener("blur", validandoNombre);

function temporizador(){
    setTimeout(function() {
        error.innerHTML = ``;
      }, 1000);
}

function validandoNombre() {
    var newNombre = nombre.value.replace(/\s/g, "");
    console.log(newNombre);
    if(newNombre == "") {
        error.innerHTML = `
            <div class="errorSty">
                <p class="error"> El campo nombre es "OBLIGATORIO" </p>
            </div>
        `;
        temporizador();
    } else{
        nombre.classList.add("activo")
    }
}


/* Validando numero */
telefono.addEventListener("input", validandoTelefono);

function validandoTelefono() {
    var newCel = telefono.value.replace(/[^0-9]/g, '');
    telefono.value = newCel;
    if(telefono.value.length > 10) {
        error.innerHTML = `
            <div class="errorSty">
                <p class="error"> Tu numero unicamente puede tener 10 numeros </p>
            </div>
        `;
        temporizador();
    } else if(telefono.value.length < 10) {
        error.innerHTML = `
            <div class="errorSty">
                <p class="error"> Tu numero no puede tener menos de 10 numeros </p>
            </div>
        `;
        temporizador();
    } else {
        error.innerHTML = ``;
        telefono.classList.add("activo");
    }
}

/* Validar Email */

correo.addEventListener("blur", validarEmail);

function validarEmail(){
    var newCorreo = correo.value;
    validarEmail2(newCorreo);
}

function validarEmail2(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email)
    if(!resultado) {
        error.innerHTML = `
            <div class="errorSty">
                <p class="error"> Tu correo tiene un error </p>
            </div>
        `;
        temporizador();
    } else {
        correo.classList.add("activo");
    }
}

/* Validar mensaje */
mensaje.addEventListener("blur", validarMensaje);

function validarMensaje() {
    if(mensaje.value == "") {
        error.innerHTML = `
            <div class="errorSty">
                <p class="error"> No puedes mandar un mensaje vacio </p>
            </div>
        `;
        temporizador();
    } else {
        mensaje.classList.add("activo");
        validando();
    }
}

function validando() {
    if (nombre.classList.contains("activo") && telefono.classList.contains("activo") && correo.classList.contains("activo") && mensaje.classList.contains("activo")) {
        enviar.classList.remove("display");
    }
}



enviar.addEventListener("click", informacion);




var enviandoContenido = document.querySelector(".contenedorEnviando");


function informacion() {
    enviando.innerHTML = `
        <div id="contenedor">
            <div class="contenedor-loader">
                <div class="rueda"></div>
            </div>   
        </div>
    `
    enviandoContenido.classList.add("enviandoContenido");
    enviandoContenido.innerHTML = `
        <p>- Enviando -</p>
    `
    enviar.classList.add("display");
}


// function temporizador(){
//     setTimeout(function() {
//         error.innerHTML = ``;
//       }, 1000);
