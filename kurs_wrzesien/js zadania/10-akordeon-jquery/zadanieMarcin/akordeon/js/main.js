$(document).ready(function() {
    $('.accordion').click(function() {
        // console.log('123');
        $('p').slideUp();
        if($(this).find('p').css('display') == 'none') {
            $(this).find('p').slideDown();
        } else {
            $(this).find('p').slideUp();
        }
    })
    
    // $('.accordion').click(function() {
    //     if($(this).find('p').hasClass('open')) {
    //         $(this).find('p').slideUp().removeClass('open');
    //     } else {
    //         $('p').slideUp().removeClass('open');
    //         $(this).find('p').slideDown().addClass('open');
    //     }
    // });
})