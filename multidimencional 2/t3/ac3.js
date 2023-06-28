/*a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach

let arregloBidimensional = [
    [2, 8, 9],
    [30, 71, 77],
    [11, 990, 41]
];

arregloBidimensional.forEach((subarreglo) => {
    subarreglo.forEach((numero) => {
        if (numero % 2 !== 0) {
            console.log(numero);
        }
    });
});*/



/*b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.
*/
let arregloBidimensional = [
    [2, 8, 9],
    [30, 71, 77],
    [11, 990, 41]
];
let suma = 0;

for (let i = 0; i < arregloBidimensional.length; i++) {
    for (let j = 0; j < arregloBidimensional[i].length; j++) {
        suma += arregloBidimensional[i][j];
    }
}

console.log(suma);