// 1. Imprimir el mensaje en la Consola de Depuración
console.log("Hola Mundo , desde JavaScript");

// 2. Obtener elementos del formulario
const formularioRegistro = document.getElementById("formularioRegistro");

const secciones = Array.from(
    formularioRegistro.querySelectorAll(".form-section")
);

let seccionActual = 0;

// 3. Mostrar solamente la sección correspondiente
function mostrarSeccion(indice) {
    secciones.forEach((seccion, posicion) => {
        seccion.hidden = posicion !== indice;
    });

    seccionActual = indice;
}

// 4. Botones Siguiente
const botonesSiguiente = formularioRegistro.querySelectorAll(".btn-siguiente");

botonesSiguiente.forEach((boton) => {
    boton.addEventListener("click", function () {

        const seccion = secciones[seccionActual];

        // Validar los campos de la sección actual
        const campos = seccion.querySelectorAll("input, select, textarea");

        for (const campo of campos) {
            if (!campo.checkValidity()) {
                campo.reportValidity();
                return;
            }
        }

        // Avanzar a la siguiente sección
        if (seccionActual < secciones.length - 1) {
            mostrarSeccion(seccionActual + 1);
        }

    });
});

// 5. Activar el botón Enviar al aceptar los términos
const validado = document.getElementById("validado");
const botonEnviar = formularioRegistro.querySelector('input[type="submit"]');

validado.addEventListener("change", function () {
    botonEnviar.disabled = !validado.checked;
});

// 6. Función del botón Borrar
formularioRegistro.addEventListener("reset", function () {

    // Regresar a la primera sección
    mostrarSeccion(0);

    // Desactivar nuevamente el botón Enviar
    botonEnviar.disabled = true;

    // Limpiar el resultado de la edad
    resultadoEdad.textContent =
        "Selecciona una fecha para calcular tu edad.";

    resultadoEdad.classList.remove(
        "edad-estado--mayor",
        "edad-estado--menor",
        "edad-estado--error"
    );

    // --- NUEVO: Limpiar error de teléfono y reiniciar redes sociales al borrar ---
    if (errorTelefono && inputTelefono) {
        errorTelefono.style.display = "none";
        inputTelefono.style.borderColor = "";
        inputTelefono.setCustomValidity("");
    }

    if (urlFacebook) urlFacebook.disabled = true;
    if (urlLinkedin) urlLinkedin.disabled = true;
    if (whatsAppQR) whatsAppQR.disabled = true;

    if (contenedorPreviewQR && previewQR) {
        previewQR.src = "";
        contenedorPreviewQR.style.display = "none";
    }

});

// 7. Calcular la edad del usuario
const fechaNacimiento = document.getElementById("fechaNacimiento");
const resultadoEdad = document.getElementById("resultadoEdad");

// Se ejecuta al seleccionar o modificar una fecha
fechaNacimiento.addEventListener("change", function () {

    // Limpiar los colores utilizados en la validación anterior
    resultadoEdad.classList.remove(
        "edad-estado--mayor",
        "edad-estado--menor",
        "edad-estado--error"
    );

    // Si el usuario borra la fecha, mostrar el estado inicial
    if (fechaNacimiento.value === "") {
        resultadoEdad.textContent =
            "Selecciona una fecha para calcular tu edad.";
        return;
    }

    // Obtener la fecha de nacimiento
    const [anio, mes, dia] = fechaNacimiento.value.split("-").map(Number);

    const nacimiento = new Date(anio, mes - 1, dia);

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Validar que la fecha no sea futura
    if (nacimiento > hoy) {
        resultadoEdad.textContent =
            "Error: no se puede calcular la edad con los datos elegidos. La fecha es futura.";

        resultadoEdad.classList.add("edad-estado--error");
        return;
    }

    // Calcular la edad exacta
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    const diferenciaDias = hoy.getDate() - nacimiento.getDate();

    // Ajustar la edad si todavía no ha cumplido años
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && diferenciaDias < 0)
    ) {
        edad--;
    }

    // Validar mayoría de edad
    if (edad >= 18) {

        resultadoEdad.textContent =
            `Eres mayor de edad. Tienes ${edad} años.`;

        resultadoEdad.classList.add("edad-estado--mayor");

    } else {

        resultadoEdad.textContent =
            `Eres menor de edad. Tienes ${edad} años.`;

        resultadoEdad.classList.add("edad-estado--menor");
    }

});

// 8. Validar que el teléfono no contenga letras
const inputTelefono = document.getElementById("numTelefono");
const errorTelefono = document.getElementById("errorTelefono");

if (inputTelefono) {
    inputTelefono.addEventListener("input", function () {
        const contieneLetras = /[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(this.value);

        if (contieneLetras) {
            if (errorTelefono) errorTelefono.style.display = "block";
            this.style.borderColor = "#e74c3c";
            this.setCustomValidity("No se permiten letras en el número telefónico.");
            this.reportValidity();
        } else {
            if (errorTelefono) errorTelefono.style.display = "none";
            this.style.borderColor = "";
            this.setCustomValidity("");
        }
    });
}

// 9. Habilitar campos de Redes Sociales solo al marcar su checkbox y mostrar vista previa del QR
const socialFacebook = document.getElementById("socialFacebook");
const urlFacebook = document.getElementById("urlFacebook");

const socialLinkedin = document.getElementById("socialLinkedin");
const urlLinkedin = document.getElementById("urlLinkedin");

const socialWhatsapp = document.getElementById("socialWhatsapp");
const whatsAppQR = document.getElementById("whatsAppQR");
const contenedorPreviewQR = document.getElementById("contenedorPreviewQR");
const previewQR = document.getElementById("previewQR");

function vincularCheckboxConInput(checkbox, input) {
    if (checkbox && input) {
        input.disabled = !checkbox.checked;

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                input.disabled = false;
                input.focus();
            } else {
                input.disabled = true;
                input.value = "";

                if (input === whatsAppQR && contenedorPreviewQR && previewQR) {
                    previewQR.src = "";
                    contenedorPreviewQR.style.display = "none";
                }
            }
        });
    }
}

vincularCheckboxConInput(socialFacebook, urlFacebook);
vincularCheckboxConInput(socialLinkedin, urlLinkedin);
vincularCheckboxConInput(socialWhatsapp, whatsAppQR);

if (whatsAppQR && contenedorPreviewQR && previewQR) {
    whatsAppQR.addEventListener("change", function () {
        const archivo = this.files[0];

        if (archivo) {
            const lector = new FileReader();
            lector.onload = function (e) {
                previewQR.src = e.target.result;
                contenedorPreviewQR.style.display = "block";
            };
            lector.readAsDataURL(archivo);
        } else {
            previewQR.src = "";
            contenedorPreviewQR.style.display = "none";
        }
    });
}

// 10. Iniciar el formulario en la primera sección
mostrarSeccion(0);
botonEnviar.disabled = true;
