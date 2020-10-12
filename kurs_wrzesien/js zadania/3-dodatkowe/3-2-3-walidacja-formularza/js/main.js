

document.querySelector('form').addEventListener('submit', function(e) {
e.preventDefault();

let errorsList = document.getElementById('message');


//odwolujemy sie do pola i tutaj podaje jezeli puste to wypelnij pole, jezeli wpisane to nie loguje 

let nameInput = document.getElementById('name');

let emailInput = document.getElementById('email');

//aby kasowalo liste i nie pwisywalo komntarza ponowanie
errorsList.innerHTML = '';

if(nameInput.value === '' ) {

console.log('wypelnij pole');

//tworzyny napis

let errorItem = document.createElement('li');
errorItem.innerText = 'Wypelnij Pole Imie';
errorsList.appendChild(errorItem);

}

if(emailInput.value === '' ) {
 
    //tworzyny napis email
    
    let emailerrorItem = document.createElement('li');
    emailerrorItem.innerText = 'Wypelnij Pole email';
    errorsList.appendChild(emailerrorItem);

}
})
