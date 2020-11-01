





$(document).ready(function(){
    let slideShow = $('.slide-show');
    
    // lenght jest kluczowe , gdyz jezeli dorzucimy slide bedzie sie powiekszac
    let slideCount = $('.single-slide').length;
    let slideWidth = 100/slideCount;
    //to bedzie nasza flaga - tutaj bedzie nam mowila ktoy aktualnie uzytkownik widzi slajd
    let slideIndex = 0;


    
    //ustaw szerokosc kontenera z klasa slide-show na iloczyn 100 * ilość slidow w jednostkach procentowych 


    //szerokosc ustawianmy przez CSS = 100 *slidecount + %
    slideShow.css('width', 100 * slideCount + '%');
    //szerokość do ustawienia na slajdach 

    //nadaj kazdemy(slowo klucz) elementowi z klasa single-slide szerokosc będąca ilorazem 100 dzieląc przez ilość slidow w procentach. I orzesuniecie w lewo bedące ilorazem 100 dzielac przez ilość slidow pomnożonym przez index tego elementu
    //dla kazdej - each , plus funksji
    $('.single-slide').each(function(index){
        //kazdy 
        $(this).css({width: 100/slideCount + '%',
        left: (100/slideCount) * index + '%'})

    })


    // tutaj blokowanie slajdu na koniec
// function slide(newSlideIndex) {

//     if (newSlideIndex<0 || newSlideIndex>=slideCount) {

//         return;
            //return - zatrzymaj 
//     }


// }


//mozemy uproscic 

// function slide(newSlideIndex)

// slideShow.animate({left: -100 * (newSlideIndex + 1) + '%'} , 500, function() {
//     slideIndex = newSlideIndex;

// i wtedy do  next-slide i prev-slide

// slide(slideIndex + 1);
// slide(slideIndex - 1);


//teraz nadajemy funkcjonalnosci przyciskowi


    $('.next-slide').click(function() {
        console.log('nastepny');


        slideShow.animate({left: -100 * (slideIndex + 1) + '%'} , 500, function() {
            ++slideIndex

        })

    })


    $('.prev-slide').click(function(){
        console.log('nastepny');

        slideShow.animate({left: -100 * (slideIndex - 1) + '%'} , 500, function() {
            slideIndex = slideIndex -1;
        })
        
    })

})


//obsluga klikniec na klawiaturze



$(document).keydown(function(e) {

    console.log(e.keyCode);

    switch(e.keyCode) {
        case 39: '.prev-slide';
        break;
        case 37: '.prev-slide';
        break;
   }

})








