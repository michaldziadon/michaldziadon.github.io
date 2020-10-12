//definiowanie tablic i poibera nie wartosci


let names = ['Adam' , 'Kasia' , 'Ola'];


console.log(names);


console.log(names[0]);
console.log(names[2]);


let [name1, name2, name3] = names;
console.log();


//dodawanie elementow

names[3] = 'Tomek';

// metoda push

names.push('Maciek');

console.log(names);


let refArrey = names; //referencje

refArrey.push('Wojtek');

console.log(refArrey);



//metody tablicowe

//tutaj zamiana na string
console.log(names.join());
console.log(names.join(''));


// odwracanie tablicy

console.log(names.reverse());

// sortowanie tablicy

console.log(names.sort());

// laczenie tablic 

let newNames = ['wujek', 'babcia', 'dziadek']

let connectedArrays = newNames.concat(names);

console.log(connectedArrays);

console.log(connectedArrays.indexOf('Ola'));

// mapowanie tablic

let numbers = [1,2,3,4];

let fiveMoreNumbers = numbers.map(function(element) {
    return element + 5;
    
} )

console.log(fiveMoreNumbers);


let highThanTwo = numbers.filter(function(element) {
    return element > 2; 


} )

console.log(highThanTwo);


//Dlugość tablicy - zwaraca operacje liczbowa


console.log(highThanTwo.length);


//tablica w tablicy

let exampleArrey = ['Lukasz', ['black', 'white'], 'test'];
//tutaj w consoli pierwsza to tablica a pozniej jednostka tablicy zagniezdzonej
console.log(exampleArrey[2][0]);
