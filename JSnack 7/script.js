/* JSnack 7
Stampare potenze da 2 fino a 100
*/

let potenze = [];
let numero = 2;
while (numero < 1000) {
  potenze.push(numero);
  numero = numero * 2;
}

document.getElementById("potenze").textContent = potenze;
