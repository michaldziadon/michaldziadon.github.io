function changeBackground() {
    document.body.style.backgroundColor = 'orange';
}

document.querySelector('button').onmouseover = changeBackground;

document.querySelector('button').onclick = function() {
    //document.getElementById('main-heading').remove();

    document.getElementById('main-heading').parentElement.removeChild(document.getElementById('main-heading'));
}



function changeColor() {
    document.body.style.color = 'red';
}


document.querySelector('button').addEventListener('click', changeColor);

document.querySelector('button').addEventListener('click', function(){
    this.style.fontSize = '3em';
});

document.querySelector('button:nth-of-type(2)').addEventListener('click', function(event){
    document.querySelector('button').removeEventListener('click', changeColor);
    console.log(event.target);
    event.target.style.backgroundColor = 'green';
});


/* Obsługa obiektu zdarzenia */

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    this.style.backgroundColor = 'gray';
})


document.querySelector('a').addEventListener('click', function(e){

    e.preventDefault();
    e.stopPropagation();
    this.style.backgroundColor = 'blue';
})

document.getElementById('about').addEventListener('click', function(){
    this.style.backgroundColor = 'yellow';
})