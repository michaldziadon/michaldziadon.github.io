let user = '{"name":"Admin","age":36,"hobbies":["games","movies","books"]}';

console.log(user);

let userObj = JSON.parse(user);

console.log(userObj);


let keyName = 'age'

console.log(keyName);

let keyName1 = 'name'

console.log(keyName1);

let keyName2 = 'hobbies'

console.log(keyName2);

// console.log(userObj.hobbies[0]);
// console.log(userObj.hobbies[1]);
// console.log(userObj.hobbies[2]);


userObj.hobbies.forEach(function(hobby) {
    console.log(hobby);

});


for(let i = 0; i<userObj.hobbies.lenght; i++) {
    console.log(userObj.hobbies[i]);

}

let person = {
    name: 'Lukasz',
    age: 33

}

let stringObj = JSON.stringify(person);
    console.log(stringObj);

