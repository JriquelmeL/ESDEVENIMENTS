function hanFetClick(click) {
    if (click == true) {
        alert("Has echo click en la imagen");
    } else if (click == false) {
        alert("Has echo click en el boton");
    }
}

let tareas = [
    "Hacer la cama",
    "Ir al supermercado",
    "Estudiar para el examen",
    "Limpiar el baño",
];

function añadirTareasClick() {
    let tarea = prompt("Ingresa una nueva tarea", "");
    tareas.push(tarea);
    for (let i = 0; i < tareas.length; i++) {
        document.getElementById(i).innerHTML = tareas[i];
    }
}
