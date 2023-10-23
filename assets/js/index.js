dayjs().format()

const weatherApiKey = '0fd5a9e8535340ed3a0f200988bebabc';

const city = document.getElementById('#citySearch').value

const userLat = GeolocationCoordinates.latitude;
const userLong = GeolocationCoordinates.longitude;

let search = document.getElementById('searchBtn')

function searchCity() {
    document.getElementById("currentWeather").replaceWith()`<div id="currentWeather">
    http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherApiKey}
    </div>`
}



document.getElementById('#currentWeather').replaceWith(`https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLong}&appid=${weatherApiKey}`)



`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`

