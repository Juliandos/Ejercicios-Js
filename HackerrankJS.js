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
const a = [2, 4];
const b = [16, 32, 96];
const s = [2,2,1,3,2];
const m =2;
const de =4;
const n15 = 6;
const k15 = 3;
const ar15 = [1, 3, 2, 6, 1, 2];
const arr1 = [1, 4, 4, 4, 5, 3];


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
d.getElementById("countApplesAndOranges").addEventListener("click", () =>
  countApplesAndOranges(7,10,4,12,apples, oranges)
);
d.getElementById("getTotalX").addEventListener("click", () =>
  getTotalX(a, b)
);
d.getElementById("breakingRecords").addEventListener("click", () =>
  breakingRecords(scores)
);
d.getElementById("birthday").addEventListener("click", () =>
  birthday(s, de, m)
);
d.getElementById("divisibleSumPairs").addEventListener("click", () =>
  divisibleSumPairs(n15, k15, ar15)
);
d.getElementById("migratoryBirds").addEventListener("click", () =>
  migratoryBirds(arr1)
);
d.getElementById("dayOfProgrammer").addEventListener("click", () =>
  dayOfProgrammer(2017)
);
d.getElementById("bonAppetit").addEventListener("click", () =>
  bonAppetit([3, 10, 2, 9], 1, 7)
);
d.getElementById("sockMerchant").addEventListener("click", () =>
  sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
);
d.getElementById("pageCount").addEventListener("click", () =>
  pageCount(5, 4)
);
d.getElementById("countingValleys").addEventListener("click", () =>
  countingValleys(8, "UDDDUDUU")
);
d.getElementById("getMoneySpent").addEventListener("click", () =>
  getMoneySpent([3, 1], [5, 2, 8], 10)
);
d.getElementById("catAndMouse").addEventListener("click", () =>
  catAndMouse(1, 3, 2)
);
d.getElementById("pickingNumbers").addEventListener("click", () =>
  pickingNumbers([1,1,2,2,4,4,5,5])
);
d.getElementById("minning").addEventListener("click", () =>
  mining(11, [
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
])
);
d.getElementById("nonDivisibleSubset").addEventListener("click", () =>
  nonDivisibleSubset(5, [770528134, 663501748, 384261537, 800309024, 103668401, 538539662, 385488901, 101262949, 557792122, 46058493])
);
d.getElementById("repeatedString").addEventListener("click", () =>
  repeatedString("aab", 882787)
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

// 11) Función para calcular la cantidad de objetos en un rangop
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

// 12) Función En medio de dos grupos
function getTotalX(a, b) {
  // Función para calcular el máximo común divisor (GCD)
  function gcd(x, y) {
      while (y !== 0) {
          let temp = y;
          y = x % y;
          x = temp;
      }
      return x;
  }

  // Función para calcular el mínimo común múltiplo (LCM)
  function lcm(x, y) {
      return (x * y) / gcd(x, y);
  }

  // Calcular el LCM del array `a`
  let lcmA = a[0];
  for (let i = 1; i < a.length; i++) {
      lcmA = lcm(lcmA, a[i]);
  }

  // Calcular el GCD del array `b`
  let gcdB = b[0];
  for (let i = 1; i < b.length; i++) {
      gcdB = gcd(gcdB, b[i]);
  }

  // Contar los números entre LCM(a) y GCD(b)
  let count = 0;
  for (let i = lcmA; i <= gcdB; i += lcmA) {
      if (gcdB % i === 0) {
          count++;
      }
  }

  console.log(count);
  
}

// 13) Función para calcular la racha de victorias y derrotas
function breakingRecords(scores) {
  let minScore = scores[0];
  let maxScore = scores[0];
  let minBreaks = 0;
  let maxBreaks = 0;

  for (let i = 1; i < scores.length; i++) {
      if (scores[i] > maxScore) {
          maxScore = scores[i];
          maxBreaks++;
      } else if (scores[i] < minScore) {
          minScore = scores[i];
          minBreaks++;
      }
  }

  return [maxBreaks, minBreaks];
}

// 14) Función para calcular la condición de suma de un array
function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
      let segmentSum = s.slice(i, i + m).reduce((a, b) => a + b, 0);

      if (segmentSum === d) {
          count++;
      }
  }

  console.log(count);
  
}

// 15) Función para calcular la cantidad de pares de numeros que suman un divisor de un número dado
function divisibleSumPairs(n15, k15, ar15) {
  let count = 0;

  for (let i = 0; i < n15 - 1; i++) {
      for (let j = i + 1; j < n15; j++) {
          if ((ar15[i] + ar15[j]) % k15 === 0) {
              count++;
          }
      }
  }

  console.log(count);
  
}

// 16) Función para calcular la cantidad de repite un número en un array
function migratoryBirds(arr) {
  // Crear un objeto para contar la frecuencia de cada tipo de pájaro
  const birdCount = {};

  // Contar la cantidad de cada tipo de pájaro
  for (let i = 0; i < arr.length; i++) {
      const bird = arr[i];
      if (!birdCount[bird]) {
          birdCount[bird] = 1;
      } else {
          birdCount[bird]++;
      }
  }

  // Variables para rastrear el id del pájaro con mayor frecuencia
  let maxCount = 0;
  let resultId = Infinity;

  // Encontrar el tipo de pájaro con la mayor frecuencia
  for (let bird in birdCount) {
      const count = birdCount[bird];
      const birdId = parseInt(bird);

      if (count > maxCount || (count === maxCount && birdId < resultId)) {
          maxCount = count;
          resultId = birdId;
      }
  }

  console.log(resultId);
  
}

