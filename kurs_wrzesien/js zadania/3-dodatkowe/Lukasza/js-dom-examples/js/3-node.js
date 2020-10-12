/* Węzeł rodzica */
let ulParent = document.getElementsByTagName('ul')[0].parentElement;

console.log(ulParent);


/* Węzły dzieci */

//let allAboutChildren = document.getElementById('about').childNodes;
let allAboutChildren = document.getElementById('about').children;

console.log(allAboutChildren);

ulParent.firstElementChild.textContent = 'Sekcja z listą';


/* Węzły rodzeństwa */

let nexSibling = ulParent.nextElementSibling;

console.log(nexSibling);

let prevSibling = ulParent.previousElementSibling;

console.log(prevSibling);