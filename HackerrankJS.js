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


d.getElementById('simpleArraySum').addEventListener('click', () => simpleArraySum(arr));
d.getElementById('diferenciaDiagonal').addEventListener('click', () => diferenciaDiagonal(matriz));

// 1) Function to calculate the sum of an array

function simpleArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(arr,sum);
}

function diferenciaDiagonal(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i]; // Elementos de la diagonal principal
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]; // Elementos de la diagonal secundaria
    }

    console.log(matriz, Math.abs(primaryDiagonal - secondaryDiagonal)); // Diferencia absoluta
}