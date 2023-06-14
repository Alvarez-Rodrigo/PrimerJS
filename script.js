/*
const usuario1 = new Usuario (1, "Ramon Remes", 7);
const usuario2 = new Usuario (2, "Raquel Tere", 9);
const usuario3 = new Usuario (3, "Pepe pepines", 6);
const usuario4 = new Usuario (4, "Sol Solias", 10);
const usuario5 = new Usuario (5, "Nestor Neres", 10);

const USUARIOS = [usuario1, usuario2, usuario3, usuario4, usuario5];
    
    
*/

const usuarios = [
    {nombre: 'Ramon remes', edad: 7},
    {nombre: 'Raquel Tere', edad: 8},
    {nombre: 'Pepe Pepines', edad: 10},
    {nombre: 'Sol Solari', edad: 18},
    {nombre: 'Nestor Nemes', edad: 7},
    {nombre: 'Tata Martino', edad: 9},
    {nombre: 'Lobelto Petinato', edad: 6},
    {nombre: 'Shusi Tamara', edad: 10}
];

const inicio = document.getElementById('inicio');
const registrar = document.getElementById('formulario');
const usuariosContainer = document.getElementById('usuarios');
const promedioEdadesContainer = document.getElementById('promedioEdades');


const darInicio = () => {
    const botonInicio = document.createElement('button');
    botonInicio.textContent = 'Iniciar';
    botonInicio.addEventListener('click', () => {
        agregarBoxes(usuarios);
        botonInicio.disabled = true;/*Hace que no se pueda pulsar mas de una vez el inicio*/ });
    inicio.appendChild(botonInicio);
};

const registrarse = () => {//Crea el boton de registro.
    const botonRegistro = document.createElement('button');
    botonRegistro.textContent = 'Registrarse';
    botonRegistro.addEventListener('click', () => {
        mostrarFormulario();
        botonRegistro.disabled = true;
    });
    inicio.appendChild(botonRegistro);
};

const mostrarFormulario = () => {
    const formulario = document.createElement('form');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío del formulario
        const nombre = event.target.nombre.value;
        const edad = parseInt(event.target.edad.value);

        if (nombre && edad) {
            const nuevoUsuario = { nombre, edad };
            usuarios.push(nuevoUsuario);
            const boxNuevoUsuario = creadorBoxes(nuevoUsuario);
            usuariosContainer.appendChild(boxNuevoUsuario);
            event.target.reset(); // Limpiar el formulario
            calcularPromedioEdades();

        }
    });

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.name = 'nombre';
    inputNombre.placeholder = 'Nombre';

    const inputEdad = document.createElement('input');
    inputEdad.type = 'number';
    inputEdad.name = 'edad';
    inputEdad.placeholder = 'Edad';

    const botonRegistrar = document.createElement('button');
    botonRegistrar.textContent = 'Registrar';
    botonRegistrar.addEventListener('click', () => {
        const nombre = inputNombre.value;
        const edad = parseInt(inputEdad.value);

        if (nombre && edad) {
            const nuevoUsuario = { nombre, edad };
            usuarios.push(nuevoUsuario);
            const boxNuevoUsuario = creadorBoxes(nuevoUsuario);
            usuariosContainer.appendChild(boxNuevoUsuario);
            formulario.reset(); // Limpiar el formulario
            calcularPromedioEdades();
            guardarUsuarios(); // Guardar los usuarios en el localStorage
        }
    });

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputEdad);
    formulario.appendChild(botonRegistrar);

    registrar.appendChild(formulario);
    
};

const creadorBoxes = (usuario) => {
    const box = document.createElement('div'); //crea la caja
    box.classList.add('box');

    const nombre = document.createElement('p');//Escribe el nombre
    nombre.textContent = `Nombre: ${usuario.nombre}`;

    const edad = document.createElement('p');//Escribe la edad
    edad.textContent = `Edad: ${usuario.edad}`;

    box.appendChild(nombre);
    box.appendChild(edad);
    
    return box;
};

const agregarBoxes = (usuarios) => {
    const boxes = usuarios.map((usuario) => {
        return creadorBoxes(usuario);
    });
    inicio.append(...boxes);
    calcularPromedioEdades();
    
};

const calcularPromedioEdades = () => {
    const edades = usuarios.map((usuario) => usuario.edad);
    const totalEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
    const promedioEdades = totalEdades / usuarios.length;

    promedioEdadesContainer.textContent = `Promedio de edades: ${promedioEdades.toFixed(2)}`;
};

const guardarUsuarios = () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  };
  
function obtenerUsuariosGuardados() {
    const usuariosJSON = localStorage.getItem('usuarios');
    return JSON.parse(usuariosJSON);
};


/*const iniciarAplicacion = () => {
    const usuariosGuardados = obtenerUsuariosGuardados();
    if (usuariosGuardados) {
        usuarios.push(...usuariosGuardados); // Agregar los usuarios guardados al array
        agregarBoxes(usuariosGuardados); // Mostrar los usuarios guardados en los boxes
        calcularPromedioEdades(); // Calcular el promedio de edades
    }
};*/

darInicio();
//iniciarAplicacion();
registrarse();
