// Variables ----------------------------------------------------------------
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
  [-2, 0, 5, 4, 4, 4, -3, 3, 0],
];
let puntajeA = [1, 2, 3];
let puntajeB = [3, 2, 1];
const arreglo = [
  1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461,
  1002575010, 1007514041, 1007548981, 1004402249,
];
const arregloplus = [-4, 3, -9, 0, 4, 1];
const hora = "12:45:54PM";
const trainback = "6 9\n100 5\n120 10\n300 2\n500 3\n500 1\n800 8";
const grades = [73, 67, 38, 33];
const apples = [2, 3, -4, 4];
const oranges = [3, -2, -4, 0];

// Selección ejercicios ----------------------------------------------------------------

// Seleccionamos el título y el div
const toggleButtonFac = document.getElementById("toggleButtonFac");
const contentDivFac = document.getElementById("contentDivFac");
const toggleButtonMed = document.getElementById("toggleButtonMed");
const contentDivMed = document.getElementById("contentDivMed");

// Añadimos un evento de clic al título
toggleButtonFac.addEventListener("click", () => {
  // Alternamos la visibilidad del div
  if (contentDivFac.style.display === "none") {
    contentDivFac.style.display = "block";
  } else {
    contentDivFac.style.display = "none";
  }
});

toggleButtonMed.addEventListener("click", () => {
  if (contentDivMed.style.display === "none") {
    contentDivMed.style.display = "block";
  } else {
    contentDivMed.style.display = "none";
  }
});

// Eventos ----------------------------------------------------------------

d.getElementById("simpleArraySum").addEventListener("click", () =>
  simpleArraySum(arr)
);
d.getElementById("diferenciaDiagonal").addEventListener("click", () =>
  diferenciaDiagonal(matriz)
);
d.getElementById("compareTripletes").addEventListener("click", () =>
  compareTripletes(puntajeA, puntajeB)
);
d.getElementById("aVeryBigSum").addEventListener("click", () =>
  aVeryBigSum(arreglo)
);
d.getElementById("plusMinus").addEventListener("click", () =>
  plusMinus(arregloplus)
);
d.getElementById("staircase").addEventListener("click", () => staircase(5));
d.getElementById("miniMaxSum").addEventListener("click", () =>
  miniMaxSum(arregloplus)
);
d.getElementById("birthdayCakeCandles").addEventListener("click", () =>
  birthdayCakeCandles(arregloplus)
);
d.getElementById("timeConversion").addEventListener("click", () =>
  timeConversion(hora)
);
d.getElementById("processData").addEventListener("click", () =>
  processData(trainback)
);
d.getElementById("gradingStudents").addEventListener("click", () =>
  gradingStudents(grades)
);
d.getElementById("gradingStudents").addEventListener("click", () =>
  gradingStudents(grades)
);
d.getElementById("gradingStudents").addEventListener("click", () =>
  countApplesAndOranges(7,10,4,12,apples, oranges)
);

// Funciones fáciles ----------------------------------------------------------------

// 1) Function to calculate the sum of an array
function simpleArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(arr, sum);
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
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      puntajes[0]++;
    } else if (a[i] < b[i]) {
      puntajes[1]++;
    }
  }
  console.log(puntajes);
}

//4))) Sumar una cadena de array
function aVeryBigSum(ar) {
  let suma = 0;

  for (let i = 0; i < ar.length; i++) {
    suma = suma + ar[i];
  }
  return suma;
}

//5) Función para calcular la proporción de valores positivos, negativos y ceros en un array
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let cero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      cero++;
    }
  }
  console.log(
    `${positive / arr.length} ${negative / arr.length} ${cero / arr.length}`
  );
}

// 6) Función para dibujar una pirámide de tamaño n
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

// 7) Función para max y min de un array de 5 suma de 4 numeros
function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log(minSum + " " + maxSum);
}

// 8) Función para determinar la cantidad de numeros altos se encuentran
function birthdayCakeCandles(candles) {
  let max = candles[0];
  let highest = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }

    if (i == candles.length - 1) {
      candles.map((candle) => {
        if (candle == max) {
          highest++;
        }
      });
    }
  }
  console.log(highest);
}

// 9) Función para convertir una hora de 24 horas a 12 horas
function timeConversion(s) {
  let f24 = s.split(":");
  let pmam = f24[2].slice(-2);
  let minutos = f24[1];
  let segundos = f24[2];
  let f12 = "";

  if (pmam === "PM" || pmam === "pm") {
    let horas = parseInt(f24[0]);
    if (horas === 12) {
      horas = 12;
    } else {
      horas = parseInt(f24[0]) + 12;
    }
    f12 = horas + ":" + minutos + ":" + segundos;
    f12 = f12.slice(0, -2);
  }

  if (pmam === "AM" || pmam === "am") {
    let horas = f24[0];
    if (horas === "12") {
      horas = "00";
    }
    f12 = horas + ":" + minutos + ":" + segundos;
    f12 = f12.slice(0, -2);
  }

  console.log(f12);
}

