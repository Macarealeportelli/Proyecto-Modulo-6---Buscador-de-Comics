const urlBaseComics = "https://gateway.marvel.com/v1/public/comics";
const urlBasePersonajes = "https://gateway.marvel.com/v1/public/characters";
const apiKey = "0b77a943b27f841e71a40bb1c01f879d";

// let comics = '';
const comicsPorPagina = 20;
let paginaActual = 0;

const creaTarjetasComics = (paginaActual, orden) => {
  fetch(`${urlBaseComics}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      comics = data.data.results

      const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

      seccionTarjetas.innerHTML = ''
      comics.map((comic) => {

        seccionTarjetas.innerHTML += `
      <article>
      <div class="image-comic"><img src="${comic.thumbnail.path}.jpg" alt=""></div>
      <div class="comic-title">${comic.title}</div>
      </article> 
      `;

      })
    })
}

creaTarjetasComics(0, 'title')

const creaTarjetasPersonajes = (paginaActual, orden) => {
  fetch(`${urlBasePersonajes}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${orden}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      personajes = data.data.results

      const seccionTarjetas = document.querySelector(".contenedor-tarjetas");

      seccionTarjetas.innerHTML = ''
      personajes.map((personaje) => {

        seccionTarjetas.innerHTML += `
        <article>
        <div class="image-character"><img src="${personaje.thumbnail.path}.jpg" alt=""></div>
        <div class="character-name">${personaje.name}</div>
        </article> 
        `;

      })
    })
}

// creaTarjetasPersonajes(urlBase, 'name')







const seleccionTipo = document.getElementById('buscar-por-tipo')
// console.log(seleccionTipo)
const seleccionOrden = document.getElementById('buscar-por-orden')
// console.log(seleccionOrden)

// console.log(seleccionTipo.value)
// console.log(seleccionOrden.value)

const botonBuscar = document.getElementById('boton-buscar')
// console.log(botonBuscar)

const ordenarComicsPor = () => {
  if (seleccionOrden.value === "z-a") {
    creaTarjetasComics(paginaActual, "-title")
    console.log('soy comics estoy de la z a la a')
  }
  else {
    creaTarjetasComics(paginaActual, "title")
    console.log('soy comics estoy de la a a la z')

  }
}

// ordenarComicsPor()

const ordenarPersonajesPor = () => {
  if (seleccionOrden.value === "z-a") {
    creaTarjetasPersonajes(paginaActual, "-name")
    console.log('soy personaje estoy de la z a la a')
  }
  else {
    creaTarjetasPersonajes(paginaActual, "name")
    console.log('soy personaje estoy de la a a la z')
  }
}

botonBuscar.onclick = () => {
  console.log('me hicieron click')
  if (seleccionTipo.value === "comics") {
    // creaTarjetasComics(paginaActual, "title")
    ordenarComicsPor()
  }
  if (seleccionTipo.value === "personajes") {
    // creaTarjetasPersonajes(paginaActual, "name")
    ordenarPersonajesPor()
  }
}

