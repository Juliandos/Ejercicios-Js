const d = document;

let arr = [1, 2, 3, 4];
const matriz = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]
];

let puntajeA = [1, 2, 3];
let puntajeB = [3, 2, 1];

const arreglo = [
    1001458909, 1004570889, 1007019111, 1003302837, 1002514638,
    1006431461, 1002575010, 1007514041, 1007548981, 1004402249
];

d.getElementById('simpleArraySum').addEventListener('click', () => simpleArraySum(arr));
d.getElementById('diferenciaDiagonal').addEventListener('click', () => diferenciaDiagonal(matriz));
d.getElementById('compareTripletes').addEventListener('click', () => compareTripletes(puntajeA, puntajeB));
d.getElementById('aVeryBigSum').addEventListener('click', () => aVeryBigSum(arreglo));

// 1) Function to calculate the sum of an array
function simpleArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(arr,sum);
}

// 2)))  Función para calcular la Diferencia diagonal en una matriz cuadrada
function diferenciaDiagonal(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i]; // Elementos de la diagonal principal
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]; // Elementos de la diagonal secundaria
    }

    console.log(matriz, Math.abs(primaryDiagonal - secondaryDiagonal)); // Diferencia absoluta
}


// 3) Función para calcular los puntos de un trio de puntajes
 // [1, 1]
function compareTripletes(a, b) {
    let puntajes = [0, 0];
    for(let i=0; i<3; i++){
        if(a[i] > b[i]){
            puntajes[0]++;
        }else if(a[i] < b[i]){
            puntajes[1]++;   
        }
    }  
    console.log(puntajes);
}

function aVeryBigSum(ar) {
    // Write your code here
    let suma = 0;
    
    for(let i=0; i < ar.length; i++){
        suma = suma + ar[i];
    }
    return suma;
}