// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

//contenitore num
const numBox = document.getElementById('numBox');

// appaiono invece 5 input. Inserire i numeri che ha visto precedentemente
//contenitore input num
const containerInputBox = document.getElementById('containerInputBox');

//creo un elemento input per inserire i numeri
let inputBox = document.createElement('input');
//aggiungiamo una nuova classe
inputBox.classList.add('.num')
//costruiammo il nuovo elemento
inputBox.innerHTML = '<input type="number" id="inputNum"  min="1" max="50">'

// Dopo 30 secondi i numeri scompaiono
setTimeout(function() {
    console.log("prova");
    // prova
    numBox.style.display = 'none';
    
    
}, 3000);

