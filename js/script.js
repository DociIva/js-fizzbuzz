console.log('ciao belli');
//Consegna
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per
//i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli 
//di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//come faccio a sapere se un numero è divisibile per? Abbiamo visto
// qualcosa di particolare che possiamo usare?
//Consigli
//1. scriviamo sempre prima dei commenti in italiano per capire cosa
// vogliamo fare
//2. proviamo ad immaginare le operazioni che vogliamo far
//svolgere al nostro programma così come lo faremmo "a mano"


// 1 scrivi un programma che stampi numeri da 1 a 10
var numeri;

for (var i = 0; i < 100; i++) {
   numeri = i;
    console.log(numeri);
}
// 2
if( ( numeri % 3 === 0) && (numero % 5 === 0)) {
    numero = 'FRIZZBUZZ';

} else if(numeri % 3 === 0) {
    numero = 'BUZZ';
}
console.log(numeri);