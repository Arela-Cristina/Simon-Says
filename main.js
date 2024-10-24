//contenitore num
const numBox = document.getElementById('numBox');
//elemento bottone
const checkButton = document.getElementById('checkButton');
//elemento resultato delle conicidenze
const result = document.getElementById('result');

//facciamo diventare numBox in una lista che ci servira per fare la comparazione con le coincidenze. Salviamo in una variabile***
const numEl = Array.from(numBox.getElementsByClassName('num'))
//convertiamo i divs 'strings' a numeri interi. 
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
    // inseriamo gli input creati con la proprieta innerHTML
    containerInputBox.innerHTML = inputBox;

    //appare il display: bottone e risultato
    checkButton.style.display = 'flex';
    result.style.display = 'flex';
}, 3000);



//dopo sviluppare la funzione, aggiungiamo il evento click del bottone di verifica, e facciamo occorrere tramite callback la nostra funzione matches
checkButton.addEventListener('click', matches);


//hoisting
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
    //confrontiamo entrambi gli array
    let match = listaNumeri.filter(num => inputNumeri.includes(num)).length;

    //TERZO OBBIETIVO
    //facciamo vedere le coicidenze sullo schermo.
    result.textContent = `Hai trovato ${match} coincidenze.`;
}


//metodi implementati

//metodo Array.from = ci ritorna una lista especiale degli elementi class 'num',non un Array, ma ritornandoci questa lista, ci permette uttilizzare metodi di Array 

//Funzione map, prende ogni elemento del array

//metodo filter(parametro num). e ci facciamo ritornare il lenght(numero) delle coincidenze