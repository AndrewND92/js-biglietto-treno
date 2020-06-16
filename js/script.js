// bligietto del Treno

var prezzo = 0.21;

// chiedere al cliente quanti km vuole fare
var km = prompt("Quanti km vuoi percorrere?")
console.log(km);

// chiedere l'età
var eta = prompt("quanti anni hai?")
// console.log(eta);

// colcolo del prezzo al km
var calcoloPrezzoKm = 0.21 * km;
// console.log(calcoloPrezzoKm);

// calcoli di sconto

var sconto;
sconto = calcoloPrezzoKm * 0.2;

var prezzoScontato;
prezzoScontato = calcoloPrezzoKm - sconto;




//
if (eta < 18){
calcoloPrezzoKm = calcoloPrezzoKm - calcoloPrezzoKm *0.2;

} else if (eta > 65) {
  calcoloPrezzoKm = calcoloPrezzoKm - calcoloPrezzoKm *0.4;
}

// output utente
document.getElementById('title').innerHTML = "Grazie, il prezzo del biglietto è di: " + calcoloPrezzoKm.toFixed(2);
