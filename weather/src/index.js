//Get Current Time
let now = new Date();
// Date-Time HTML element
let dateTime = document.querySelector(".date-time");
//Day array
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//Get Current Day
let day = days[now.getDay()];
//Get Current Hour
let hours = now.getHours();
//Get Minutes
let minutes = now.getMinutes();
//Validate and manipulate minute display
minutes = minutes < 10 ? "0" + minutes : minutes;
//Update Date-Time HTML
dateTime.innerHTML = `${day} ${hours}:${minutes}`;
//Search and Display City
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let currentCity = document.querySelector("h1");
  if (searchInput.value) {
    currentCity.innerHTML = `${searchInput.value}`;
    //API Info
    let apiKey = "b5ff830c8o2f986ffadf3d6aab41t4c5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showTemperature);
  }
}
//Temperature
function showTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  currentTemperature.innerHTML = `${temperature}°F`;
  console.log(temperature);
}
//EventListener
let form = document.querySelector("#city-search");
form.addEventListener("submit", search);
