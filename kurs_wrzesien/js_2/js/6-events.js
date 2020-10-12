



function changeBackground(e) {
    //tutaj zatrzymujemy zdarzenie dla ostatniego zadania
    e.stopPropagation();
    document.body.style.backgroundColor = 'orange';

    
}

document.querySelector('button').onclick = changeBackground;

// Nie mozna podpiac dwoch operacji dla dwoch evetow
document.querySelector('button').onclick = function() {
    document.getElementById('main-header').remove();


}

//najczesniej wykorzystywanym jest inna opcja


function changeColor() {
    document.body.style.color = 'pink';
}

document.querySelector('button').addEventListener('click',changeColor);



document.querySelector('button').addEventListener('click',function() {
    this.style.fontSize = '2px'
});


//obsługa obiektu zdarzenia gdy np strona sie odswizeza

//sposob na nieodswiezanie strony
document.querySelector('form').addEventListener('submit', function(event) {
    //tutaj nieprzeladowuje strony
    event.preventDefault();
    this.style.backgroundColor = "gray";
})

document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    //stop propagacji to jest zatrzymanie zdarzena innego
    e.stopPropagation();
    this.style.backgroundColor = 'blue';

})

document.getElementById('about').addEventListener('click',function() {
    this.style.backgroundColor = 'yellow';


})


