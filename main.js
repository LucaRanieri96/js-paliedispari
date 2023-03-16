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