// 17) Funciónpara cambiar la fecha del dia del programador entre calendario gregoriano y juliano
function dayOfProgrammer(year) {
  if (year === 1918) {
      return "26.09.1918";
  }

  const isLeapYear = (year < 1918 && year % 4 === 0) || // Calendario Juliano
                     (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))); // Calendario Gregoriano

  const day = isLeapYear ? 12 : 13;

  // Formatear la fecha en dd.mm.yyyy
  console.log(`${day.toString().padStart(2, '0')}.09.${year}`);
}

// 18) Función para dividir una cuenta a la mitad
function bonAppetit(bill, k, b) {
  const totalShared = bill.reduce((sum, cost, index) => index !== k ? sum + cost : sum, 0);
  const annaShare = totalShared / 2; // La parte justa de Anna

  if (b === annaShare) {
      console.log("Bon Appetit");
  } else {
      console.log(b - annaShare); // Monto que Brian debe devolverle a Anna
  }
}

// 19) Función para encontrar los pares de medias
function sockMerchant(n, ar) {
  const sockCount = {};
  let pairs = 0;

  // Contar los calcetines por color
  for (let i = 0; i < n; i++) {
      const sock = ar[i];
      if (!sockCount[sock]) {
          sockCount[sock] = 1;
      } else {
          sockCount[sock]++;
      }
  }

  // Contar los pares
  for (let color in sockCount) {
      pairs += Math.floor(sockCount[color] / 2);
  }

  console.log(pairs);
}

// 20) Función para llegar a una página desde el frente o desde atras
function pageCount(n, p) {
  // Calculate pages to turn from the front
  const fromFront = Math.floor(p / 2);
  
  // Calculate pages to turn from the back
  const fromBack = Math.floor((n / 2) - Math.floor(p / 2));
  
  // Return the minimum of the two
  console.log(Math.min(fromFront, fromBack));
}

// 21) calcular valles que recorre un caminador
function countingValleys(steps, path) {
  let seaLevel = 0; // Represents current altitude
  let valleys = 0;  // Count of valleys
  let inValley = false; // Track if the hiker is currently in a valley

  for (let i = 0; i < steps; i++) {
      if (path[i] === 'U') {
          seaLevel++; // Step up
      } else if (path[i] === 'D') {
          seaLevel--; // Step down
      }

      // Check if the hiker has entered a valley
      if (seaLevel < 0 && !inValley) {
          inValley = true;
      }

      // Check if the hiker has exited a valley
      if (seaLevel === 0 && inValley) {
          valleys++;
          inValley = false; // Reset valley status
      }
  }

  console.log(valleys);
}

// 22) Comprar lo mejor con cierta cantidad de dinero
function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1; // Initialize to -1 for cases where no combination is within budget

  for (let keyboard of keyboards) {
      for (let drive of drives) {
          const totalCost = keyboard + drive;

          if (totalCost <= b && totalCost > maxSpent) {
              maxSpent = totalCost;
          }
      }
  }

  console.log(maxSpent);
}

// 23) Quien llega primero
function catAndMouse(x, y, z) {
  const distanceA = Math.abs(z - x); // Distance from Cat A to the mouse
  const distanceB = Math.abs(z - y); // Distance from Cat B to the mouse

  if (distanceA < distanceB) {
      console.log("Cat A");
  } else if (distanceB < distanceA) {
      console.log("Cat B");
  } else {
      console.log("Mouse C");
  }
}


function pickingNumbers(a) {
  const frequency = Array(101).fill(0);

  // Count the frequency of each number
  for (let num of a) {
      frequency[num]++;
  }
  console.log(frequency);
  
  let maxLength = 0;

  // Check the sum of frequencies for consecutive numbers
  for (let i = 1; i < frequency.length; i++) {
      maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
  }

  console.log(maxLength);
}
// Funciones Medio -----------------------------------------------------------------------------------------------------------------------

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

// Función para calcular el costo de minar
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
  console.log(dp[n][k]);
  
  return dp[n][k];
}

// Función para saber que sumas de dos números no son divisibles entre k, máximos números posibles
function nonDivisibleSubset(k1, s1) {
    let remainders = new Array(k1).fill(0);
    for (let num of s1) {
        remainders[num % k1]++;
    }
    
    let result = 0;
    if (remainders[0] > 0) {
        result += 1;
    }
    
    for (let i = 1; i <= k1 / 2; i++) {
      if (i !== k1 - i) {
          result += Math.max(remainders[i], remainders[k1 - i]);
        } else {
          result += 1;
        }
        
    }
    console.log(result);
    return result;
}

// Función para encontrar la cantidad de veces que se repite la letra "a" en una subcadena repetida muchas veces
function repeatedString(s, n) {
    const countA = (str) => str.split('a').length - 1; // Cuenta las 'a' en una cadena

    const aInS = countA(s);
    const repeticionesCompletas = Math.floor(n / s.length);
    const caracteresRestantes = n % s.length;
    const aEnResto = countA(s.substring(0, caracteresRestantes));
    console.log(aInS * repeticionesCompletas + aEnResto);
    
    return aInS * repeticionesCompletas + aEnResto;
}

const c = [
  0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
  0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
  1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0
];
function jumpingOnClouds(c) {
  let saltos =0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i+1] === 0) {
        saltos++;
        i++;
      }
    }else{
      saltos++;
    }
  }

  return saltos;
}

const result3 = jumpingOnClouds(c);
console.log(result3);