console.log('jak sie masz');


// z adresu https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10 pobierz dane i wyswietl ja w elemencie 
// z id posts-list. 

// Dane wyswietl w formacie div z dwoma elementami potomnymi - img i h2.
// IMG zawiera obrazek z ww. adresu, a znacznik h2 zawiera id oraz tytuł. Div'ovi nadaj klasę .post



//pobieranie 10 elementow z kafalami typu ID



// to na koncie - postStart .....postLimit paremetryzuje licbe ile sie wyswieli
function getData(postStart, postLimit) {
//modyfikujemy na koncu wartosc doloara & - poczatkowo bylo
//modyfikujemy postLimit - z dolarem aby wyswetlila si ekonkretna liczba
fetch(`https://jsonplaceholder.typicode.com/photos?_start=${postStart}&_limit=${postLimit}`).then(resp=>resp.json()).then(posts=> {
    console.log(posts);

    //mamy trzy opcja na tablicach


    posts.forEach(post => {
        //tworzymy sobie diva
        const postContainer = document.createElement('div');
        //dodajemy odrazy atrybut ID
        postContainer.classList.add('post');
        //mamy pudelko i musimy teraz wrzucac foty

        //twrzymy obiekt img
        const image = document.createElement('img');

        //opieramy na danych
        //post - zwraca pojedyncz elementy
        image.setAttribute('src' , post.url);
        image.setAttribute('alt' , post.title);
        //elementy trzeba wrzucic w kontener bo wisza w powietrzu

        postContainer.appendChild(image);

        //wstawiamy nagłówek

        const heading = document.createElement('h2');
        heading.innerText = `${post.id}. ${post.title}`;
        
        // tutaj wstawiamy nagłowke
        postContainer.appendChild(heading);



        // tutaj wstawiamy img
        document.getElementById('posts-list').appendChild(postContainer);



        //aby dzialalo musimy wszytsko wrzucic do funkcji - obslugujemy przycisk po zrobioeniy finction


    
    });


});

}
//tutaj na koncu dodajemy parametr 0 - bo startujemy od zero
//10 jest od limitu postlimit
getData(0 , 15);

//ustalamy sobie stala od ktorej wychodzimy 10
//alternatywe rozwiazanie
// let postCount = 10;

//tutaj na przycisk bedzie dodawc kolejne
document.querySelector('button').addEventListener('click', function(){

    let postCount = document.getElementsByClassName(`post`).length;
    let postNumber = document.getElementById('next-posts-number').value;
    //aby wywolac funkcje musimy ja uruchomic 
    //tutaj dodajemy let postCount aby bylo plus 10 

        //postNumber jest od limitu na stronie
        getData(postCount, postNumber);
        //alternatywe rozwiazanie
        // postCount += 10;
})



//skoro ubralismy w funkcje , dalo nam mozliwosc modyfikowania dzialania. Bedziemy manipulowac parametrem.
//musimy zmodifikowac parametr w linku













