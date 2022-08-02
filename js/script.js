// console di prova
console.log('prova prova pp')


// FUNZIONI

// funzione per generare numeri random 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// far fisualizzare all'utente con un alert 5 numeri
// funzione che genera ARRAY di numeri con parametri specifici
function getArrayOfRandomInt(length, min, max) {

    const numeri = []

    for (let i = 0; i < length; i++) {
        const n = getRandomIntInclusive(min, max)
        console.log(n)
        numeri.push(n)
    }

    return numeri
}

const arrayDiNumeri = getArrayOfRandomInt(5, 1, 100)
console.log(arrayDiNumeri)
alert(arrayDiNumeri)

