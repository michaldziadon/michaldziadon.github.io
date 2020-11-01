$(document).ready(function(){

// tutaj dla konkretnego

    // $(`ul`).each(function(index){
    //     console.log(index);
    //     //tutaj przesunie kazdy o 10px
    //     $(this).css(`margin-left` , 10 * index + `px`);


    // });



//tutaj dla wszytskicj U

    $(`ul`).each(function(index){
        $(this).find(`li`).each(function(index){
            console.log(index);
            //tutaj przesunie kazdy o 10px
            $(this).css(`margin-left` , 10 * index + `px`);
        });

    })    

})