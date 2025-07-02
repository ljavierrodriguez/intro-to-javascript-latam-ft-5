// Data Types
/*
String
Number
Boolean
Undefined

Object
    Array
    Null
    Literal Object

*/
/* 
Definir Variables: var, let, const
*/
let nombre = "Pedro";
let apellido = 'Rojas';
let nombreCompleto = `Pedro Rojas`;
const iva = 19.40;
let genero = null;
let direccion = ""

let peso = 10;
let temp = -8;
let temp2 = -8.4;

let soltero = true;
let abierto = false;

let variable; // undefined

let valores = ["", 12, false, null];
let nombres = ["Hugo", "Paco", "Luis"];
let estudiates = ["Hugo", "Luis", "Rojas", "Perez", "Maria", "Suarez"]

let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: null,
    notas: [
        12,
        17
    ],
    familia: [
        { nombre: 'Hugo', apellido: 'Rojas' },
        { nombre: 'Luis', apellido: 'Suarez' },
        { nombre: 'Maria', apellido: 'Perez' },
    ]
}

let estudiates2 = [
    { nombre: 'Hugo', apellido: 'Rojas' },
    { nombre: 'Luis', apellido: 'Suarez' },
    { nombre: 'Maria', apellido: 'Perez' },
]

let frutas = [
    "Manzana",
    "Pera",
    "Fresa",
    "Guanabana",
    "Durazno"
]
let notas = [
    10, 18, 28, 32, 6, 39, 40
]

let resultado = estudiates[1]; // Luis
let resultado2 = estudiates2[1]; // { nombre: 'Luis', apellido: 'Suarez'}
resultado2["nombre"]
resultado2.apellido

console.log(frutas[3]) // Guanabana
console.log(persona.apellido) // Doe
console.log(persona.notas[1]) // Doe
console.log(persona.familia[2].nombre)

