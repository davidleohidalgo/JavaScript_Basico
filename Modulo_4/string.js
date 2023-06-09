//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
//- Otra cadena de texto con tu Apellido
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let nombre = ("David")
let apellido = ("Hidalgo")
let estudiante = (nombre.concat(" " + apellido))
console.log (estudiante)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = (estudiante.toUpperCase())
console.log(estudianteMayus)

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = (estudiante.toLowerCase())
console.log(estudianteMinus)

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numLetras = (estudiante.length)
console.log (numLetras)

//- Una variable que contenga la primera letra del Nombre
let letraUno = (estudiante.charAt(0))
console.log (letraUno)

//- Otra variable que contenga la última letra del Apellido
let letraDos = (estudiante.charAt(12))
console.log(letraDos)

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacio = (estudiante.replace(/ /g, ""))
console.log (sinEspacio)

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreSi = (estudiante.includes(nombre, 0))
console.log (nombreSi)
