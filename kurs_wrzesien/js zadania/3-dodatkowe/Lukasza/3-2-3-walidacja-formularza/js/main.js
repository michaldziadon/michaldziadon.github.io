document.querySelector('form').addEventListener('submit', function(e){

    let errorsList = document.getElementById('message');
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let agreementCheckbox = document.getElementById('agreement-1');

    errorsList.innerHTML = '';

    if(nameInput.value === '') {
        e.preventDefault();
        let nameErrorItem = document.createElement('li');
        nameErrorItem.innerText = 'Wypełnij pole imię i nazwisko';
        errorsList.appendChild(nameErrorItem);
    }

    if(emailInput.value === '') {
        e.preventDefault();
        let emialErrorItem = document.createElement('li');
        emialErrorItem.innerText = 'Wypełnij pole email';
        errorsList.appendChild(emialErrorItem);
    }

    if(!agreementCheckbox.checked) {
        e.preventDefault();
        let checkboxErrorItem = document.createElement('li');
        checkboxErrorItem.innerText = 'Zaznacz zgodę';
        errorsList.appendChild(checkboxErrorItem);
    }

});


document.getElementById('all-agreements').addEventListener('change', function(){
    let agreementCheckbox = document.getElementById('agreement-1');
    let agreementCheckboxSecond = document.getElementById('agreement-2');

    agreementCheckbox.checked = this.checked;
    agreementCheckboxSecond.checked = this.checked;
    agreementCheckbox.disabled = this.checked;
    agreementCheckboxSecond.disabled = this.checked;

});