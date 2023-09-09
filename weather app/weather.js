const apiKey = "8f45a053b8a04d70ca9a9c7f9f0b1fb0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // let captain = 'Jean-luc'
    // console.log('Paging ' + captain + ' to report to the bridge.')
    // console.log(`Paging ${captain} to report to the bridge.`)

    var data = await responce.json();
    console.log(data);

    if (responce.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp / 10) + ' C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/hour';


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/Rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/Drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/Mist.png";
        }

        document.querySelector('.weather').style.display = "block";


    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

console.log('KKK');

// checkWeather();