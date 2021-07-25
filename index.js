let now = new Date();

let date = document.querySelector("#main-day");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
//will return a value between 0 and 6 for the 7 days of the week
// another example :
//if (day === 0) {
//  day = "Sun";}

date.innerHTML = `${day} ${hours}:${minutes}`;
