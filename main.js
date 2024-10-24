// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

//contenitore num
const numBox = document.getElementById('numBox');

// appaiono invece 5 input. Inserire i numeri che ha visto precedentemente
//contenitore input num
const containerInputBox = document.getElementById('containerInputBox');

// Dopo 30 secondi i numeri scompaiono
setTimeout(function () {
    console.log("prova");
    // prova
    numBox.style.display = 'none';

    // appaiono invece 5 input. l'utente deve inserisce i numeri che ha visto
    //creiamo 5 nuovi input nuovi con un ciclo for
    let inputBox = '';

    for (let i = 0; i < 5; i++) {
        inputBox += `<input type="number" id="inputNum${i + 1}" class="num" min="1" max="50">`;
    }
    // inseriamo le input create con la proprieta innerHTML
    containerInputBox.innerHTML = inputBox;
}, 3000);

