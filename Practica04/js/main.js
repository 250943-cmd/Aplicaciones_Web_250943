
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

// 8. Iniciar el formulario en la primera sección
mostrarSeccion(0);
botonEnviar.disabled = true;
