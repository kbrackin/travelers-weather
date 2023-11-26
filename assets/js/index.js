dayjs().format();

// Global
let searchCount = 0;
let dayURL;
let citySearch;
let lat;
let lon;
let locationURL;
let fiveDayURL;
const weatherApiKey = '0fd5a9e8535340ed3a0f200988bebabc';

// Show Local Storage
$(document).ready(function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let savedsrc = localStorage.getItem(key);
    $(`.searched${key}`).text(savedsrc);
    searchCount = i;
  }
  if (searchCount > 0) {
    searchCount++;
  }
});

// Start Search and add history tiles as each are created - starts to overwrite at #5
$("#searchBtn").on('click', function () {

// $("#searchBtn").on("click", function (event) {
//   // set buttons to overwrite when search boxes are full
//   if (searchCount === 5) {
//     searchCount = 0;
//     }
// })

  // create url for location lookup (lat/long)
  event.preventDefault();
  citySearch = $(`#citySearch`).val();
  $(`.history${searchCount}`).text(citySearch);
  localStorage.setItem(searchCount, citySearch);
  searchCount++;
  locationURL = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=1&appid=${weatherApiKey}`;
  $(`#citySearch`).val("");
  $(`.card-body`).removeClass("invisible");
  locationSearch();
});

// //Click function for history buttons
// $(document).on(`click`, `.search`, function (event) {
//   citySearch = $('#citySearch').text();
//   locationURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityState}&limit=1&appid=${weatherApiKey}&units=imperial`;
//   $(`.card-body`).removeClass("invisible");
//   locationSearch();
// });

// Location Search - URL created from input and pulls the lat and lon from it.
function locationSearch() {
  fetch(locationURL)
    .then((response) => response.json())
    .then((location) => {
      console.log(location);

      // Place current location on page
    //   $(`#owLocation`).text(location[0].name + ", " + location[0].state);
      lat = location[0].lat;
      lon = location[0].lon;

      dayURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;
      fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial&exclude=current,minutely,hourly,alerts`;
      dailySearch();
      fiveDaySearch();
    })
    .catch((error) => {
        console.log(error)
      alert("Please enter a valid city name as City,State and try again.");
      $(`.card-body`).addClass("invisible");
    });
}

// Daily Stats
function dailySearch() {
  fetch(dayURL)
    .then((response) => response.json())
    .then((currentW) => {
      $(`#dayDate`).text(`${dayjs.unix(currentW.dt).format("MM-DD-YYYY")}`);
      $(`#dayTemp`).text(`Temp: ${currentW.main.temp}`);
      $(`#dayWind`).text(`Wind: ${currentW.wind.speed}`);
      $(`#dayHum`).text(`Humidity: ${currentW.main.humidity}`);
      $("#dayIcon").attr(
        "src",
        `https://openweathermap.org/img/w/${currentW.weather[0].icon}.png`
      );
    });
}

