// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// creo 5 numeri casuali
const rndNumbers = generateRndNumbers1to100(5);
console.log(rndNumbers);
// prendo UL, e stampo in numeri a schermo
const item = document.getElementById("item");
for (let i = 0; i < rndNumbers.length; i++) {
    const element = document.createElement("li");
    element.classList.add("size3");
    element.innerHTML = `${rndNumbers[i]}`;
    // setto il timer a 30s e poi li faccio sparire
    setTimeout(function() {
        element.classList.add("text-white");
    }, 30000);
    item.append(element);
}
// setto il timer a poco più di 30s e poi chiedo all' utente di reinserire i numeri con la funzione sotto
setTimeout(function() {
    validationProcess();
}, 30100);



// FUNCTIONS


/**
 * Description: genera numeri random (possono esserci duplicati)
 * @param {number} index indica i numeri da ottenere
 * @returns {array} contiene l' array numerico
 */
function generateRndNumbers1to100(index) {
    const array = [];
    for (let i = 0; i < index; i++) {
        let rndNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        array.push(rndNumber);
    }
    return array;
}


function validationProcess() {
    for (let i = 1; i < 6; i++) {
        let askNum = parseInt(prompt(`inserisci il numero ${i}`));
        
    }
}