

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName;

    }

    printInfo() {
        console.log(`Imię: ${this.name}, Nazwisko: ${this.lastName}`)};
    
 
}

let person = new Person(`Michał` , `Kowalski`);
console.log(person);



let person2 = new Person(`Monika` ,  `Nowak`);
console.log(person2);


person.printInfo();
person2.printInfo();


