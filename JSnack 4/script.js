// JSnack 4
// 1 - Creare array con elenco nomi invitati alla festa del grande Gatsby
// 2 - Chiedere all'utente nome e cognome
// 3 - Controllare se nome e cognome dell'utente è presente nella lista e comunicarglielo
// 4 - Comunicare all'utente se può partecipare

const invitati = ["Marco", "Fabio", "Coso",];
const datiUtente = prompt("Inserisci il tuo nome?");

let risultato = invitati.find(function(value){
  return value === datiUtente  
})

if (risultato === datiUtente) {
  alert("Puoi partecipare!");
} else {
  alert("Non sei invitato >:(")
}