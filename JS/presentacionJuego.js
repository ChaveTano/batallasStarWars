function guardarPersonaje() {
  sessionStorage.setItem(
    "nombrePersonaje",
    document.getElementById("nombrePersonaje").value
  );
  window.location.href = "./juego.html";
  mostrarSiguienteBatalla();
}

function mostrarSiguienteBatalla() {
  nombrePersonaje = sessionStorage.getItem("nombrePersonaje");
  if (i < siths.length) {
    let tituloBatalla = document.querySelector(".tituloBatalla");
    tituloBatalla.textContent = `${nombrePersonaje} se va a enfrentar contra ${siths[i].nombre} `;
    let imagenBatalla = document.querySelector(".imagenBatalla");
    imagenBatalla.src = rutaImagenes[i];
  } else {
    document.body.innerHTML = "";
    let tituloBatalla = document.createElement("h1");
    tituloBatalla.className = "tituloBatalla";
    tituloBatalla.textContent = "¡El juego ha terminado!";
    document.body.appendChild(tituloBatalla);
    let botonPuntaje = document.createElement("button");
    botonPuntaje.className = "botonPuntaje";
    botonPuntaje.textContent = "Ver mi puntaje";
    document.body.appendChild(botonPuntaje);
    botonPuntaje.onclick = verPuntaje;
  }
}

let formPresentacionJuego = document.querySelector(
  ".formPresentacionJuego"
);
formPresentacionJuego.addEventListener("submit", function (e) {
  e.preventDefault();
  guardarPersonaje();
});

let botonAJugar = document.querySelector(".botonAJugar");
botonAJugar.addEventListener("click", guardarPersonaje);


