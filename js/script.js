// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


//                                        PSEUDO  CODICE
// flag di winner condition su TRUE
let flagWinnerCondition = false;
// creo le variabili che mi servono:
const PCnumbers = [];
const userNumbers = [];
const list = document.getElementById("list");

// creo la funzione generate random numbers
// FATTO

// ciclo for e genero i numeri casuali utilizzando genRndNumbers
for(let i = 0; i < 5; i++) {
    // i numeri generati li metto dentro una array PCnumbers a parte
    const randomNumber = generateRandomNumber();
    PCnumbers.push(randomNumber); 
    // creo li e ci appiccico il num random, il tutto mentre pusho il valore nell' array sopra
    const item = document.createElement("li");
    item.classList.add("size3");
    item.innerHTML = `${randomNumber}`;
    list.append(item);
}
// funzione che dopo 30 secondi pulisce lo schermo
setTimeout(clearAll, 2000);
// nella stessa funzione che si attiva 30s dopo chiedere tramite 5 prompt (ciclo for) i numeri all' utente e    salvarli in un array userNumbers
setTimeout(writeUserNumbers, 2000);
// confrontare numeri dell' utente con i numeri del PC
// SE almeno un numero è diverso allora il flag diventa FALSE
// al termine vedo il flag, se false - lose, se true - win


// FUNCTIONS

/** GENERATE RANDOM NUMBER
 * Description: genera un numero da 1 a 100 in maniera randomica
 * @returns {number} 
 */
function generateRandomNumber() {
    const number = Math.floor(Math.random() * (100)) + 1
    return number;
}


/** CLEAR ALL
 * Description: pulisce lo schermo, svuotando l' item list
 * @returns {}
 */
function clearAll() {
    list.innerHTML = "";
}


function writeUserNumbers() {
    for(let i = 0; i < 5; i++) {
        let number = parseInt(prompt(`inserisci numero ${i + 1}`));
        userNumbers.push(number);
    }
}