// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

//contenitore num
const numBox = document.getElementById('numBox');
//elemento bottone
const checkButton = document.getElementById('checkButton');
//elemento resultato delle conicidenze
const result = document.getElementById('result');

//facciamo diventare numBox in un array che ci servira per fare la comparazione con le coincidenze. Salviamo in una variabile***
//metodo Array.from = ci ritorna una lista especiale degli elementi class 'num',non un Array, ma ritornandoci questa lista, ci permette uttilizzare metodi di Array 
const numEl = Array.from(numBox.getElementsByClassName('num'))
//convertiamo i divs 'strings' a numeri interi. Funzione map, prende ogni elemento del array
const listaNumeri = numEl.map(function (num) {
    //ci ritorna numeri interi parseInt
    return parseInt(num.textContent);
});

console.log('Sono i numeri che dovranno indovinare jojojo', listaNumeri)


//contenitore input num
const containerInputBox = document.getElementById('containerInputBox');

// Dopo 30 secondi i numeri scompaiono
setTimeout(function () {
    console.log("prova");
    // spare il display dei numeri da memorizzare
    numBox.style.display = 'none';

    // appaiono invece 5 input. l'utente deve inserisce i numeri che ha visto
    //creiamo 5 nuovi input nuovi con un ciclo for
    let inputBox = '';

    for (let i = 0; i < 5; i++) {
        inputBox += `<input type="number" id="inputNum${i + 1}" class="num" min="1" max="50">`;
    }
    // inseriamo le input create con la proprieta innerHTML
    containerInputBox.innerHTML = inputBox;

    //appare il display: bottone e risultato
    checkButton.style.display = 'flex';
    result.style.display = 'flex';
}, 3000);


//per ottenere il risultato facciamo una compazione tra arrays***
//facciamo una funzione, che poi chiameremmo by callback, al click del bottone
function matches() {
    //PRIMO OBBIETIVO
    //salviamo in una variabile, la lista di input.value
    const inputEl = Array.from(containerInputBox.getElementsByTagName('input'));
    //prendiamo ogni elemento della lista. metodo map
    const inputNumeri = inputEl.map(function (input) {
        return parseInt(input.value);
    });
    // //ci facciamo ritornare il nostro array di inputs
    // return inputNumeri

    //SECONDO OBBIETIVO
    //confrontiamo entrambi gli array, metodo filter(parametro num). e ci facciamo ritornare il lenght(numero) delle coincidenze
    let match = listaNumeri.filter(num => inputNumeri.includes(num)).length;

    //TERZO OBBIETIVO
    //facciamo vedere le coicidenze sullo schermo.
    result.textContent = `Hai trovato ${match} coincidenze.`;
}

//dopo svilupare la funzione, aggiungiamo il evento click al bottone di verifica
checkButton.addEventListener('click', matches);