//definicja funkcji

function add() {
    //ciało funkcji

    let num1 = 15;
    let num2 = 5;
    let sum = num1 + num2;

    console.log(sum);
    
}

//wywolanie funkcji lub metody

add();
add();
add();

//wyrazenie funkcyjnie

const divide = function() {
    let num1 = 15;
    let num2 = 3;
    console.log(num1/num2);
    
}

divide();


//parametry funkjci

function multiply(num1 = 1, num2 = 1) {
    
console.log(num1 * num2);

}

multiply(23, 34);
multiply(0);


//zwracanie wartosci

function subtract(num1, num2) {
    
    let result = num1 - num2;    
    
    return result;

}

console.log(subtract(10,5));

let subtractResult = subtract(5,6);

multiply(subtractResult , subtract(10,5));



//funkcje strzałkowe

const square = (a) => {

    // mozliwy zapis const square = a => a*a bez return;
    return a*a;
}

console.log(square(5));


