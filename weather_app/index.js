//Api key
const apiKey = "02161cbca58aad7e7e9b5e3521a7308d";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      showWeather(data);
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}

function showWeather(data) {
  const { name, main, weather } = data;
  const html = `
    <h2>Weather in ${name}</h2>
    <p>🌡️ Temperature: ${main.temp}°C</p>
    <p>☁️ Condition: ${weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather Icon" />
  `;
  document.getElementById("weatherResult").innerHTML = html;
}
