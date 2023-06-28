/*a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for*/
let arregloMixto = [
    [
        ["%", 7, true, "#"],
        ["&", 55, false, "="]
    ],
    [
        [false, 0, 99, "?"],
        [true, 1000, "@", "¡"]
    ],
    [
        [44, 55,
            66, 77
        ],
        [1, 2, 3, 4]
    ]
];
for (let i = 0; i < arregloMixto.length; i++) {
    for (let j = 0; j < arregloMixto[i].length; j++) {
        for (let index = 0; index < arregloMixto.length; index++) {

        }
        console.log(arregloMixto[i][j][index]);
    }
}

/*b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
 */


let arregloBidimensional = [
    [
        ["%", 7, true, "#"],
        ["&", 55, false, "="]
    ],
    [
        [false, 0, 99, "?"],
        [true, 1000, "@", "¡"]
    ],
    [
        [44, 55,
            66, 77
        ],
        [1, 2, 3, 4]
    ]
];
arregloBidimensional.forEach(i => {
    i.forEach(j => {
        console.log(j);
    })
})