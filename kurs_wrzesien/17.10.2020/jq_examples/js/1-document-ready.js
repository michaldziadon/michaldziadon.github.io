// $( document ).ready( function() {
//     // kod do wykonania
//     } );



    $(document).ready(function() {
        console.log(`dokument zaladowny`);
        console.log($(`h1`));
        $(`h1`).css('color', `red`).hide(500).show(2000);

    });
//wersja skrócona
    $(function(){
        console.log(`wersja skrócona`);



    })