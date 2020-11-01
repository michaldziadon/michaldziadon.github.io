


console.log('test');



fetch('https://danepubliczne.imgw.pl/api/data/synop/').then(resp=>resp.json()).then(weatherArrey=>{
        console.log(weatherArrey);

    for(let cityWeather of weatherArrey ) {
        console.log(cityWeather);


        //tutaj tworzymy div odnosnie miasta i on otworzy 62 - tylko i jest miast
        let weatherDiv = document.createElement('div');
        let cityHeading = document.createElement('h2');
        let temperatureElement = document.createElement('p');
        let pressureElement = document.createElement('p');


        
        //upiekszamy przez bootstrap

        weatherDiv.className = 'col-sm-6 col-lg-4 border text-center'



        //ladujemy do nich tresci - wstawiamy tekst do znacznika - = to zwroci nazwy miast
        cityHeading.innerText = cityWeather.stacja;

        temperatureElement.innerText = cityWeather.teperatura + ' st. C.';

        pressureElement.innerText = cityWeather.cisnienie + ' hPa ';




        //zrobimy naglowek
        weatherDiv.appendChild(cityHeading);
        weatherDiv.appendChild(temperatureElement);
        weatherDiv.appendChild(pressureElement);




        document.querySelector('.weather-list').appendChild(weatherDiv);

    }

    })

