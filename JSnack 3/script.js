// JSnack 3
// 1 - Il software chiede per 5 volte all'utente di inserire un numero
// 2 - Il programma stampa la somma di tutti i numeri inseriti
// Opzionale:
// Eseguire il programma in due versioni con for e while

let somma = 0;
let ripetizioni = 5;

while (ripetizioni > 0) {
    datiUtente = Number(prompt("Inserisci un numero:"));
    somma = somma + datiUtente;
    ripetizioni--;
}
document.getElementById('totaleNumeri').textContent = somma;
