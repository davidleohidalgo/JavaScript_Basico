//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let num4 = 10
let resultado2 = 0
while (resultado2 < num4) {
    resultado2++;
    if (resultado2 < 10) {
        num4 = resultado2 * num4
    } else {
        break
    }    
    console.log (resultado2)
    console.log (num4)
}
console.log (num4)