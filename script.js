/*
    (OK)Usuarios: objetos (nombre, edad, califican)
    (OK)Generar un Array de usuarios.

    Elegir usuario:
        -Poder jugar.
        -Salir del juego.
        -Guardar juegos.
    Salir del usuario.
    
    
*/



alert("Bienvenido a tus JuegosProtatiles! ")
//funcion para validar la edad ingresada.

let mensaje = "Ingresa tu edad";
function validarNumero(numero, mensaje){
    while(isNaN(numero)){
        alert("Ingresaste un valor no acptado. Vuelve a intentar.")
        numero = parseInt(prompt(mensaje));
    } 
    return numero;
}

function iniciar(){
    //Muestro a todos los Usuarios ya registrados.
    let mensaje = "Estos son los usuarios registrados, ingrese el ID que corresponda.  \n"
    USUARIOS.forEach(element => {
        mensaje += `${element.id} - ${element.nombre} \n`
    });
    //Analizamos la respuesta.
    let respuesta = parseInt(prompt( `elegi un usuario` ));
    respuesta = validarNumero(respuesta, mensaje);

    let usuarioElegido= USUARIOS.find(element => element.id === respuesta);

    programa(usuarioElegido);
};

//Funcion para dar inicio o registrar usuario.
function usuarioRegistrado(parametro){
    if ((parametro == "si") || (parametro == "sí")){
        iniciar();
    }else if(parametro =="no"){
        registrarse();
    }else{
        primeraRespuesta = prompt("Tenes un usuario iniciado? (si/no)").toLocaleLowerCase();
        usuarioRegistrado(primeraRespuesta)
    }
};


//funcion para registrar un nuevo usuario.
function registrarse() {
    let nombreUsuario = prompt("Como es tu nombre? ")
    let edadUsuario = parseInt(prompt("Cuantos anios tenes ? "))
    edadUsuario = validarNumero(edadUsuario, mensaje); 
    let num = USUARIOS.length + 1;
    USUARIOS.push(num ,nombreUsuario, edadUsuario);
    alert("usuario registrado.")
    programa();
}

function programa (participante){
    let seguir = true;

    while(seguir){
        //opciones dentro del programa.

        let num = parseInt(prompt("eleji cualquiera de las siguientes opciones:\n 1.iniciar juego \n 2. salier del usuario. \n 3.Guardar juego. \n "));

        switch(num){
            case 1:
                alert("Iniciaste el juego.");
                juego();
            break;
            case 2:
                alert("Saliste del juego.");
                seguir = false;
            break;
            case 3:
                participante.guardado = new Date();
            break;
            default: 
                alert("Tenes que eleguir un numero del 1 al 3.");
            break;
        }
    }
    promedioEdad();
}
function juego(){
    let numeroUser = parseInt(prompt("Decime un numero del 1 al 100"));

    let numeroPC = Math.random() * 100; 

    numeroPC = Math.ceil(numeroPC); //Math.round

    if (numeroUser > numeroPC){
        alert(`Ganaste con ${numeroUser} a mi ${numeroPC} `)        
    }else if (numeroUser == numeroPC){
            alert("Encontraste el empate!!")
    }else{
            alert(`No le pudiste ganar al ${numeroPC} de la PC`)
    };
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

//constrctor de Usuario
class Usuario {
    constructor(id, nombre, edad){
        this.id =id,
        this.nombre =nombre,
        this.edad =edad,
        this.guardado = "";
    }
}

const usuario1 = new Usuario (1, "Ramon Remes", 7);
const usuario2 = new Usuario (2, "Raquel Tere", 9);
const usuario3 = new Usuario (3, "Pepe pepines", 6);
const usuario4 = new Usuario (4, "Sol Solias", 10);
const usuario5 = new Usuario (5, "Nestor Neres", 10);

const USUARIOS = [usuario1, usuario2, usuario3, usuario4, usuario5];

let primeraRespuesta = prompt("Tenes un usuario iniciado? (si/no)").toLocaleLowerCase();

usuarioRegistrado(primeraRespuesta);