// 10) Función para redondear las notas de estudiantes
function gradingStudents(grades) {
  let roundedGrades = {};
  let i = 0 ;
  grades.map(grade => {
    i++; 
    if (grade < 38) {
        roundedGrades[i] = grade; 
    }
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    if (nextMultipleOf5 - grade < 3) {
      roundedGrades[i] = nextMultipleOf5;  
    }else{
      roundedGrades[i] = nextMultipleOf5; 
    }
  });
  console.log(roundedGrades);
}

// 11) Función para calcular la cantidad de objetos en un rango
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  apples.forEach(apple => {
      const landingPosition = a + apple; 
      if (landingPosition >= s && landingPosition <= t) {
          applesOnHouse++;
      }
  });

  oranges.forEach(orange => {
      const landingPosition = b + orange; 
      if (landingPosition >= s && landingPosition <= t) {
          orangesOnHouse++;
      }
  });

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}


// Funciones Medio ----------------------------------------------------------------

// function processData(input) {
//   let entradas = input.split('\n');
//   let datos = entradas[0].split(' ');
//   let cCompradores = parseInt(datos[0]);
//   let cCantidadOro = parseInt(datos[1]);

//   let gramos = [];
//   let precios = [];

//   // Extraemos los gramos y precios de cada pasajero
//   for (let i = 1; i < entradas.length; i++) {
//     let datosPasajero = entradas[i].split(' ').map(Number);
//     precios.push(datosPasajero[0]);
//     gramos.push(datosPasajero[1]);
//   }

//   // Ahora vamos a encontrar las mejores combinaciones
//   let maxGanancia = -1;
//   let gramosRestantes = cCantidadOro;

//   for (let i = 0; i < cCompradores; i++) {
//     let ganancia = 0;
//     let gramosVendidos = 0;

//     // Combinamos los compradores, uno por uno, asegurándonos de no exceder la cantidad de oro
//     for (let j = i; j < cCompradores && gramosVendidos < gramosRestantes; j++) {
//       if (gramosVendidos + gramos[j] <= gramosRestantes) {
//         ganancia += precios[j];
//         gramosVendidos += gramos[j];
//       }
//     }

//     // Si encontramos una ganancia mayor, la actualizamos
//     if (ganancia > maxGanancia) {
//       maxGanancia = ganancia;
//     }
//   }

//   // Imprimimos el resultado
//   if (maxGanancia > -1) {
//     console.log(maxGanancia);
//   } else {
//     console.log("Got caught!");
//   }
// }

// 1) Función para calcular el número de pares de parejas que se pueden formar con los elementos de un array
function processData(input) {
  let values = input.trim().split("\n");
  let [n, goldAmount] = values[0].split(" ").map(Number);

  let offers = [];
  for (let i = 1; i <= n; i++) {
    let [price, grams] = values[i].split(" ").map(Number);
    offers.push({ price, grams });
  }

  let dp = new Array(goldAmount + 1).fill(-Infinity);
  dp[0] = 0; // No gold, no profit
  
  for (let i = 0; i < n; i++) {
    let { price, grams } = offers[i];
    
    for (let j = goldAmount; j >= grams; j--) {
      dp[j] = Math.max(dp[j], dp[j - grams] + price);
    }
  }

  let result = dp[goldAmount];
  if (result === -Infinity) {
    console.log("Got caught!");
  } else {
    console.log(result);
  }
}

//
function mining(k, mines) {
  const n = mines.length;

  const cost = Array.from({ length: n }, () => Array(n).fill(0));

  for (let start = 0; start < n; start++) {
      for (let end = start; end < n; end++) {
          let center = Math.floor((start + end) / 2);
          let centerLocation = mines[center][0];
          for (let i = start; i <= end; i++) {
              cost[start][end] += Math.abs(mines[i][0] - centerLocation) * mines[i][1];
          }
      }
  }

  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let j = 1; j <= k; j++) {
      for (let i = 1; i <= n; i++) {
          for (let m = 0; m < i; m++) {
              dp[i][j] = Math.min(dp[i][j], dp[m][j - 1] + cost[m][i - 1]);
          }
      }
  }

  return dp[n][k];
}

// Example usage with the provided test case
const k = 11;
const mines = [
  [8, 336],
  [10, 393],
  [15, 410],
  [17, 466],
  [24, 514],
  [32, 527],
  [42, 529],
  [43, 644],
  [55, 767],
  [77, 778],
  [82, 736],
  [85, 647],
  [87, 608],
  [93, 599],
  [94, 531]
];

const result = mining(k, mines);
console.log(result);