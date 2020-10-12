//wezeł rodzica

//zwracanie sekcji, bo jest w rodzicem dla UL
let ulParrent = document.getElementsByTagName('ul')[0].parentElement;

console.log(ulParrent);


//wezel dzieci

//tutaj zwraca wszytsko + plus tekst
// let allAboutChildren = document.getElementById('about').childNodes;

// tutaj tylko dzieki bo CHILDREN
let allAboutChildren = document.getElementById('about').children;


console.log(allAboutChildren);

//Wezly rodzeństwa 

let nextsibling = ulParrent.nextSibling;

console.log(nextsibling);


let nextsibling1 = ulParrent.nextElementSibling;

console.log(nextsibling1);

let prevoussibling = ulParrent.previousElementSibling;

console.log(prevoussibling);