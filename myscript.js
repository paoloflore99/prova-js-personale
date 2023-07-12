"use strict"

/**
 * tipologgia di commento
 */

//tipologia di commento 

/*
    tipologgia di commento
*/


//consol
console.log("riga js 15");  //stanpa nella consol


//document
//grazie a questo document posso andare a modificare html , soprasrivendolo. 
document.getElementById("primamodifica").innerHTML = "<h1>MODIFICATO DA JAVASCRIPT</h1>"


//allert
//allert-popup che compare 
alert("ciao sono un allert")


//consol.dir 
//lo uso per ispezzionare gli elementi da getelementbyid
console.dir(document.getElementById("primamodifica"))



//variabili
//variabbili , cvi sono 3 tipi di variabbili   const  ,  let   ,  var   .
//const le informazzioni messe allinterno non posso poi piu essere modificate 
//Let Una variabile inizializzata con la keyword let è riassegnabile.
//var e sempre preferibile utilizzare let.
//esempio

//dichiarazione variabbile
let miaStringa;            

//asegnazione variabbile
miaStringa = "ciao"

//utilizzo/richiamo 
///alert(miaStringa)

//asegnazione
miaStringa = "Arrivederci"

//utilizzo/richiamo 
///alert (miaStringa)



//Variabbile  creo una varibbile vuota ( sotto ce il continio )
let provavariabbile;

//per poi riprenderla qua  asegnadoli un valo 
provavariabbile = 4;

//provadella variabbile asegnta dopo
///alert (provavariabbile)

//const devo dare subbito il valore 
const provacostante = 10;

//tipologgia di variabbili
//Number        numro
//string        stringa, sequenza di caratteri
//boolean       true fols  1 0   vero falso
//object        ogetto
//function      funzione un ogetto <speciale>
//undefined     non definito
//null          valore nullo



                                                        //ancora da finire





//riga(commento ) 66 65 48     video lezzione del (29 giugno)
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

///function name(arg1, arg2) {
    
///}

//invocazione
//in questo modo asegno i valori degli argomenti delle funzioni
///nome("valore arg1", "valore arg2")