// 5 Days stats
function fiveDaySearch() {
  return fetch(fiveDayURL)
    .then((response) => response.json())
    .then((fiveDay) => {
      let apiT = 4;
      // Day 1
      $(`#day1`).text(`${dayjs.unix(fiveDay.list[apiT].dt).format("MM-DD-YY")}`);
      $(`#temp1`).text(`Temp: ${fiveDay.list[apiT].main.temp}`);
      $(`#wind1`).text(`Wind: ${fiveDay.list[apiT].wind.speed}`);
      $(`#hum1`).text(`Humidity: ${fiveDay.list[apiT].main.humidity}`);
      $(`#icon1`).attr(
        "src",
        `https://openweathermap.org/img/w/${fiveDay.list[apiT].weather[0].icon}.png`
      );
        apiT = 12;
      // Day 2
      $(`#day2`).text(`${dayjs.unix(fiveDay.list[apiT].dt).format("MM-DD-YY")}`);
      $(`#temp2`).text(`Temp: ${fiveDay.list[apiT].main.temp}`);
      $(`#wind2`).text(`Wind: ${fiveDay.list[apiT].wind.speed}`);
      $(`#hum2`).text(`Humidity: ${fiveDay.list[apiT].main.humidity}`);
      $(`#icon2`).attr(
        "src",
        `https://openweathermap.org/img/w/${fiveDay.list[apiT].weather[0].icon}.png`
      );
        apiT = 20;
      // Day 3
      $(`#day3`).text(`${dayjs.unix(fiveDay.list[apiT].dt).format("MM-DD-YY")}`);
      $(`#temp3`).text(`Temp: ${fiveDay.list[apiT].main.temp}`);
      $(`#wind3`).text(`Wind: ${fiveDay.list[apiT].wind.speed}`);
      $(`#hum3`).text(`Humidity: ${fiveDay.list[apiT].main.humidity}`);
      $(`#icon3`).attr(
        "src",
        `https://openweathermap.org/img/w/${fiveDay.list[apiT].weather[0].icon}.png`
      );
        apiT = 28;
      // Day 4
      $(`#day4`).text(`${dayjs.unix(fiveDay.list[apiT].dt).format("MM-DD-YY")}`);
      $(`#temp4`).text(`Temp: ${fiveDay.list[apiT].main.temp}`);
      $(`#wind4`).text(`Wind: ${fiveDay.list[apiT].wind.speed}`);
      $(`#hum4`).text(`Humidity: ${fiveDay.list[apiT].main.humidity}`);
      $(`#icon4`).attr(
        "src",
        `https://openweathermap.org/img/w/${fiveDay.list[apiT].weather[0].icon}.png`
      );
      apiT = 36;
      // Day 5
      $(`#day5`).text(`${dayjs.unix(fiveDay.list[apiT].dt).format("MM-DD-YY")}`);
      $(`#temp5`).text(`Temp: ${fiveDay.list[apiT].main.temp}`);
      $(`#wind5`).text(`Wind: ${fiveDay.list[apiT].wind.speed}`);
      $(`#hum5`).text(`Humidity: ${fiveDay.list[apiT].main.humidity}`);
      $(`#icon5`).attr(
        "src",
        `https://openweathermap.org/img/w/${fiveDay.list[apiT].weather[0].icon}.png`
      );
    });
}













// dayjs().format()

// const weatherApiKey = '0fd5a9e8535340ed3a0f200988bebabc';

// // const userLat = GeolocationCoordinates.latitude;
// // const userLong = GeolocationCoordinates.longitude;

// // let search = document.getElementById('searchBtn')

// // function searchCity() {
// //     document.getElementById("currentWeather").replaceWith()`<div id="currentWeather">
// //     http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherApiKey}
// //     </div>`
// // }



// // document.getElementById('#currentWeather').innerHTML(`<div id="currentWeather">https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLong}&appid=${weatherApiKey}</div>`)



// // `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${weatherApiKey}`

// // document.getElementById('searchBtn').addEventListener('click', searchCity)
// // dayjs().format()

// // city = document.getElementById('citySearch');
// // search = document.getElementById('searchBtn');

// function searchCity() {
//     let cityValue = document.getElementById('citySearch').value;
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${weatherApiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             let userLat = data[0].lat;
//             let userLon = data[0].lon;
//             fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${userLat}&lon=${userLon}&appid=${weatherApiKey}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     let forecast = data.daily;
//                     let forecastHtml = '';
//                     forecast.forEach(day => {
//                         let date = new Date(day.dt * 1000);
//                         let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
//                         let icon = day.weather[0].icon;
//                         let temp = Math.round(day.temp.day - 273.15);
//                         forecastHtml += `
//                             <div class="forecast-day">
//                                 <div class="forecast-date">${dayOfWeek}</div>
//                                 <div class="forecast-icon"><img src="http://openweathermap.org/img/w/${icon}.png"></div>
//                                 <div class="forecast-temp">${temp}°C</div>
//                             </div>
//                         `;
//                     });
//                     document.getElementById("currentWeather").innerHTML = forecastHtml;
//                 })
//                 .catch(error => console.log(error));
//         })
//         .catch(error => console.log(error));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#searchBtn').addEventListener('click', searchCity);
//   });



