// console di prova
console.log('prova prova pp')
// estrapolo per la stampa nel doc
const messageEl = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const numberPc = document.querySelector('.number-list')
const numberUser = document.querySelector('.number-user')
const timerGame = document.querySelector('.timer')
// creo ARRAY VUOTI
const numList = []
const promptList = []

// FUNZIONI

// funzione per generare numeri random 
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// -------------------------
// utilizzo la funzione numero random :
// se il mio Array non contiene il numero generato , lo pusho 
// creo un messaggio alert
let i = 0
do {
    const randomNumber = generaRandom(1, 50);
    if (numList.includes(randomNumber) == false) {
        numList.push(randomNumber)
    }
    i++
} while (numList.length < 5)

console.log(numList)
alert('prova a memorizzare questi numeri in 60 secondi  ' + numList);

// aggancio la funzione setTime 
// genero un prompt per 5 volte 
// se il numero nel prompt è incluso nell'array del random, lo pusho e lo stampo nel doc 

setTimeout(function() {


    for (let i = 0; i < 5; i++) {
        do {
            numPrompt = parseInt(prompt('inserisci i numeri che ricordi'))
            for (let j = 0; j < numList.length; j++) {
                if (numPrompt == numList[j]) {
                    promptList.push(numPrompt)
                    messageEl.innerHTML = ` hai indovinato : ${promptList} `
                    scoreEl.innerHTML = `hai totalizzato ${promptList.length} punti`

                } else {
                    messageEl.innerHTML = `non hai indovinato nemmeno un numero`

                }
            }

        } while (isNaN(numPrompt))
    }

    // alert('hai indovinato ' + promptList)

    console.log(promptList)

}, 3000)







