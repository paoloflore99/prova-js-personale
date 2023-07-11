"use strict"

/**
 * tipologgia di commento
 */

//tipologia di commento 

/*
    tipologgia di commento
*/

/*
//consol
console.log("riga js 15");  //stanpa nella consol

//document
document.getElementById("provaelemnt").innerHTML = "<h3>titolo modificato da js</h3>"
//grazie a questo document posso andare a modificare html , soprasrivendolo.

//allert-popup che compare 
alert("ciao sono un allert")

//variabbili
/*
la variabbile e un contenuto nel quale salvo dei dati
*/












//-------------------------------------lezzione di oggi da mettere alla  fine---------------------------------------------------------

/*
funzioni serve per isolare e rendere visibbile un blocco di codice 
occore specificare la keyword function poi il nome della funzione da eesequire
le funzioni non importa dove le scriviamo ma le possiamo usare dove vogliamo
*/


/*
function name() {
    
}
*/



//invocazione funzione  
/*
come per le variabbili basta scrivere il nome della funzione e aggiungere le parentesi tonde alla fine 
*/


/*

nomefunzione()
*/




//argomenti 
/*
le funzioni non devo usare variabbili globali, quindi possiamo creare degli argomenti
che permette di ricevere dei dati esterni e usarli internamente come funzione . 
gli argomenti sono come delle variabili senza valore . il valore asegna quando viene invocata
*/

function name(arg1, arg2) {
    
}

//invocazione
//in questo modo asegno i valori degli argomenti delle funzioni
nome("valore arg1", "valore arg2")


//return








//-----------------------------------liv codice-------------------------------------------------------------

/*
//serve per invertire le paore  e metterla a confronto con quella non capololta
function isPalindroma(word) {
    const letters = word.split("");

    const reverseLetters = [];

    for (let i = 0; i < array.length; i++) {
        reverseword = reverseLetters[i];
        
    }

    console.log(reverseLetters, reverseword)


}

const result = isPalindroma("ciao")


*/
//--------------------------------------seconda parte live--------------------------------------------

/**
 * @type{HTMLSelectElement} 
 */
const squareCountsSelect = document.querySelector("[name='squareCounts']")

const btnStart = document.querySelector("#btn-start")

const gridContainer = document.querySelector(".grid-container")



btnStart.addEventListener("click", onBtnClick)


function onBtnClick() {//codice che esegue il click

    const squareCounts = parseInt(squareCountsSelect.value);//leggo il valore della sect

    console.log("valore sclto", squareCounts)

    //devo generare la griglia
    const gridList = createGrid() //variabbile del pulsante

    console.log ("gridList");
}

function createSingleSquare() {
    const square = document.createElement("div");

    square.classList.add("grid-square");
    square.textContent = squareCount;
    //output
    return square;
    square.classList
    square
    square
    
}


/**
 * dato un numero di celle crea una griglia
 * @param {number} squareNumber numero quadrati de creare 
 * @returns {HTMLDivElement}
 */
function createGrid(squareNumber) {
    for (let I = 0; I < squareNumber; I++) {
        const newSquare = createSingleSquare("sqr", + I);
        
        gridContainer.push(newSquare)
    }


    //output 
    return grid;
}


createGrid()//qui specifico quanti quadrati voglio