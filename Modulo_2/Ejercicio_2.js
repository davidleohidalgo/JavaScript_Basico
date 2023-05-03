/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/


const nombre = "David";
const age = 37;
const dev = true;
const birth = new Date("february 22 1986");

//OBJETO
const book = {
    titulo: "La Meta ",
    autor: "Eliyahu M. Goldratt",
    fecha: new Date("august 24 2010"),
    url: "https://www.amazon.es/Meta-Proceso-Mejora-Continua/dp/847978718X",
}

//LISTA
const lista2 = [nombre, age, dev, birth, book];
console.log (lista2);