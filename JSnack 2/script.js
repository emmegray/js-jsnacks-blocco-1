// JSnack 2
// 1 - L'utente inserisce due parole in successione con due prompt
// 2 - Il software stampa prima la parola più corta, poi la parola più lunga

let primiDatiUtente;
let secondiDatiUtente;

primiDatiUtente = prompt("Inserisci una parola:");
secondiDatiUtente = prompt("Inserisci un'altra parola");

if (primiDatiUtente.length > secondiDatiUtente.length) {
    document.getElementById("parolaLunga").textContent = primiDatiUtente
    document.getElementById("parolaCorta").textContent = secondiDatiUtente
} else {
    document.getElementById("parolaLunga").textContent = secondiDatiUtente
    document.getElementById("parolaCorta").textContent = primiDatiUtente
}
