


//odpalamy dopiero po nacisnieciu

$(document).ready(function(){
    // console.log('123');

    //obsluga klikniecia - po kliknieciu w diva rozciagnij h2

    //funkcja poszukiwania w obrebie elementu

    $('.accordion').click(function() {
        $('p').removeClass('open');

        if($(this).find('p').hasClass('open')){
            $(this).find('p').slideUp().removeClass('open');

        } else {
            $('p').slideUp().removeClass('open');
            $(this).find('p').slideDown().addClass('open');

        }


        })


    })




