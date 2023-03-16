/* 

    • Palidroma
    Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

    
    • Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
    
    Consigli del giorno:
    - Scriviamo sempre in italiano i passaggi che vogliamo fare
    - Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo   avanti.   
*/

// • Palindroma

// funzione per invertire una parola
function reverseWord(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray; 
}

// "ragionamento per invertire la parola"
// seconda funzione per invertire una parola

// -mi creo una nuova parola che sarà il palindromo della parola scelta dalla funzione
   const string = ""
/*-questa parola deve essere letta al contrario quindi devo cambiare la posizione delle sue lettere 
    es: la posizione "n" deve diventare la posizione 0 e viceversa 
    potrei usare un ciclo for(non while tanto le parole sono sempre "finite")? ma che ci metto dentro? */
    string.length - 1 // sicuramente la lunghezza della parola

    for (let index = string.length - 1; index < 0; index--) {
        string += index   
    }

// -return "parola invertita"
    return string;






// const reversed = reversedWord("parola");
// console.log(reversed);

// chiedo all'utente la parola
const word = prompt("Inserisci una parola da invertire");
console.log(word);
// questa parola la inserisco nella funzione che la inverte
const revertedWord = reverseWord(word);

// ora imposto un if che mi controlla se la parola messa dall'utente è uguale alla stessa parola letta al contrario

if (word === revertedWord) {
    console.log(`${word} è palindroma`);
} else {
    console.log(`${word} non è palindroma`);
}

// • Pari e Dispari
const MAX = 5; // recupera il dato da un server remoto
// l'utente sceglie pari o dispari
const pariDispari = prompt("scegli se 'pari' o 'dispari'");
console.log(pariDispari);
// ora sceglie un numero da 1 a 5
const number1_5 = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(number1_5);

// genero un numero random da 1 a 5 per il computer ma usando una funzione

function getRandomInt(max) {
    // altre operazioni
    return Math.floor(Math.random() * max);
}

let numberPC = getRandomInt(MAX);


console.log(getRandomInt(MAX));


// sommo i due numeri e controllo se la somma è pari o dispari
let sum = number1_5 + numberPC

// funzione per determinare se la somma è dispari o pari
function isEven(number) {
    // restituisce true se il numero è pari, false altrimenti
    if (number % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
  }
// controllo se l'utente ha vinto o no
if (isEven(sum) === pariDispari) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso...");
}
