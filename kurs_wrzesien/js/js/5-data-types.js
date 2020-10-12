// typ numeryczny

let age = 45;
let pi = 3.14;

console.log(age);
console.log(typeof age);
console.log(pi);





//typ łańcuchowy - string

let name = 'Tomek';


console.log(name);
console.log(typeof name);

let sentence = 'this is Adam\'s car';
let sentence1 = 'this is ' + name + '\'s car'; 
//to byla konkatenacja

console.log(sentence);
console.log(sentence1);

let alternativeSentence = `this is ${name}'s car`; //interpolacja

console.log(alternativeSentence);


// typy logiczne - boolean

let isGoodWaether = false;

console.log(isGoodWaether);
console.log(typeof isGoodWaether);


if(isGoodWaether) {
    console.log('mamy ładną pogodę');
    


}

// typy specjalne 

let undefinedExample = undefined;

console.log(undefinedExample);
console.log(typeof undefinedExample);


let thereIsNoObject = null;

console.log(thereIsNoObject);


//ciekawostka

let devide = 10/0;
console.log(devide);
console.log(typeof devide);


let multiply = 2 * 'ola';
console.log(multiply);
console.log(typeof multiply);


console.log(2 + '2');
console.log(2 - '2');
console.log(2 - true);
