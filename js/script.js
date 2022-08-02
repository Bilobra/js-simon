// console di prova
console.log('prova prova pp')

const numList = []
const userList = []

// FUNZIONI

// funzione per generare numeri random 
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = 0
do {
    const randomNumber = generaRandom(1, 50);
    if (numList.includes(randomNumber) == false){
        numList.push(randomNumber)
    }
    i++
  }while (numList.length < 5)

  console.log(numList)
  alert(numList);


  
// far fisualizzare all'utente con un alert 5 numeri
// funzione che genera ARRAY di numeri con parametri specifici
// function getArrayOfRandomInt(length, min, max) {

//     const numeri = []

//     for (let i = 0; i < length; i++) {
//         const n = getRandomIntInclusive(min, max)
//         console.log(n)
//         numeri.push(n)
//     }

//     return numeri
// }

// const arrayDiNumeri = getArrayOfRandomInt(5, 1, 100)
// console.log(arrayDiNumeri)
// alert(arrayDiNumeri)

// let numeriUtente = 0

// do {
//     const numberIns = Math.abs(parseInt(prompt('inserisci i numeri che ti ricordi')));
//     if (numberIns)
// }

// do{const numberIns = parseInt(prompt('inserisci i numeri che ti ricordi'));
// console.log(numberIns)
// }while (isNaN(numeriUtente) || numeriUtente == arrayDiNumeri.length)


