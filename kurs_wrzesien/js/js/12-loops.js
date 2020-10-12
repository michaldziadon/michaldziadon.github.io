

//petla for
let names = ['Adam', 'Tomek', 'Karol']


for(let i = 0; i<10; i++) {
// i++ wartosc podniesona o jeden

console.log(`test`);
console.log(i);
}


for(let i = 0; i<names.length; i++) {
    console.log(names[i]);
}



//petla for of


for(let name of names) {
    console.log(names);

}


//petla in

let user = {
    name: `adam`,
    age: 16,
    height: 180
}


for(let key in user) {
    console.log(user[key]);
    
}

//metoda fo each - dla tablic

names.forEach(function(name, index) {
    console.log(`uzytkownika z tablic na indeksie ${index} ma na imię ${name}`)
    
})

//petla while


let randomNumber = parseInt(Math.random() * 10);
//     console.log(randomNumber);
// while(randomNumber<6) {
//     console.log(randomNumber);
//     randomNumber = parseInt(Math.random() *10 );
    
// }

do {
        console.log(randomNumber);
        randomNumber = parseInt(Math.random() *10 );
}  while (randomNumber<6);

//Intrukcja break

for(let i = 0; i<1000; i++ ) {

if(i>100) {
    break;
}
 console.log(i);
}


//instrukcja continue 

for(let i = 0; i<100; i++ ) {
    if(i%2!== 0) {
        continue;
    }
        
     console.log(i);
    }



