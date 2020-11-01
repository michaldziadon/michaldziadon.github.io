$(document).ready(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users' , function(users) {
    
    // juz przetlumaczone na tablice obiektow
    console.log(users);    
    });
});

//Wyswietl liste uzytkownikow z elementami listy zawierajacymi nastepujaca informacje - 'uzytkownik <imie_nazwisko> mieszka w <miasto>

// bedziemy widziec to w przegladarce

$(document).ready(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users' , function(users) {
    
    
    //stwarzamy ol i wiemy ze jest to tablica
    const newOL = $('<ol></ol>');
    //tablica pozwala na for of , for each 

    users.forEach(function(user) {

        //znacznik li(lista numerowana) appenduje sie do znaczniki ol

        //interpolacja stringow tylko w backtikach
        newOL.append(`<li>Użytkownik ${user.name} mieszka w ${user.address.city} </li>`);

    });

    //juz poza forEach
    $('#display-data').append(newOL);


    console.log(users);    
    });
});