/* Tworzenie i dodawnie elementów */
let newListItem = document.createElement('li');
let textNode = document.createTextNode('New item');

newListItem.appendChild(textNode);
newListItem.setAttribute('class', 'list-item');

console.log(newListItem);

document.querySelector('.list').appendChild(newListItem);


let user = '{"name":"Admin","age":36,"hobbies":["games","movies","books"]}';

console.log(user);

let userObj = JSON.parse(user);


for(let i = 0; i<userObj.hobbies.length; i++) {
    let newListItem = document.createElement('li');
    let textNode = document.createTextNode(userObj.hobbies[i]);
    newListItem.appendChild(textNode);
    newListItem.setAttribute('class', 'list-item');

    console.log(newListItem);

    document.querySelector('.list').appendChild(newListItem);

}


/* Wstawianie przed */
document.getElementById('info').insertBefore(document.getElementById('main-heading'), document.getElementById('info').firstElementChild);

//document.getElementById('info').replaceChild(document.getElementById('main-heading'), document.getElementById('info').firstElementChild);


/* Usuwanie */
document.getElementById('about').removeChild(document.getElementById('about').firstElementChild);