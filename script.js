alert("Bienvenido a tus JuegosProtatiles! ")

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





