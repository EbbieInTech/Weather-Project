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
  let mainTemperature = document.querySelector("#main-temp");
  let temperature = Math.round(response.data.main.temp);
  mainTemperature.innerHTML = temperature;
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
    alert("Please enter a city");
  }
  let units = "metric";
  let apiKey = "dde0b77715e30bdfed2e6bd8362bfd70";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${currentCity.value}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let key = "dde0b77715e30bdfed2e6bd8362bfd70";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  console.log(latitude, longitude);
  axios.get(url).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
