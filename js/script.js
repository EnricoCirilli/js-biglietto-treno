const userKm = prompt("Ciao Utente! Quanti Km vuoi percorrere?");
const userAge = prompt("Ciao Utente! Quanti Anni hai?");
console.log(userAge, userKm);

const costoKm = (userKm * 0.21);
console.log(costoKm);

let discountFisrt = (userAge * 0.20);
console.log(discountFisrt);

let discountSecond = (userAge * 0.40);
console.log(discountSecond);

let priceFirst = (costoKm - discountFisrt);
console.log(priceFirst);

let priceSecond = (costoKm - discountSecond);
console.log(priceSecond);

let totalPriceFirst = (costoKm - priceFirst);
console.log(totalPriceFirst);

let totalPriceSecond = (costoKm - priceSecond);
console.log(totalPriceSecond);

let totalPrice = '';

if (userAge > 65) {
    console.log(Math.round(totalPriceSecond));
} else if (userAge < 18) {
    console.log(Math.round(totalPriceFirst));
} else console.log(Math.round(costoKm));

/*if ( userAge > 65 ) {
    console.log(Math.round(userAge * 0.40) - costoKm);
}else if (userAge < 18) {
    console.log(Math.round(userAge * 0.20) - costoKm);
}else console.log(Math.round(costoKm));*/





