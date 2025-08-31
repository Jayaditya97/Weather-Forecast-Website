// Predefined city data
const cities = [
  {
    name: "New York",
    tempC: 25,
    condition: "Sunny",
    forecast: [
      { day: "Mon", temp: 26, condition: "Sunny" },
      { day: "Tue", temp: 27, condition: "Cloudy" },
      { day: "Wed", temp: 24, condition: "Rainy" },
      { day: "Thu", temp: 22, condition: "Windy" },
      { day: "Fri", temp: 25, condition: "Sunny" }
    ]
  },
  {
    name: "London",
    tempC: 18,
    condition: "Cloudy",
    forecast: [
      { day: "Mon", temp: 17, condition: "Cloudy" },
      { day: "Tue", temp: 19, condition: "Rainy" },
      { day: "Wed", temp: 20, condition: "Sunny" },
      { day: "Thu", temp: 18, condition: "Windy" },
      { day: "Fri", temp: 21, condition: "Cloudy" }
    ]
  },
  {
    name: "Tokyo",
    tempC: 30,
    condition: "Rainy",
    forecast: [
      { day: "Mon", temp: 29, condition: "Rainy" },
      { day: "Tue", temp: 28, condition: "Cloudy" },
      { day: "Wed", temp: 30, condition: "Sunny" },
      { day: "Thu", temp: 31, condition: "Windy" },
      { day: "Fri", temp: 32, condition: "Sunny" }
    ]
  },
  {
    name: "Sydney",
    tempC: 22,
    condition: "Windy",
    forecast: [
      { day: "Mon", temp: 21, condition: "Windy" },
      { day: "Tue", temp: 23, condition: "Sunny" },
      { day: "Wed", temp: 22, condition: "Cloudy" },
      { day: "Thu", temp: 20, condition: "Rainy" },
      { day: "Fri", temp: 24, condition: "Sunny" }
    ]
  }
];

// Render cities
const cityContainer = document.getElementById("cities");
cities.forEach(city => {
  const cityCard = document.createElement("div");
  cityCard.className = "city-card";
  
  const tempF = (city.tempC * 9/5 + 32).toFixed(1);

  cityCard.innerHTML = `
    <h3>${city.name}</h3>
    <p>${city.tempC}°C / ${tempF}°F</p>
    <p>${city.condition}</p>
    <button class="forecast-btn">Show 5-day Forecast</button>
    <div class="forecast">
      ${city.forecast.map(day => `
        <p>${day.day}: ${day.temp}°C - ${day.condition}</p>
      `).join("")}
    </div>
  `;

  cityContainer.appendChild(cityCard);

  // Forecast toggle
  const btn = cityCard.querySelector(".forecast-btn");
  const forecastDiv = cityCard.querySelector(".forecast");
  btn.addEventListener("click", () => {
    forecastDiv.style.display = forecastDiv.style.display === "block" ? "none" : "block";
  });
});

// Favorites (first 3 cities)
const favoritesContainer = document.querySelector(".favorites-container");
cities.slice(0, 3).forEach(city => {
  const favCard = document.createElement("div");
  favCard.className = "favorite-card";
  
  const tempF = (city.tempC * 9/5 + 32).toFixed(1);

  favCard.innerHTML = `
    <h4>${city.name}</h4>
    <p>${city.tempC}°C / ${tempF}°F</p>
    <p>${city.condition}</p>
  `;

  favoritesContainer.appendChild(favCard);
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeToggle");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Background Change (Demo: based on first city's condition & time)
function updateBackground(condition) {
  const hour = new Date().getHours();
  let bg = "images/sunny-day.jpg";

  if (condition === "Sunny" && hour >= 18) bg = "images/sunny-night.jpg";
  else if (condition === "Rainy") bg = "images/rainy.jpg";
  else if (condition === "Cloudy") bg = "images/cloudy.jpg";
  else if (condition === "Windy") bg = "images/windy.jpg";

  document.body.style.background = `url('${bg}') no-repeat center center/cover`;
}

// Set background based on New York for demo
updateBackground(cities[0].condition);
