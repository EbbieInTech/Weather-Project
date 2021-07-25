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
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
