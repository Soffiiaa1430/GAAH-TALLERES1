/*. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a
let a = [2, 6, 9, 0, 5];
let arregloCopia = a;
console.log("copia sin modificar:", arregloCopia);
a.push(6);
console.log("copia modificando el original:", arregloCopia);
a.push(10);
console.log("original modificando la copia:",a);*/
/*5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.*/

let b = ["abc", 4, 88, 99];
let copiaIndependiente = b.slice();
b.push(20);
console.log("copia independiente:", copiaIndependiente);

/*6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e
imprimir*/

let mensaje = ["x", "y", "z", 0, 1, 2, 3];
for (let index = 0; index < mensaje.length; index++) {
    console.log(mensaje[index]);
}

/*7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir
todos sus elementos
aumentados en 1*/
let mensaje2 = [1, 17, 8, 9, 3];

for (let index = 0; index < mensaje2.length; index++) {
    let valor = mensaje2[index]
    console.log(valor + 1);

}
/*8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)*/

let suma = [2, 3, 4, 5, 6];

function resolver(suma) {

    return suma.length

}
console.log(resolver(suma));
/*9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento
del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
*/
function alfabeto() {
    let cadena = ["a", "b", "c", "d", "e", "f", "g"];
    let letra = prompt("ingrese una letra del alfabeto");
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] === letra) {
            return "pertece al arreglo";
        }
    }
    return "no pertenece al arreglo"
}
alfabeto();