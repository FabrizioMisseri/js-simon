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
// creo le variabili che mi servono
// creo la funzione generate random numbers
// ciclo for e genero i numeri casuali utilizzando genRndNumbers
    // i numeri generati li metto dentro una array PCnumbers a parte
    // creo li e ci appiccico il num random, il tutto mentre pusho il valore nell' array sopra
// funzione che dopo 30 secondi sovrappone il blocco cover-item su tutta la pagina
// nella stessa funzione che si attiva 30s dopo chiedere tramite 5 prompt (ciclo for) i numeri all' utente e    salvarli in un array userNumbers
// confrontare numeri dell' utente con i numeri del PC
// SE almeno un numero è diverso allora il flag diventa FALSE
// al termine vedo il flag, se false - lose, se true - win