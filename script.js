/*
    (OK)Usuarios: objetos (nombre, edad, califican)
    (OK)Generar un Array de usuarios.

    Elegir usuario:
        -Poder jugar.
        -Salir del juego.
        -Calificar juegos.
    Eliminar todos los usuario. 
    Salir del usuario.
    Promedio edades de usuarios.
    
*/
alert("Bienvenido a tus JuegosProtatiles! ")
//funcion para validar la edad ingresada.
function validarNumero(numero, mensaje){
    while(isNaN(numero)){
        alert("Ingresaste un valor no acptado. Vuelve a intentar.")
        numero = parseInt(prompt(mensaje));
    } 
    return numero;
}
//Funcion para dar inicio o registrar usuario.
function usuarioRegistrado(parametro){
    if ((parametro == si) || (parametro == sí)){
        iniciar()
    }else{
        registrarse()
    }
}
//funcion para registrar un nuevo usuario.
function registrarse() {
    let nombreUsuario = prompt("Como es tu nombre? ")
    let edadUsuario = parseInt(prompt("Cuantos anios tenes ? "))
    edadUsuario = validarNumero(edadUsuario, mensaje); 
    let num = USUARIOS.length + 1;
    USUARIOS.push(num ,nombreUsuario, edadUsuario);

}

function programa (usuario){
    while(seguir ==0){
        alert("eleji cualquiera de las siguientes opciones:\n 1.iniciar juego \n 2.salier del juego. \n 3.calificar juego. \n 4. salier del usuario.")
        //opciones dentro del programa.
        switch(num){
            case 1:
                alert("Iniciaste el juego.");
            break;
            case 2:
                alert("Saliste del juego.");
            break;
            case 3:
                usuario.calificar();
            break;
            case 4:
                seguir = 1;
            break;
            default: 
                alert("Tenes que eleguir un numero del 1 al 4.");
            break;
        }
    }
}

//Sacamos la edad promedio de los usuarios.
function promedioEdad (){
    let acumulador = 0;

    USUARIOS.forEach(element => {
        acumulador += element.edad
    });

    let promedio = (acumulador/USUARIOS.length);
    console.log(`La edad promedio es de ${promedio} `)
}
let inicio = prompt("Tenes un usuario iniciado? (si/no)").toLocaleLowerCase()

iniciar();

//constrctor de Usuario
class Usuario {
    constructor(id, nombre, edad){
        this.id =id,
        this.nombre =nombre,
        this.edad =edad,
        this.calificar = ""
    }
}

const usuario1 = new Usuario (1, "Ramon Remes", 7);
const usuario2 = new Usuario (2, "Raquel Tere", 9);
const usuario3 = new Usuario (3, "Pepe pepines", 6);
const usuario4 = new Usuario (4, "Sol Solias", 10);
const usuario5 = new Usuario (5, "Nestor Neres", 10);

const USUARIOS = [usuario1, usuario2, usuario3, usuario4, usuario5];


function iniciar (){
    //Muestro a todos los Usuarios ya registrados.
    let mensaje = "Estos son los usuarios registrados, ingrese el IDque corresponda.  \n"
    USUARIOS.forEach(element => {
        mensaje += `${element.id} - ${element.nombre} \n`
    });
    //Analizamos la respuesta.
    let respuesta = parseInt(prompt("Cual es tu usuario?"));
    respuesta = validarNumero(respuesta, mensaje);

    return USUARIOS.find(element => element.id === respuesta);
}

//Eliminar todos los usuarios que ya existen.
function eliminarTodosLosUsuarios (){
    let eliminar = prompt("desea eliminar el usuario elegido ? (si/no)").toLocaleLowerCase()
    if((eliminar==si) || (eliminar==sí)){
        while(USUARIOS.length != 0)
        USUARIOS.pop();
    }
}

//funcion para registrar un nuevo usuario.
/*function registrarse (nombre, edad){
    let nombre = prompt("Coloca tu nombre: ")

    let edad = parseInt(prompt("Coloca te edad: "))
    edad = validarNumero(edad)
    return nombre, edad;
}
//funcion para validar edad del usuario.
function validarNumero(numero){
    while(isNaN(numero)){
        alert("Ingresaste un valor no numerico, reintentalo")
        numero = parseInt(prompt("Coloca un numero: "));
    } 
    return numero;
}
*/

/*
let edadUsuario =parseInt (prompt("La edad es invalidad, por favor colocar una edad mayor a 6 años y menor o igual a 10 años o coloque 99 para salir. "));

let nombreUsuario = prompt("Coloca tu nombre: ")

let edadTotal= 0;
let totalInscriptos = 0;

//Funcion que da el promedio de edades.
const edadPromedio = (edades, participan) => {return (edades / participan).toFixed(2) }

//Funcion para confirmar si la edad esta dentro de lo establecido.
function edadCorrecta (años){
    if((años >= 6) && (años <=10)){
        edadTotal += edadUsuario;
        totalInscriptos++;

    }else{
        alert(`La edad es invalidad, por favor colocar una edad mayor a 6 años y menor o igual a 10 años o coloque 99 para salir.`)
    }
}

//Ciclo while para dejar que los usuarios tengan la posibilidad de repetir varias veces el proceso.
while(edadUsuario!= 99){
    edadCorrecta(edadUsuario);
    edadUsuario = parseInt(prompt("Coloca tu edad para registrarte. La misma debe ser mayor a 6 años. Si desae salir coloque 99"));
    
    nombreUsuario = prompt("Coloca tu nombre: ")
    
}


if(totalInscriptos != 0){
    alert(`Se anotaron ${totalInscriptos} personas con una edad promedio de ${edadPromedio(edadTotal, totalInscriptos)}.`)
}else{
    alert(`No se registraron participantes`)
}
*/



