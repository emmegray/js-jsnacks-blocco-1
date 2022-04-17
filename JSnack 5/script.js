/**
 * JSnack 5
 * 1 - Creare array vuoto
 * 2 - Chiedere per 6 volte all'utente di inserire un numero
 * 3- Se è dispari inserirlo nell'array
 */

let numeri = [];
let volte = 6;
while (volte > 0) {
  let datiUtente = prompt("Inserisci numero");
  if (Number(datiUtente) % 2 !== 0) {
    numeri.push(datiUtente)
  }
  volte--;
}

document.getElementById("numeriDispari").textContent = numeri;