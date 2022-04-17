/**
 * JSnack 6
 * 1 - chiedere numero a utente
 * 2 - numero indicato = N
 * 3 - stampare cubo dei primi N numeri
 */

let utenteN = prompt("Inserisci numero intero:");
let cubi = [];
let conto = 0;
while (conto <= utenteN) {
  cubi.push(conto*conto)
  conto++
}

document.getElementById("cubo").textContent = cubi;