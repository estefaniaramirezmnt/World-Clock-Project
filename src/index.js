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
