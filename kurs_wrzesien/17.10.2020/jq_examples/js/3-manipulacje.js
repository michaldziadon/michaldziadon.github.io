

//wszstko sie manipuluje przez metody
$(document).ready(function(){

    //jQuery to jest to samo co $
    let sectionHeading = jQuery(`#about h2`);

    console.log(sectionHeading);

    // jezeli chcemy zobaczyc zawartosc - dziala tylko na JQ


    console.log(sectionHeading.text());

    // jezeli chcemy zobaczyc zawartosc - dziala tylko na JQ    

    sectionHeading.text(`Nowy tekst`);




    // mozemy zapakowac obiekty DOM w dollar i wtedy zadziala


    // $(document).getElementbyTagName(`h1`)[0].html(`<span>Nowy </span> Tekscikowo`);

    
    // append() - wstaw zawartość na końcu wybranego selektora
    sectionHeading.append(`dodany nowy tekst`);
    $(`ul`).append(`<li> new item</li>`);
    

    // prepend() - wstaw zawartość na początku wybranego selektora
    sectionHeading.prepend(`na poczatku`);
     
    // after() - wstaw zawartość za wybranym selektorem
    //stwarzamy nowy
    let newHeading = $(`<h3></h3>`);
    newHeading.text(`Nagłowek przed`);
    // eq - wskazuje na element 
    $(`#about p`).eq(1).before(newHeading);


    // before() - wstaw zawartość przed wybranym selektorem
    $(`#about p`).eq(1).after(sectionHeading);



    //usuwanie- czyszcznie
    $(`li:nth-child(3)`).empty();


    $(`li:nth-child(8)`).remove();   


    // zmiana wygladu
    $(`h1`).css(`color` , `red`);

    $(`h1`).css({color: `red` , fontSize: `5em`});

    //dodawanie klas

    $(`h1`).addClass(`main-heading`);

    //dodawanie atrybutow 

    $(`h1`).attr(`id`);

    $(`h1`).attr(`title` , `Główny wątek`);



})