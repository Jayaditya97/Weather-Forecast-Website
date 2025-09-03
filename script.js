const weatherCondition = "cloudy"; // hardcoded
const video = document.getElementById("bg-video");

if (weatherCondition === "sunny") {
  video.src = "images/sunny.mp4";
} else if (weatherCondition === "cloudy") {
  video.src = "images/cloudy.mp4";
} else if (weatherCondition === "rainy") {
  video.src = "images/rainy.mp4";
}
