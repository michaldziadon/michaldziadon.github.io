

var person = {
    name: `Michał`,
    height: 170,
    print: function() {
        console.log('mam na imie '  +  this.name);


    }

};
console.log(person.name);
console.log(person.height);
person.print();


person.height = 180;
person.age = 50;


console.log(person);

var women = {
    name: `Monika`,
    height: 200,

    
}


let {name, height} = women;

console.log(name);