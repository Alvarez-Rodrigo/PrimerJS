const inicio = document.getElementById('inicio');
const cartelera = document.getElementById('cartelera');

function renderizarPeliculas(peliculasMostrar) {
  const divPelicula = document.getElementById('cartelera');

  divPelicula.innerHTML = '';

  peliculasMostrar.forEach((pelicula) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('box');
    cardDiv.innerHTML = `
        <h2>${pelicula.nombre}</h2>
        <img src="./img/${pelicula.imagen}" alt="${pelicula.nombre}">
    `;
    divPelicula.appendChild(cardDiv);
  });
}

function verCartelera() {
  const request = new XMLHttpRequest();
  request.open('GET', 'peliculas.json', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      const peliculas = data.map((peliculaData) => new Pelicula(peliculaData.id, peliculaData.nombre, peliculaData.imagen));
      renderizarPeliculas(peliculas);
    } else {
      console.error('Error al cargar los datos de las películas:', request.status, request.statusText);
    }
  };

  request.onerror = function () {
    console.error('Error al cargar los datos de las películas');
  };

  request.send();
}

document.addEventListener('DOMContentLoaded', () => {
  const verCarteleraButton = document.getElementById('verCartelera');
  verCarteleraButton.addEventListener('click', verCartelera);
});