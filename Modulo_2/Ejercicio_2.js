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

//SOLUCION PROPUESTA POR EL PROFESOR

const lista = [
  "Gorka",
  34,
  true,
  new Date(1987, 10, 20),
  { 
      titulo: "El monje que vendió su Ferrari",
      autor: "Robin S. Sharma",
      fecha: new Date(1996, 0, 1),
      url: "https://www.amazon.es/dp/B0062XBS32/"
    },
];
