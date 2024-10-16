var formulario = document.querySelector(".formulario");
formulario.onsubmit = function (event) { // Cambiamos 'e' a 'event' para que la consola no lo marque como error porque por culpa de esta cosa estuve batallando por HORAAS
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("edad").value;
    let nacionalidadSelect = document.getElementById("nationality");
    let nacionalidad = nacionalidadSelect.options[nacionalidadSelect.selectedIndex].value;

    // Validaciones CON ALERT
    if (nombre.length === 0) {
        alert("Por favor ingrese un nombre.");
    }
    if (edad < 18 || edad > 90) {
        alert("La edad debe estar entre 18 y 90 años.");
    }

    // Llama a la función para agregar el invitado
    agregarInvitado(nombre, edad, nacionalidad);

    // Limpia los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("edad").value = "";
    nacionalidadSelect.selectedIndex = 0; // Reiniciar la selección de nacionalidad
};

function agregarInvitado(nombre, edad, nacionalidad) {
    // vamos a cambiar esta función por algo más legible: ifs!
    if (nacionalidad === "ar") {
        nacionalidad = "Argentina";
    } else if (nacionalidad === "mx") {
        nacionalidad = "Mexicana";
    } else if (nacionalidad === "vnzl") {
        nacionalidad = "Venezolana";
    } else if (nacionalidad === "per") {
        nacionalidad = "Peruana";
    }

    /* **APARICIÓN DE LA LISTA DE INVITADOS!!** */
    let lista = document.getElementById("lista-de-invitados");

    // Crea un contenedor para cada invitado
    let elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista"); /* la propiedad class.list nos regresa un elemento enlistado manipulable (para poderlo borrar) */

    // Crea el contenido del invitado
    let textoInvitado = document.createElement("span");
    textoInvitado.textContent = `Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`;

    // Crea el botón de eliminar
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.onclick = function () {
        lista.removeChild(elementoLista); // Elimina el elemento de la lista removiendo un nod hijo del DOM
    };

    // Añade el texto y el botón al contenedor
    elementoLista.appendChild(textoInvitado);  /* esta propiedad de nodo añade uno a la lista. nos añadirá el texto con los datos y su respextivo botón de borrar a la listita */
    elementoLista.appendChild(botonBorrar);

    // Añade el contenedor de invitado a la lista
    lista.appendChild(elementoLista); /* acá hace lo mismo pero ya en formato de lista */
}
