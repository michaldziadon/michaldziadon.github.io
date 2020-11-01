


//odpalamy dopiero po nacisnieciu

$(document).ready(function(){
    // console.log('123');

    //obsluga klikniecia - po kliknieciu w diva rozciagnij h2

    //funkcja poszukiwania w obrebie elementu

    $('.accordion').click(function() {
        // console.log('123');

///po kliknieciu chce aby slidedown- tylko tutaj wszytsko sie otwiera sie wszytsko jezeli damy tylko P , nalezy this - plus find

        $('p').slideUp();

        if($(this).find('p').css('display') == 'none') {
            $(this).find('p').slideDown();
        } else {

        $(this).find('p').slideUp();
    }


    })

})


