// definicja funkcji ajax
function ajax( method, url ) {
 
 
    // utworzenie obiektu klasy XMLHttpRequest
    let httpReq = new XMLHttpRequest();
    //jest to typowa klasa w nawiasach
    // console.log(httpReq);
 
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
 
 
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
    // console.log('httpReq');



        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
 
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
 
                let returnData = httpReq.responseText;
                
                //tutaj cwiczymy i chcemy aby sie wyswietlil DIV z fugure/img/figcaption ktore sa wyswietlane - 


                let albumItem = JSON.parse(returnData);

                console.log(albumItem);  
                
                
                const dataContainer = document.getElementById(`display-data`);

                const figure = document.createElement('figure');

                dataContainer.appendChild(figure);

                ////tutaj tworzymy image
                const image = document.createElement('img');

                image.setAttribute('src', albumItem.url);

                image.setAttribute('alt', albumItem.title);

                //wstawiamy image 
                figure.appendChild(image);


                //tutaj tworzymy figCaption
                const figCaption = document.createElement(`figcaption`);
                figCaption.innerText = albumItem.title;

                figure.appendChild(figCaption);




                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
 
            }
 
        }
 
    }
 
 
    // wysłanie danych do serwera
    httpReq.send();
}


ajax('GET' , 'https://jsonplaceholder.typicode.com/photos/10')
 