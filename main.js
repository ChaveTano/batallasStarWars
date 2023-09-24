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

const holocrons = [];

function explicacion() {
  return alert(
    "Este es un juego de Star Wars donde le darás nombre a tu personaje y te enfrentarás a poderosos siths del lado oscuro. Por cada enemigo derrotado obtendrás en Holocron Sith al que deberás ponerle un nombre, cada villano tendrá una probabilidad distinta de vencerte según su poder"
  );
}

function crearPersonaje() {
  return prompt("Introduce el nombre de tu Jedi");
}

function batallas() {
  const nombrePersonaje = crearPersonaje();
  for (let i = 0; i < siths.length; i++) {
    alert(`${nombrePersonaje} se va a enfrentar contra ${siths[i].nombre} `);
    let numeroCombate = Math.random();
    if (numeroCombate >= siths[i].poder) {
      let nombreHolocron = prompt(
        "Ganaste la batalla, elige un nombre para tu holoron sith"
      );
      holocrons.push({
        nombre: nombreHolocron,
        poder: Math.round(Math.random() * 10 + 1),
      });
    } else {
      alert(`${nombrePersonaje} perdio la batalla contra ${siths[i].nombre}`);
    }
  }
}

function mostrarHolocrons() {
  const nombresHolocrons = holocrons.map((holocron) => holocron.nombre);
  const stringNombres = nombresHolocrons.join(", ");
  alert("Nombres de los Holocrons: " + stringNombres);
}

function buscarPoderHolocron() {
  let encontrado = false;
  while (encontrado == false) {
    alert(
      "Puede introducir el nombre de algun holocron para conocer cuan poderoso es del 1 al 10"
    );
    const holocronABuscar = prompt(
      "Ingrese el nombre del holocron que desea buscar"
    );
    const holocronEncontrado = holocrons.find(
      (holocron) => holocron.nombre === holocronABuscar
    );
    if (holocronEncontrado) {
      alert(
        `Se encontró al Holocron: ${holocronEncontrado.nombre}, Poder: ${holocronEncontrado.poder}`
      );
      encontrado = true;
    } else {
      alert(`No se encontró ningún Holocron con el nombre: ${holocronABuscar}`);
    }
  }
}

function poderTotalHolocrons() {
  const poderTotal = holocrons.reduce((acumulador, holocron) => {
    return acumulador + holocron.poder;
  }, 0);
  alert(`El poder total de tus holocrons es ${poderTotal}`);
}

explicacion();
batallas();
mostrarHolocrons();
buscarPoderHolocron();
poderTotalHolocrons();
alert("Final del juego, gracias por jugar!")
