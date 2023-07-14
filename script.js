const inicio = document.getElementById('inicio');
const cartelera = document.getElementById('cartelera');

function traerPeliculas(){
  fetch('./peliculas.json')
  .then(res => res.json())
  .then(data => mostrarPeliculas(data))
}

//Cargamos la información sobre los espectáculos cuando se inicia el DOM
document.addEventListener("DOMContentLoaded", ()=>{
  traerPeliculas()
})

function mostrarPeliculas(PeliculasEnJSON) {
  for (let pelicula of PeliculasEnJSON) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `
     <div class="card cardPropia" style="width: 18rem; font-family: 'Comfortaa'">
     <img src=${pelicula.imagen} class="card-img-top" alt="ImagenDepelicula">
       <div class="card-body micard">
         <h4 class="card-title"><strong>${pelicula.nombre}</strong></h4>
         <p class="card-text"><strong>Precio por entrada: $${pelicula.precio}</strong></p>
         <input type="button" class="btn btn-primary" value="Comprar" onclick="agregarCarrito(${pelicula.id})"> 
       </div>
     </div>`
    contenedor.classList.add("miCard");
    cartelera.append(contenedor)
  }
}


//Formulario para logear
const btnVerWeb = document.querySelector("#botonWeb")
btnVerWeb.onclick = () => {
    document.getElementById("formulario").style.display = "flex";
}
//Datos para guardar el logeo
const datosFormulario = document.getElementById("formulario");
const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.onclick = () => {
  let nombreUser = datosFormulario.querySelector("#nombreUser").value;
  localStorage.setItem("nombreUser", nombreUser);
  let mailUser = datosFormulario.querySelector("#mailUser").value;
  localStorage.setItem("mailUser", mailUser);
  if (nombreUser !== "" && mailUser !== "") {
    Swal.fire(
      '¡Muchas gracias!',
      'Te suscribiste a nuestra Web.',
      'success'
    );
    document.getElementById("formulario").style.display = "none";
  } else {
    Swal.fire(
      'Error en los datos invalido.',
      'Por favor, volve a ingresarlos',
      'error'
    );
  }
};

datosFormulario.onsubmit = (e) => {
  e.preventDefault();
};

//carrito de compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarCarrito = (pelicula) => {
  Toastify({
      text: "¡Agregaste 1 entrada a tu carrito!",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center",
      stopOnFocus: true,
      style: {
        background: "rgb(3, 189, 118)",
      },
      onClick: function(){}
    }).showToast();
  fetch("./peliculas.json")
    .then(res => res.json())
    .then(data => {
      const peliculaEnCarrito = carrito.find((item) => item.id === pelicula);
      if (peliculaEnCarrito) {
        peliculaEnCarrito.cantidad++;
        } else {
          const pelicualNuevo = data.find((item) => item.id === pelicual);
          carrito.push(pelicualNuevo);
        }
  actualizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito))
  });
};

const actualizarCarrito = () => {
  carritoCompra.innerHTML = '';
    carrito.forEach((pelicula) => {
        const contenedor = document.createElement('div');
        contenedor.classList.add('peliculaEnCarrito');
        const mensaje = document.createElement('div');
        mensaje.innerText = `Agregaste ${pelicula.cantidad} entrada/s para ${pelicula.nombre} - Costo total: (${pelicula.precio*pelicula.cantidad})`;
        const cantidad = document.createElement('p');
        cantidad.textContent = pelicula.cantidad;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
          eliminarCarrito(pelicula);
            Toastify({
              text: "Eliminaste 1 entrada de tu carrito",
              duration: 2000,
              newWindow: true,
              close: true,
              gravity: "top", 
              position: "center",
              stopOnFocus: true,
              style: {
                background: "red",
              },
              onClick: function(){}
            }).showToast();
        })
        contenedor.appendChild(mensaje);  
        contenedor.appendChild(cantidad);
        contenedor.appendChild(botonEliminar);
        
      carritoCompra.appendChild(contenedor);
    });
  }

  const eliminarCarrito = (pelicula) => {
    if (pelicula.cantidad > 1) {
      pelicula.cantidad--;
    }else{
        const index = carrito.indexOf(pelicula);
        carrito.splice(index, 1);
    }
    actualizarCarrito()
}

//Para ver el carrito
const verCarrito = document.querySelector("#verCarrito")
verCarrito.onclick = () => {
  carritoCompra.style.display = "flex";
  finalizaCompra.style.display = "flex";
}

const finalizaCompra = document.getElementById("finalizaCompra")
const finalizarCompra = document.createElement("div")
finalizarCompra.innerHTML += `
      <input type="button" value="Finalizar Compra" class="btn btn-primary" onClick="terminarCompra()">
      <input type="button" value="Vaciar Carrito" class="btn btn-primary" onClick="vaciarCarrito()">`
finalizaCompra.append(finalizarCompra)

function terminarCompra(){
  swal.fire({
    title: "¡Muchas gracias!",
    text: `Se realizo el pago`,
    icon: "success",
    timer: 3000
  }) 
  localStorage.removeItem("carrito")
  carrito.pop()
  carritoCompra.innerHTML = ``
  document.getElementById("finalizaCompra").style.display = "none";
  document.getElementById("carritoCompra").style.display = "none";
} 

function vaciarCarrito(){
    while(carrito.length > 0){
        carrito.pop()
    }
    Swal.fire({
      title: '¡Eliminado!',
      text: 'Vaciaste tu carrito.',
      icon: 'success',
    })
    localStorage.removeItem("carrito")
    carritoCompra.innerHTML = ``
  document.getElementById("finalizaCompra").style.display = "none";
  document.getElementById("carritoCompra").style.display = "none";
} 