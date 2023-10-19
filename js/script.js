// chiedo all'utente quanti km e quanti anni ha
let userKm = parseInt(prompt("Ciao Utente! Quanti Km vuoi percorrere?"));
console.log(userKm);
let userAge = parseInt(prompt("Ciao Utente! Quanti Anni hai?"));
console.log(userAge);
// calcolo il costo per km
let costoKm = (userKm * 0.21);
console.log(costoKm);
//calcolo il primo sconto da sottrarre successivamente al costo del biglietto
let discountFisrt = (userAge * 0.20);
console.log(discountFisrt);
//calcolo il secondo sconto da sottrarre successivamente al costo del biglietto
let discountSecond = (userAge * 0.40);
console.log(discountSecond);
// il prezzo con lo sconto del 20%
let priceFirst = (costoKm - discountFisrt);
console.log(priceFirst);
// il prezzo del biglietto con lo sconto del 40%
let priceSecond = (costoKm - discountSecond);
console.log(priceSecond);


if (userAge < 18) {
    console.log(priceFirst);
} else if (userAge > 65) {
    console.log(priceSecond);
} else console.log(costoKm);


document.getElementById("message").innerHTML= 'Il costo del biglietto è di' + costoKm.toFixed(2)+ '€';
document.getElementById("message").innerHTML= 'Il costo del biglietto è di' + priceFirst.toFixed(2)  + '€';
document.getElementById("message").innerHTML= 'Il costo del biglietto è di' + priceSecond.toFixed(2) + '€';




/*if ( userAge > 65 ) {
    console.log(Math.round(userAge * 0.40) - costoKm);
}else if (userAge < 18) {
    console.log(Math.round(userAge * 0.20) - costoKm);
}else console.log(Math.round(costoKm));*/





