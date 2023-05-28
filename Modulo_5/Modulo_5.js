//Crea un archivo JS que contenga las siguientes líneas

//Una variable que contenga tu altura en centímetros (entero)
let alturacm =  180
console.log(typeof alturacm)
//Una variable que contenga tu altura en metros (número de coma flotante)
let alturamts = 1.80
console.log (typeof alturamts)
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesokg = 105.63
//Una variable que contenga tu altura en metros redondeada hacia arriba
let metrosUp = alturamts
console.log(metrosUp.toFixed(0))
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let kilogramosDown = pesokg
console.log(kilogramosDown.toPrecision(4))
//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(sonIguales)
