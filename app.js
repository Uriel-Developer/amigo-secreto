// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable para almacenar los amigos agregados
let listaDeAmigos = [];

// Función para agregar amigos al juego
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreIngresado = inputAmigo.value.trim();

    if (!nombreIngresado) {
        alert("Ingresa un amigo para continuar");
        return;
    }

    if (listaDeAmigos.includes(nombreIngresado)) {
        alert(`El nombre "${nombreIngresado}" ya está en la lista. Ingresa otro nombre.`);
        return;
    }

    listaDeAmigos.push(nombreIngresado);

    inputAmigo.value = "";
    inputAmigo.focus();

    console.log(listaDeAmigos);
    renderizarLista();
}

// Función para mostrar lista de amigos incluidos al juego
function renderizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        listaElementos.appendChild(item);
    }
}

// Función para sortear los amigos agregados al juego
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}