let number = 10;


function example() {
    let number = 15;
    console.log(number);
    
}

example();

console.log(number);


// Zasieg es5 vs es6

if(true) {
    let firstname = 'adam';
    var sName = 'nowacki';
}

console.log(sName);
console.log(firstname);

//nie widzimy let poniewaz jest widziany tylko w zasiegu lokalnie
//var widoczny poniewaz jest widoczny lokalnie i w globalnym zasiegu

