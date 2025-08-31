// Predefined static weather data
const weatherData = {
  "Rajpura": {
    tempC: 26, tempF: 78, condition: "Mostly Cloudy",
    forecast: [
      { day: "Mon", tempC: 27, condition: "Sunny" },
      { day: "Tue", tempC: 25, condition: "Cloudy" },
      { day: "Wed", tempC: 24, condition: "Rainy" },
      { day: "Thu", tempC: 28, condition: "Sunny" },
      { day: "Fri", tempC: 26, condition: "Thunderstorm" }
    ]
  },
  "Delhi": {
    tempC: 32, tempF: 90, condition: "Sunny",
    forecast: [
      { day: "Mon", tempC: 33, condition: "Sunny" },
      { day: "Tue", tempC: 31, condition: "Hot" },
      { day: "Wed", tempC: 30, condition: "Cloudy" },
      { day: "Thu", tempC: 34, condition: "Sunny" },
      { day: "Fri", tempC: 32, condition: "Hot" }
    ]
  },
  "Mumbai": {
    tempC: 29, tempF: 85, condition: "Rainy",
    forecast: [
      { day: "Mon", tempC: 28, condition: "Rainy" },
      { day: "Tue", tempC: 29, condition: "Thunderstorm" },
      { day: "Wed", tempC: 30, condition: "Rainy" },
      { day: "Thu", tempC: 31, condition: "Cloudy" },
      { day: "Fri", tempC: 29, condition: "Rainy" }
    ]
  },
  "Chennai": {
    tempC: 34, tempF: 93, condition: "Hot",
    forecast: [
      { day: "Mon", tempC: 35, condition: "Sunny" },
      { day: "Tue", tempC: 34, condition: "Hot" },
      { day: "Wed", tempC: 36, condition: "Sunny" },
      { day: "Thu", tempC: 33, condition: "Humid" },
      { day: "Fri", tempC: 34, condition: "Sunny" }
    ]
  }
};

let currentCity = "Rajpura";
let isCelsius = true;

// Select elements
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const forecastContainer = document.getElementById("forecast");
const toggleUnitBtn = document.getElementById("toggle-unit");
const cityButtons = document.querySelectorAll(".city-btn");
const darkModeBtn = document.getElementById("dark-mode");

// Load city weather
function loadWeather(city) {
  currentCity = city;
  const data = weatherData[city];
  cityName.textContent = city;
  condition.textContent = data.condition;
  temperature.textContent = isCelsius ? data.tempC + "°C" : data.tempF + "°F";

  // Change background
  document.body.style.background = getBackground(data.condition);

  // Forecast
  forecastContainer.innerHTML = "";
  data.forecast.forEach(day => {
    const div = document.createElement("div");
    div.classList.add("forecast-day");
    div.innerHTML = `<p>${day.day}</p><p>${day.tempC}°C</p><p>${day.condition}</p>`;
    forecastContainer.appendChild(div);
  });
}

// Toggle Celsius/Fahrenheit
toggleUnitBtn.addEventListener("click", () => {
  isCelsius = !isCelsius;
  toggleUnitBtn.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
  loadWeather(currentCity);
});

// Change city
cityButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    loadWeather(btn.dataset.city);
  });
});

// Dark mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button icon & text
  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "☀️ ";
  } else {
    darkModeBtn.textContent = "🌙 ";
  }
});


// Background based on weather
function getBackground(condition) {
  if (condition.includes("Sunny") || condition.includes("Hot")) {
    return "linear-gradient(to top, #fddb92, #d1fdff)";
  } else if (condition.includes("Cloudy")) {
    return "linear-gradient(to top, #757f9a, #d7dde8)";
  } else if (condition.includes("Rainy") || condition.includes("Thunderstorm")) {
    return "linear-gradient(to top, #667db6, #0082c8, #0082c8, #667db6)";
  } else {
    return "linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)";
  }
}

// Initial load
loadWeather(currentCity);
