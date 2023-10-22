const starWarsApi = "https://swapi.dev/api/";
let detenerCarrusel = false;
let i = 1

function buscar() {
  const busqueda = document.querySelector(".inputAPI").value;

  if (busqueda.trim() !== "") {
    const usuarioUrl = `${starWarsApi}people/${busqueda}`;

    fetch(usuarioUrl)
      .then((response) => response.json())
      .then((data) => {
        let tarjeta = document.querySelector(".tarjeta");
        tarjeta.innerHTML = "";
        const nombre = document.createElement("h1");
        const altura = document.createElement("h2");
        const anio = document.createElement("h2");
        const lugar = document.createElement("h2");
        const peliculas = document.createElement("p");
        nombre.textContent = `Nombre: ${data.name}`;
        altura.textContent = `Altura: ${data.height}`;
        anio.textContent = `Año de nacimiento: ${data.birth_year}`;
        obtenerDatosHomeworld(data.homeworld)
          .then((homeworld) => {
            lugar.textContent = `Lugar de nacimiento: ${homeworld.name}`;
          })
          .catch((error) => {
            console.error("Error al obtener datos del lugar:", error);
          });
        obtenerDatosPeliculas(data.films)
          .then((peliculasData) => {
            peliculas.textContent = `Peliculas donde aparece: ${peliculasData.join(
              ", "
            )}`;
          })
          .catch((error) => {
            console.error("Error al obtener datos de películas:", error);
          });
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(altura);
        tarjeta.appendChild(anio);
        tarjeta.appendChild(lugar);
        tarjeta.appendChild(peliculas);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Número de personaje inexistente",
          icon: "error",
          confirmButtonText: "Seguir buscando",
        });
      });
  }
}

function obtenerDatosHomeworld(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((homeworld) => {
      return homeworld;
    });
}

function obtenerDatosPeliculas(urls) {
  const promesas = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .then((pelicula) => pelicula.title)
  );

  return Promise.all(promesas);
}

let formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  buscar();
});

let botonBuscar = document.querySelector(".botonBuscar");
botonBuscar.addEventListener("click", buscar);
