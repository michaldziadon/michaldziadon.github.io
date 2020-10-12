//Tworzenie i dodawanie elemetow

let newListItem = document.createElement('li');
//mamy li i dodoajemy text
let textNode = document.createTextNode('New Item')
//text jest tutaj wezlem potomnym i mysimy dodac zaleznosc


//apendChild dodaje relecja i wklada text w LI
newListItem.appendChild(textNode)

//brakuje klasy , nalzey dodac

newListItem.setAttribute('class', 'list-item');

// i brakuje polaczenie z istniejacym UL, musimy znajsc ten element 

document.querySelector('.list').appendChild(newListItem);



console.log(newListItem);
console.log(textNode);


//wstawianie przed

document.getElementById('info').appendChild(document.getElementById('main-header'),
document.getElementsByClassName('section-title')[1]);


//usuwanie tytulu pierwszej sekcji - dlatego uzywamy pierwszy element child

document.getElementById('about').removeChild(document.getElementById('about').firstElementChild);