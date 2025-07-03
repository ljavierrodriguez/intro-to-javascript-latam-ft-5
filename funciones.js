/* 
1. Funciones Declaradas

Hoinsting

Sintaxis:

    function nombreFuncion(params...) {
        codigo
    }

*/

function saludar(){
    console.log("Hola como están?");
}

saludar();

/* function sumar(a, b){
    return a + b;
}

let resultado = sumar(5, 5) */ // 10

/* 
2. Funciones Anonimas
*/

const sumar = function(a, b){
    return a + b;
}

const restar = function(a, b){
    return a - b;
}

console.log(sumar(5, 5)) // 10

const operaciones = function(callbackfn, a, b){
    return callbackfn(a, b)
}

console.log(operaciones(sumar, 10, 10)) // 20
console.log(operaciones(restar, 30, 15)) // 15
console.log(operaciones(function(a, b){ return a * b }, 10, 10)) // 100
console.log(operaciones((a, b) => a * b, 10, 10)) // 100

/* 
3. Funcion Flechas
*/

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if(b === 0) return "Error division por cero";
    return a / b;
}

console.log(multiplicar(10, 10)) // 100
console.log(dividir(50, 10)) // 5

/* 
4. Funciones Asincronas (Async/Await)
*/

/* 
Estas funciones se estaran viendo en React
*/


let nombre = "John Doe"
console.log(nombre.substring(0, 5)) // John 

let datos = nombre.split("")
console.log(datos)
console.log(datos[0])
console.log(datos[1])

let notas = [1, 2];
notas.forEach(function(valor){ 
    console.log(valor * 2)
})

console.log(Math.sqrt(100))
console.log(Math.random()) // 0..1 sin incluir el 1
console.log(Math.floor(10.6)) // 10
console.log(Math.ceil(10.6)) // 11
console.log(Math.round(10.5)) // 11