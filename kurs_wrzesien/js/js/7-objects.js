//definiowanie objektu

let person = {
    name: 'Michał',
    age: 32,
    isMarried: true,
    hobbies: ['boadr games', 'movies'],
    spouse: {name: 'Sylwia', age: 32},
    children: [{name: 'Mikołaj', age: 4}, {name: 'Filip', age: 2}],

    printInfo() {
        //dajemy slowo THIS - bedzie zawsze obieketem
        return `Oosba m na imię ${this.name} i jej wiek to ${this.age}`;




    }

}
//odwolywanie do pol
console.log(person);

//wyciaganie imienia
console.log(person.name);
//wyciaganie 2hobby

console.log(person.hobbies[1]);

//wyciaganie wiek mojej zony

console.log(person.spouse.age);
//wyciaganie wiek imienia drugiego dziecka

console.log(person.children[1].name);

let keyName = 'age';

console.log(person[keyName]);

//wywolywanie metoduy
console.log(person.printInfo());



//destrykturyzacja objektow
let {name, age} = person;

console.log(name);


//dodawanie pol 

person.height = 172;

console.log(person);


//referencje
let user = person;

user.name = 'Zenek';

console.log(person);
