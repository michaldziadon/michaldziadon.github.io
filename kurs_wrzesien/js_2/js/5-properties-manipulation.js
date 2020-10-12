

let mainHeading = document.getElementById('main-header');
console.dir(mainHeading);


//zawartosc elementu - manipulacja nazwa

mainHeading.innerText = 'To jest nowa zawartosc';
//HTML tutaj jest interpretacja m.in SPAN
mainHeading.innerHTML = 'To jest nowa <span>zawartosc</span>';

mainHeading.outerHTML = '<h3>To jest nowa <span>zawartosc</span></h3>';

//pobiera tejst paragrafu
let paragrapContent = document.querySelector('p').innerText;

console.log(paragrapContent);


//wlasciwosci atrybutow - tutaj zamienimy id H1 - tylko ze zostala zmnieniona na H3:)

mainHeading.id = 'new-id';


mainHeading.classList.add('new-class');
mainHeading.classList.add('second-new-class');
mainHeading.classList.remove('new-class');


//manipulacja stylami

mainHeading.style.fontSize = '5px';

//gdzie to uzyc - np manipulacja stylami zamisat CSS
let allListItems = document.getElementsByClassName('list-item');

for(let i = 0; i<allListItems.length; i++) {
    allListItems[i].style.marginLeft = i * 10 + 'px';

}





