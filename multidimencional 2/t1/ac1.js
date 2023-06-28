/*a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for



let arregloBidimensional = [
    ["a", "z", "t"],
    [789, 887, 451],
    [true, false, 0]
];
for (let i = 0; i < arregloBidimensional.length; i++) {
    for (let j = 0; j < arregloBidimensional[i].length; j++) {
        console.log(arregloBidimensional[i][j]);
    }
}*/

/*b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach**/

let arregloBidimensional = [
    ["a", "z", "t"],
    [789, 887, 451],
    [true, false, 0]
];
arregloBidimensional.forEach(i => {
    i.forEach(j => {
        console.log(j);
    })
})