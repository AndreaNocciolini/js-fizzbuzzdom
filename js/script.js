// Scrivi un programma che stampi in console i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

const container = document.querySelector(`.container`);
console.log(container);

for (let i = 1; i < 101; i++) {
    const element = document.createElement(`div`);
    element.classList.add(`box`)
    
    container.append(element);
    if (i % 2 == 0) {
        console.log(`This is an EVEN NUMBER: `, i)
    }
    else {
        console.log(`This is an ODD NUMBER: `, i)
    }

    if (i % 3 == 0 && i % 5 == 0) {
        element.innerHTML = "FizzBuzz";
        element.classList.add(`pink-box`);
    }
    else if (i % 3 == 0){
        element.innerHTML = "Fizz";
        element.classList.add(`green-box`);
    }
    else if (i % 5 == 0) {
        element.innerHTML = "Buzz";
        element.classList.add(`yellow-box`);
    }
    else {
        element.innerHTML = i;
        element.classList.add(`blue-box`);
    }
}