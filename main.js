
//elemento title
const title = document.getElementById('title');
//elemento subtitle
const subTitle = document.querySelector('.subTitle');
//contenitore num
const numBox = document.getElementById('numBox');
//elemento bottone
const checkButton = document.getElementById('checkButton');
//elemento resultato delle conicidenze
const result = document.getElementById('result');
//elemento notifica per il utente
let errorMessage = document.getElementById('errorMessage')

//creiamo un array vuoto lista numeri, per i numeri random
let listaNumeri = [];

//evento per generare i numeri random ogni volta che viene caricata la pagina
window.onload = function() {
    numberRandom();

//facciamo diventare numBox in una lista che ci servira per fare la comparazione con le coincidenze. Salviamo in una variabile***
const numEl = Array.from(numBox.getElementsByClassName('num'))
//convertiamo i divs 'strings' a numeri interi. 
listaNumeri = numEl.map(function (num) {
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
    title.textContent = 'Inserisci i numeri che hai memorizzato'
    subTitle.textContent = '(Non importa il ordine)'

    // appaiono invece 5 input. l'utente deve inserisce i numeri che ha visto
    //creiamo 5 nuovi input nuovi con un ciclo for
    let inputBox = '';

    for (let i = 0; i < 5; i++) {
        inputBox += `<input type="text" id="inputNum${i + 1}" class="num" min="1" max="50">`;
    }
    // inseriamo gli input creati con la proprieta innerHTML
    containerInputBox.innerHTML = inputBox;

    //appare il display: bottone e risultato
    checkButton.style.display = 'flex';
    result.style.display = 'flex';

    //controllo caratteri ripetuti e che non siano numeri
    const inputs = containerInputBox.getElementsByTagName('input');  
    Array.from(inputs).forEach(input => { //faccio una lista ed esseguo uan azzione per ogni parametro-elemento-input
       
        //occorre un evento al input del utente addEventListener 'input'
        input.addEventListener('input', function() { 
            verifyIfIsAnum(input); //controllo if !NaN
            checkDoubles();  //controllo numeri ripetuti
        });
    });

}, 3000);

};

//dopo sviluppare la funzione, aggiungiamo il evento click del bottone di verifica, e facciamo occorrere tramite callback la nostra funzione matches
checkButton.addEventListener('click', matches);


//hoisting

// funzione per generare numeri random
function numberRandom() {
    const numElements = numBox.getElementsByClassName('num');
    
    listaNumeri = Array.from(numElements).forEach(div => {
        const randomNum = Math.floor(Math.random() * 50) + 1;
        div.textContent = randomNum; 
        return randomNum;
    });
}

//per ottenere il risultato facciamo una compazione tra arrays***
//facciamo una funzione, che poi chiameremmo by callback, al click del bottone
//function per confrontare entrambi le liste di elementi
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
    result.textContent = `Hai trovato ${match} coincidenze!!`;
}

//function per validare se un elemento !NaN 
function verifyIfIsAnum(input) {
    //salviamo il value del input
    const valor = input.value.trim();
    //se input is NaN oppure input e vuoto .trim()
    if (isNaN(valor) || valor.trim() === '') {
        input.classList.add('error'); //error
        document.getElementById('invalidCaracter').textContent = 'Devi inserire un numero'; // messagio carattere invalido
        document.getElementById('invalidCaracter').style.display = 'block';
    } else {
        input.classList.remove('error'); //not error
        document.getElementById('invalidCaracter').style.display = 'none';
    }
}

//function per controllare che non ci siano numeri uguali tra gli input
function checkDoubles() {
    //salvo gli input ancora, per poi invocare la funzione
    const inputs = containerInputBox.getElementsByTagName('input');
    // let errorMessage = document.getElementById('mensajeError');
    const list = []; //array vuoto per pushare gli input
    let elementRepeat = false; //bandiera, ancora non ci sono num doppi

    //faccio una lista con Array.from . ed eseguo un'azione per ogni elemento grazie a forEach(){}
    //parametro 'input'
    Array.from(inputs).forEach(input => {
        const valor = input.value.trim(); //elemento input = input.value vuoto
        if (valor === '') {
            return; // usciamo dalla funzione
        }
        // se la mia lista include gia un elemento input
        else if (list.includes(valor)) {
            input.classList.add('double'); // notifica
            elementRepeat = true; //bandiera true, notifica
        } else {
            input.classList.remove('double'); // altrimenti non notifica
            list.push(valor); //pusho solo i numeri che non si ripetono
        }
    });

    if (elementRepeat) {
        errorMessage.textContent = 'Hai ripetuto un numero.'; 
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none'; 
    }
}

//metodi implementati

//metodo Array.from = ci ritorna una lista especiale degli elementi class 'num',non un Array, ma ritornandoci questa lista, ci permette uttilizzare metodi di Array

//Funzione map, prende ogni elemento del array e ci ritorna un nuovo array trasformato.

//Funzione frutas.forEach(parametro => {}); prende ogni elemento del array(non modifica gli elementi). Non ci ritorna un array ma  ci permete di eseguere un'azione per ogni elemento.
   

//metodo filter(parametro num). e ci facciamo ritornare il lenght(numero) delle coincidenze