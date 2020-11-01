



$(document).ready(function(){
//nazwa zdarzenia 
    $(`form`).submit(function(e){
        //jezeli nie chcemy wysylac
        e.preventDefault();
        let inputValue = $(`#name`).val();

        console.log(inputValue);

    })


    $(`button`).click(function(){
        $(`button`).css(`background-color` , `green`);

        //jezeli chcemy tylko kliknietego to zmieniamy na this
        // $(this).css(`background-color` , `green`);
        // badz - potrzebujemy function e
        // $(e.target).css(`background-color` , `green`);

    })

        //tutaj mozemy dodac dwa 
    $(`button`).on({
        click: function(e) {
            $(e.target).css(`background-color` , `green`);

        },

        mouseover: function(e) {
            $(e.target).css(`font-size` , `2em`);


        }

    })


})