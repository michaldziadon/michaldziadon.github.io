//wyszukiwanie bezposrednie


//wyszukiwanie po ID

let mainHeader = document.getElementById('main-header');
console.log(mainHeader);

mainHeader.style.backgroundColor = 'yellow';

//mozna zrobic na dwa sposoby

//wyszukiwanie po klasie


let allListItems = document.getElementsByClassName('list-item');

console.log(allListItems);

//tutaj petla dla zmienia kolorow na wszystkie LI
allListItems[0].style.backgroundColor = 'green';

for(let i = 0; i<allListItems.length; i++) {
    allListItems[i].style.backgroundColor = 'green';

}


let sectionAbout = document.getElementsByClassName('about');

console.log(sectionAbout);

sectionAbout[0].style.color = 'blue'; 

////wyszukiwanie po znaczniku

let allParagraphs = document.getElementsByTagName('p');

console.log(allParagraphs);

//wyszukiwanie po selektorze
//pierwszy

let firstHeading = document.querySelector('.section-title');
console.log(firstHeading);

//ostatni po klasie 
let lastHeading = document.querySelector('#info .section-title');
console.log(lastHeading);



let paragraphs = document.querySelectorAll('#about .content');
console.log(paragraphs);

//nodelist - tablica wezlow rowniez jak kolekkcja