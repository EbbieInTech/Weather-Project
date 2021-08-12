//display current date and time
function changeDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[date.getDay()];
  let time = `${now.getHours()}:${
    (now.getMinutes() < 10 ? "0" : "") + now.getMinutes()
  }`;
  let currentDate = `${day} ${time}`;

  return currentDate;
}

let now = new Date();
let newdate = document.querySelector("#main-day");
newdate.innerHTML = changeDate(now);

//weather and geolocation api
function showTemperature(response) {
  console.log(response.data);
  let mainTemperature = document.querySelector(".main-temp");
  let temperature = Math.round(response.data.main.temp);
  let newCity = document.querySelector("#selector-city");
  let descriptionElement = document.querySelector(".description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  mainTemperature.innerHTML = `${temperature} °F`;
  newCity.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute("src", `images/${response.data.weather[0].icon}`);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

//add a search engine & display name
function search(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-text-input");
  let newCity = document.querySelector("#selector-city");
  if (currentCity.value) {
    newCity.innerHTML = `${currentCity.value}`;
  } else {
    newCity.innerHTML = null;
  }
  let units = "imperial";
  let apiKey = "dde0b77715e30bdfed2e6bd8362bfd70";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let key = "dde0b77715e30bdfed2e6bd8362bfd70";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
  axios.get(url).then(showTemperature);
}

function clickGeoButton() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let geoLocationButton = document.querySelector("#geo-location-button");
geoLocationButton.addEventListener("click", clickGeoButton);
