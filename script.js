const newYear = "1 Jan 2022";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  document.getElementById("days").innerHTML = days > 10 ? days : "0" + days;
  document.getElementById("hours").innerHTML = hours > 10 ? hours : "0" + hours;
  document.getElementById("mins").innerHTML =
    minutes > 10 ? minutes : "0" + minutes;
  document.getElementById("seconds").innerHTML =
    seconds > 10 ? seconds : "0" + seconds;
  console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000);
