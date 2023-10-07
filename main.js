const siths = [
  {
    nombre: "Padawan Sith 1",
    poder: 0.4,
  },
  {
    nombre: "Padawan Sith 2",
    poder: 0.4,
  },
  {
    nombre: "Darth Maul",
    poder: 0.5,
  },
  {
    nombre: "Conde Dooku",
    poder: 0.6,
  },
  {
    nombre: "Darth Vader",
    poder: 0.7,
  },
  {
    nombre: "Darth Sidious",
    poder: 0.8,
  },
];

const rutaImagenes = [
  "./images/sith0.jpg",
  "./images/sith1.jpg",
  "./images/sith2.jpg",
  "./images/sith3.jpg",
  "./images/sith4.jpg",
  "./images/sith5.jpg",
];

const holocrons = [];
let i = 0;
let nombrePersonaje = "";
let puntaje = 0;

function guardarPersonaje() {
  sessionStorage.setItem(
    "nombrePersonaje",
    document.getElementById("nombrePersonaje").value
  );
  window.location.href = "./juego.html";
  mostrarSiguienteBatalla();
}

function verPuntaje() {
  var tituloPuntaje = document.createElement("h1");
  tituloPuntaje.className = "tituloPuntaje";
  tituloPuntaje.textContent = `Tu puntaje es ${puntaje}`;
  document.body.appendChild(tituloPuntaje);
}

function mostrarSiguienteBatalla() {
  nombrePersonaje = sessionStorage.getItem("nombrePersonaje");
  if (i < siths.length) {
    var tituloBatalla = document.querySelector(".tituloBatalla");
    tituloBatalla.textContent = `${nombrePersonaje} se va a enfrentar contra ${siths[i].nombre} `;
    var imagenBatalla = document.querySelector(".imagenBatalla");
    imagenBatalla.src = rutaImagenes[i];
  } else {
    document.body.innerHTML = "";
    var tituloBatalla = document.createElement("h1");
    tituloBatalla.className = "tituloBatalla";
    tituloBatalla.textContent = "¡El juego ha terminado!";
    document.body.appendChild(tituloBatalla);
    var botonPuntaje = document.createElement("button");
    botonPuntaje.className = "botonPuntaje";
    botonPuntaje.textContent = "Ver mi puntaje";
    document.body.appendChild(botonPuntaje);
    botonPuntaje.onclick = verPuntaje;
  }
}

function realizarBatalla() {
  if (i < siths.length) {
    let numeroCombate = Math.random();
    if (numeroCombate >= siths[i].poder) {
      let textoBatalla = document.querySelector(".textoBatalla");
      textoBatalla.textContent = `Ganaste la batalla contra ${
        siths[i].nombre
      }, sumaste ${i + 5} puntos`;
      puntaje = puntaje + i + 5;
    } else {
      let textoBatalla = document.querySelector(".textoBatalla");
      textoBatalla.textContent = `${nombrePersonaje} perdió la batalla contra ${siths[i].nombre}`;
    }

    i++;
    mostrarSiguienteBatalla();
  }
}

mostrarSiguienteBatalla();
batallas();
