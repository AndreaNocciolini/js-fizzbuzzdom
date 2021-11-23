const container = document.querySelector(`.container`);
console.log(container);

for (let i = 1; i < 101; i++) {
    const element = document.createElement("div");
    element.classList.add(`box`)
    
    container.append(element);
    console.log(i);

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