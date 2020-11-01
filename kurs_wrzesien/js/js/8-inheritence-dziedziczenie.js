

//jest to głownie przy React


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

console.log(audi);


//tutaj extends oznacza dziedziczenie 

class Truck extends Car {
    //musimy wprowadzic te pola z CAR aby zadzialalo
    constructor(name, color, capacity) {
//tutaj nalezy wywolwac super aby skierowac konstrukcje z Car na Truck

//super jest 
        super(name, color);
        this.capacity = capacity

    }    

    //tutaj nawet mozemy zrobic wlasnie
    unLoad() {
        return `${this.capacity} kg of goods has benn unloaded`
    }


}

let jelcz = new Truck(`jelcz` , `grenn`, 5500);


console.log(jelcz);
console.log(jelcz.printInfo());

//warto korzystac z metod ktore byly wvzesniej zrobione


//tutaj wywolanie metody ktora sami stworzylismy

console.log(jelcz.unLoad());