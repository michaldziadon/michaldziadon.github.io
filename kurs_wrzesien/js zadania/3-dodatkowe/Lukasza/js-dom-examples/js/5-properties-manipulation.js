let mainHeading = document.getElementById('main-heading');

console.dir(mainHeading);


/* Zawartość elementu */

mainHeading.innerText = 'To jest nowa zawartość <span>nagłówka</span>';
mainHeading.innerHTML = 'To jest nowa zawartość <span>nagłówka</span>';
//mainHeading.outerHTML = '<h3>To jest nowa zawartość <span>nagłówka</span></h3>';

let paragraphContent = document.querySelector('p').innerText;

console.log(paragraphContent);


/* Właściowści atrybutów */

mainHeading.id = 'new-id';


//mainHeading.className = 'new-class second-new-class';

mainHeading.classList.add('new-class');
mainHeading.classList.add('second-new-class');
mainHeading.classList.remove('main-heading');


/* Manipulacja stylami */
mainHeading.style.fontSize = '5em';


let allListItems = document.getElementsByClassName('list-item');

for(let i = 0; i<allListItems.length; i++) {
    allListItems[i].style.marginLeft = i * 10 + 'px';
}