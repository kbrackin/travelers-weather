// //DateJS for time conversions
// dayjs().format();

// // Variables used outside of functions
// let searchCount = 0;
// let dayURL = "";
// let loc = "";
// let lat = "";
// let lon = "";
// let locURL = "";
// let fiveDURL = "";

// // loop to display items in local storage
// $(document).ready(function () {
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let savedsrc = localStorage.getItem(key);
//     $(`.searched${key}`).text(savedsrc);
//     searchCount = i;
//   }
//   if (searchCount > 0) {
//     searchCount++;
//   }
// });

// // Start Search and add history tiles as each are created - starts to overwrite at #5
// // $("#search").click(function ()

// $("#citySelect").on("submit", function (event) {
//   // set buttons to overwrite when search boxes are full
//   if (searchCount === 9) {
//     searchCount = 0;
//   }

//   // create url for location lookup (lat/long)
//   event.preventDefault();
//   loc = $(`#cityInp`).val();
//   $(`.searched${searchCount}`).text(loc);
//   localStorage.setItem(searchCount, loc);
//   searchCount++;
//   locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=0fd5a9e8535340ed3a0f200988bebabc`;
//   $(`#cityInp`).val("");
//   $(`.card-body`).removeClass("invisible");
//   locationSearch();
// });

// //Click function for history buttons
// $(document).on(`click`, `.search`, function (event) {
//   loc = $(this).text();
//   locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=0fd5a9e8535340ed3a0f200988bebabc`;
//   $(`.card-body`).removeClass("invisible");
//   locationSearch();
// });

// // Location Search - URL created from input and pulls the lat and lon from it.
// function locationSearch() {
//   // send location lookup to api
//   fetch(locURL)
//     .then((response) => response.json())

//     .then((location) => {
//       console.log(location);

//       // Place current location on page
//       $(`#owLocation`).text(location[0].name + ", " + location[0].state);
//       lat = location[0].lat;
//       lon = location[0].lon;

//       dayURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0fd5a9e8535340ed3a0f200988bebabc&units=imperial`;
//       fiveDURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0fd5a9e8535340ed3a0f200988bebabc&units=imperial&exclude=current,minutely,hourly,alerts`;
//       dailySearch();
//       fiveDaySearch();
//     })
//     .catch((error) => {
//       alert("Please enter a valid city name as City,State and try again.");
//       $(`.card-body`).addClass("invisible");
//     });
// }

// // Daily Stats
// function dailySearch() {
//   fetch(dayURL)
//     .then((response) => response.json())
//     .then((currentW) => {
//       $(`#dayDate`).text(`${dayjs.unix(currentW.dt).format("MM-DD-YYYY")}`);
//       $(`#dayTemp`).text(`Temp: ${currentW.main.temp}`);
//       $(`#dayWind`).text(`Wind: ${currentW.wind.speed}`);
//       $(`#dayHum`).text(`Humidity: ${currentW.main.humidity}`);
//       $("#dayIcon").attr(
//         "src",
//         `https://openweathermap.org/img/w/${currentW.weather[0].icon}.png`
//       );
//     });
// }

// // 5 Days stats
// function fiveDaySearch() {
//   return fetch(fiveDURL)
//     .then((response) => response.json())
//     .then((fiveDay) => {
//       let t = 4;
//       // Day 1
//       $(`#date1`).text(`${dayjs.unix(fiveDay.list[t].dt).format("MM-DD-YY")}`);
//       $(`#temp1`).text(`Temp: ${fiveDay.list[t].main.temp}`);
//       $(`#wind1`).text(`Wind: ${fiveDay.list[t].wind.speed}`);
//       $(`#hum1`).text(`Humidity: ${fiveDay.list[t].main.humidity}`);
//       $(`#icon1`).attr(
//         "src",
//         `https://openweathermap.org/img/w/${fiveDay.list[t].weather[0].icon}.png`
//       );
//       let t = 12;
//       // Day 2
//       $(`#date2`).text(`${dayjs.unix(fiveDay.list[t].dt).format("MM-DD-YY")}`);
//       $(`#temp2`).text(`Temp: ${fiveDay.list[t].main.temp}`);
//       $(`#wind2`).text(`Wind: ${fiveDay.list[t].wind.speed}`);
//       $(`#hum2`).text(`Humidity: ${fiveDay.list[t].main.humidity}`);
//       $(`#icon2`).attr(
//         "src",
//         `https://openweathermap.org/img/w/${fiveDay.list[t].weather[0].icon}.png`
//       );
//       let t = 20;
//       // Day 3
//       $(`#date3`).text(`${dayjs.unix(fiveDay.list[t].dt).format("MM-DD-YY")}`);
//       $(`#temp3`).text(`Temp: ${fiveDay.list[t].main.temp}`);
//       $(`#wind3`).text(`Wind: ${fiveDay.list[t].wind.speed}`);
//       $(`#hum3`).text(`Humidity: ${fiveDay.list[t].main.humidity}`);
//       $(`#icon3`).attr(
//         "src",
//         `https://openweathermap.org/img/w/${fiveDay.list[t].weather[0].icon}.png`
//       );
//       let t = 28;
//       // Day 4
//       $(`#date4`).text(`${dayjs.unix(fiveDay.list[t].dt).format("MM-DD-YY")}`);
//       $(`#temp4`).text(`Temp: ${fiveDay.list[t].main.temp}`);
//       $(`#wind4`).text(`Wind: ${fiveDay.list[t].wind.speed}`);
//       $(`#hum4`).text(`Humidity: ${fiveDay.list[t].main.humidity}`);
//       $(`#icon4`).attr(
//         "src",
//         `https://openweathermap.org/img/w/${fiveDay.list[t].weather[0].icon}.png`
//       );
//       let t = 36;
//       // Day 5
//       $(`#date5`).text(`${dayjs.unix(fiveDay.list[t].dt).format("MM-DD-YY")}`);
//       $(`#temp5`).text(`Temp: ${fiveDay.list[t].main.temp}`);
//       $(`#wind5`).text(`Wind: ${fiveDay.list[t].wind.speed}`);
//       $(`#hum5`).text(`Humidity: ${fiveDay.list[t].main.humidity}`);
//       $(`#icon5`).attr(
//         "src",
//         `https://openweathermap.org/img/w/${fiveDay.list[t].weather[0].icon}.png`
//       );
//     });
// }













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



