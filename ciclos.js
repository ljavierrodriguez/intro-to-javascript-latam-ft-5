// Ciclos o Bucles
/* 
for loop

Sintaxis:

for(iterador; condicion; incremento){
    codigo a ejecutar
}

*/
//        1        2      4
/* for(let i = 1; i <= 10; i++){ // i = i + 1
    console.log(i) // 3  // 1 2 3 4 5 6 7 8 9 10
} */

let nombres = ["Hugo", "Paco", "Luis", "Donald"];

/*for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
} */

/* for(let i = 100; i >= 1; i--){
    console.log(i)
} */

/* 
while loop 

Sintaxis:

while(condicion){
    codigo
}

*/
/* let num = 1;
while(num <= 10){
    console.log(num)
    num++
    // num = num + 1
    // num+=1
} */

/* num = 10;
while(num >= 1){
    console.log(num)
    num--
    // num = num - 1
    // num -= 1
} */

/* let indice = 0;
while(indice < nombres.length){
    console.log(nombres[indice])
    indice++
} */

let i = 1;
while(i <= 10){
    let j = 1;
    while(j <= 10){
        console.log(`${i} x ${j} = ${(i*j)}`)
        j++;
    }
    i++
}

/* 
for...in loop

Sintaxis:

for(let indice in coleccion){
    codigo
}

*/

for(let indice in nombres){
    console.log(nombres[indice])
}


let persona = {
    nombre: 'John',
    apellido: 'Doe'
}

for(let key in persona){
    console.log(`${key}: ${persona[key]}`)
}


/* 
for...of loop

Sintaxis:

for(let valor of coleccion){
    codigo a ejecutar
}

*/

for(let nombre in nombres){
    console.log(nombre)
}



/* Funciones de Array */
let frutas = ["Pera", "Manzana", "Durazno"]
frutas.forEach((elemento, indice,  arreglo) => console.log(`He encontrado el valor ${elemento} en la posicion ${indice} en ${arreglo}`))

let resultado = frutas.filter((valor) => {
    return valor.includes('z')
})

console.log(resultado)