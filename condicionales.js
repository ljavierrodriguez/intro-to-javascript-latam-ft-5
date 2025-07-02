// Condicionales
/* 

if (condicion) {
    codigo a ejecutar
}

if (condicion){ // true
    codigo a ejecutar
} else { // false
    codigo a ejecutar
}

if (condicion){
    codigo a ejecutar
} else if (condicion) {
    codigo a ejecutar
} else if (condicion) {
    codigo a ejecutar 
} else {
    codigo a ejecutar
}


switch(valor){
    case valor:
        operaciones;
        break;
    default:
        operaciones;
        break;
}


let resultado = condicion ? verdadero : falso;



*/


let a = 20;
let b = 60;
let c = 10;

if (a > b){ // true
    console.log("A es mayor");
}

if (b < a){ // true
    console.log("B es menor");
}

if (a > b){
    console.log("A es mayor");
} else {
    console.log("B es mayor");
}

/* Operadores Logicos: and => &&, or => || y not => ! */

if (a > b && a > c){
    console.log("A es mayor que B y C");
} else if (b > c){
    console.log("B es mayor que A y C");
} else {
    console.log("C es mayor que A y B")
}

if (a > b || a > c){
    console.log("Verdadero")
} else {
    console.log("Falso")
}


let error = false;

if (a > b){
    error = false;
} else {
    error = true;
}
if (error){
    console.log("Hay un error");
}

if (!(a > b)){
    console.log("Hay un error");
}

let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Operacion 1");
        break;
    case 2:
        console.log("Operacion 2");
        break;
    default:
        console.log("Operacion Invalida");
        break;
}

if(opcion == 1){
    console.log("Operacion 1");
} else if (opcion == 2){
    console.log("Operacion 2");
} else {
    console.log("Operacion Invalida")
}

/* Operador Ternario => ? */
let resultado = a > b ? true : false; 
let mayor = (a > b && a > c) ? "A" : (b > c) ? "B" : "C";