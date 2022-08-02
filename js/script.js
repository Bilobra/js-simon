// console di prova
console.log('prova prova pp')

const numList = []
const promptList = []

// FUNZIONI

// funzione per generare numeri random 
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let i = 0
do {
    const randomNumber = generaRandom(1, 50);
    if (numList.includes(randomNumber) == false) {
        numList.push(randomNumber)
    }
    i++
} while (numList.length < 5)

console.log(numList)
alert(numList);




for (let i = 0; i < 5; i++) {
    numPrompt = parseInt(prompt('inserisci i numeri che ricordi'))
    for (let j = 0; j < numList.length; j++) {
        if (numPrompt == numList[j]) {
            promptList.push(numPrompt)
        }
    }
}

alert('hai indovinato ' + promptList)
console.log(promptList)







