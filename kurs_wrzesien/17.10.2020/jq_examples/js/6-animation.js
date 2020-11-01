$(document).ready(function(){
    
    
    1 - //dziala jak display:none - samo hide
    // $(`#about`).hide(2000).show(3000);


    // 2- wygaszanie
    // $(`#about`).fadeOut(2000).fadeIn(3000);


    // 3 slide
    // $(`#about`).slideUp(2000).slideDown(3000, function(){

    //     $(this).css({'background-color': 'red', 'transition': 'all 1s'});


    // });


//animacje niestandardowe - ma 3 parametry - co , czas , co ma byc po nim
$(`#about`).animate({fontSize: '3em' , maringTop: '200px'}, 200 , function(){
    $(this).animate({fontSize: '1em', maringTop: '0px'},2000)



})

})
