
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
 

    let nameInput = document.getElementById('fname');
    console.log(nameInput.value);
    let lnameInput = document.getElementById('lname');
    console.log(lnameInput.value);
})