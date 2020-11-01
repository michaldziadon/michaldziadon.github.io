

//najperw wywolujemy funkcje a pozniej robimy nasluch 

//zadanie z testu strona 16
function getData(e) {
    e.preventDefault(e);
    console.log('test');

    fetch('https://jsonplaceholder.typicode.com/users/1').then(resp=>resp.json()).then(user=>{
        console.log(user);

        const userDataContainer = document.getElementById('user-data');



        const userIdElement = document.createElement('p');

        userIdElement.innerText = 'Nazwa uzytkownika: ' + user.id;

        userDataContainer.appendChild(userIdElement);



        const userNameElement = document.createElement('a');

        userNameElement.innerText = 'Nazwa uzytkownika: ' + user.username;

        userDataContainer.appendChild(userNameElement);
        






        const userEmailElement = document.createElement('p');

        userEmailElement.innerText = 'Nazwa uzytkownika: ' + user.website;

        userDataContainer.appendChild(userEmailElement);



    })


}

document.querySelector('a').addEventListener(`click` , getData);

// tutaj jest nasluch przycisku, gdzie przy linku trzeba dodac e.preventDefault - aby sie nie odswiezala

// document.querySelector('a').addEventListener(`click` , function(e) {
//     e.preventDefault(e);
//     console.log('test');
//     //link ma defoultowe odswiezanie to trzeba to obsluzyc
 
// });