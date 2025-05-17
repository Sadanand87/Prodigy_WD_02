let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);
  return (
    (hrs < 10 ? "0" + hrs : hrs) + ":" +
    (mins < 10 ? "0" + mins : mins) + ":" +
    (secs < 10 ? "0" + secs : secs)
  );
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 1000);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  print("00:00:00");
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (elapsedTime > 0) {
    const lapTime = timeToString(elapsedTime);
    const lapList = document.getElementById("laps");
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(li);
  }
}
