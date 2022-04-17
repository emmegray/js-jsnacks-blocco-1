// JSnack 1
// 1 - L'utente inserisce due numeri in successione con due prompt
// 2 - Il software stampa il maggiore

let primiDatiUtente;
let secondiDatiUtente;

primiDatiUtente = inserisciNumeroValido("Inserisci primo numero", "Numero non valido");
secondiDatiUtente = inserisciNumeroValido("Inserisci secondo numero", "Numero non valido");

if (primiDatiUtente > secondiDatiUtente) {
    document.getElementById("dati").textContent = primiDatiUtente
} else {
    document.getElementById("dati").textContent = secondiDatiUtente
}

function inserisciNumeroValido(domanda, messaggioErrore) {
    let datiUtente = prompt(domanda);
    let nonUnNumero = Number.isNaN(Number(datiUtente))

    while (nonUnNumero) {
        alert(messaggioErrore);
        datiUtente = prompt(domanda);
    }
    
    return Number(datiUtente);
}