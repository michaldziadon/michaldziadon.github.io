//warunek if

let age = 22;

if(age>=22) {
    console.log(`jest pełnoletni`);
   
}


//warunek if else

let password = `123456`;


if(password === `querty`) {
    console.log(`zaloguj`);
}
else {
    console.log(`wpisz poprawne hasło`);
    
}


//warunek else if


let bmi = 80;

if(bmi<19) {
    console.log(`niedowaga`);
}

else if(bmi<25) {
    console.log(`norma`);
    
}

else if(bmi<30) {
    console.log(`nadwaga`);
    
}

else {
    console.log(`otyłość`);
    
}


//Switch


let light = `black`;

switch(light) {
    case 'red':
        console.log(`stój`);
        break;
    case 'yellow':
        console.log(`zwolnij`);
        break;
    case `green`:
        console.log(`jedź`);
        break;
    default:
        console.log(`uważaj na siebie`);
        
}