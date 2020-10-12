



// function changeColor() {
//     document.body.style.color = 'pink';
// }

// document.querySelector('p').addEventListener('click',changeColor);

//dobre zadanie

// document.querySelector('button').addEventListener('click', function() {

//     console.log('klikam');

//     document.getElementsByTagName('p')[0].style.backgroundColor = 'yellow';
//     document.getElementsByTagName('p')[1].style.backgroundColor = 'blue';


// })

//zadanie z CSssem
// document.querySelector('button').addEventListener('click', function() {

//     console.log('klikam');

//     document.getElementsByTagName('p')[0].classList.add('bg-yellow');
//     document.getElementsByTagName('p')[1].classList.add
//     ('bg-red');

// })

//zadanie z tooglem

document.querySelector('button').addEventListener('click', function() {

    console.log('klikam');

    document.getElementsByTagName('p')[0].classList.toggle('bg-yellow');
    document.getElementsByTagName('p')[1].classList.toggle
    ('bg-red');

})
