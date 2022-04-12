// JSnack 1
// 1 - L'utente inserisce due numeri in successione con due prompt
// 2 - Il software stampa il maggiore

let primiDatiUtente;
let secondiDatiUtente;

primiDatiUtente = prompt('Inserisci un numero:');
secondiDatiUtente = prompt("Inserisci un'altro numero:")

if (primiDatiUtente > secondiDatiUtente) {
    document.getElementById("dati").textContent = primiDatiUtente
} else {
    document.getElementById("dati").textContent = secondiDatiUtente
}