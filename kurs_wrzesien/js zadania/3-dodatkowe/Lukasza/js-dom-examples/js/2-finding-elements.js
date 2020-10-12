/* Wyszukiwanie po id */

let mainHeading = document.getElementById('main-heading');
console.log(mainHeading);

mainHeading.style.backgroundColor = 'yellow';


/* Wyszukiwanie po klasie */

let allListItems = document.getElementsByClassName('list-item');

console.log(allListItems);

for(let i = 0; i<allListItems.length; i++) {
    allListItems[i].style.backgroundColor = 'green';
}


let secionAbout = document.getElementsByClassName('about');
console.log(secionAbout);

secionAbout[0].style.color = 'red';


/* Wyszukiwanie po znaczniku */

let allParagraphs = document.getElementsByTagName('p');

console.log(allParagraphs);


/* Wyszukiwanie po selektorze */

let firstHeading = document.querySelector('#info .section-title');
console.log(firstHeading);

firstHeading.style.backgroundColor = 'pink';

let paragraphs = document.querySelectorAll('#about .content');
console.log(paragraphs);