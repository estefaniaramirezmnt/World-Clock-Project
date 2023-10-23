function setCityTime(cityId, timeZone) {
  let cityElement = document.getElementById(cityId);
  let dateElement = cityElement.querySelector(".date");
  let timeElement = cityElement.querySelector(".time");

  function updateTime() {
    dateElement.textContent = moment()
        .tz(timeZone)
        .format(" MMMM Do YYYY");
    timeElement.innerHTML = moment()
      .tz(timeZone)
      .format("h:mm:ss [<small>]A[</small>]");
  }
  updateTime();
  setInterval(updateTime, 1000);
}

setCityTime("new-york", "America/New_York");
setCityTime("london", "Europe/London");
setCityTime("tokyo", "Asia/Tokyo");

function updateCity() {
  let cityTimeZone = document.getElementById("cities-select").value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone).format("h:mm:ss [<small>]A[</small>]");

  let citiesElement = document.getElementById("cities-container");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">
        ${cityDate}
      </div>
    </div>
    <div class="time">
      ${cityTime}
    </div>
  </div>
  <a href="/">Refresh</a>
  `;
}

// Llama a la función updateCity cada segundo (1000 milisegundos)
setInterval(updateCity, 1000);

let citySelectElement = document.getElementById("cities-select");
citySelectElement.addEventListener("change", updateCity);