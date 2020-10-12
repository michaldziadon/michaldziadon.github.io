class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;


    }  
    
    
    printInfo() {
        return `Car ${this.name} has color ${this.color}`

    }

}

let audi = new Car('audi', 'red');
let porsche = new Car('porsche', 'blue');

console.log(audi);

console.log(audi.color);

console.log(porsche);


console.log(porsche.name);

console.log(porsche.printInfo());
console.log(audi.printInfo());
