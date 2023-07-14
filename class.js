class Pelicula {
    constructor(id, nombre, precio, disponible, cantidad, imagen) {
            this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.disponible = disponible,
            this.cantidad = cantidad,
            this.imagen = imagen
    }
    restaEntradasDisponibles(){
        this.disponibles = this.disponibles - 1;
      }
}

const pelicula1 = new Pelicula (0, "batman", 100, 10, 1, "./img/batman.jpg")
const pelicula2 = new Pelicula (1,"superman", 140, 40, 1, "./img/superman.jpg")
const pelicula3 = new Pelicula (2,"pokemon", 100, 5, 1, "./img/pokemon.jpg")
const pelicula4 = new Pelicula (3,"mouster house", 50, 15, 1, "./img/monsterhouse.jpg")
const pelicula5 = new Pelicula (4,"charli y la fabrica de chocolate", 90, 100, 1, "./img/charlie.jpg")

//Array de peliculas
const listaPeliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];


//Guardar array
localStorage.setItem("Peliculas", JSON.stringify(listaPeliculas))