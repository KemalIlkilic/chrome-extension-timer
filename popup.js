// Description: This file is responsible for the popup window that appears when the extension icon is clicked.

/*
DOM Manipulation
*/
const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

// updateTimeElements function is used to update <h2 id="timer"></h2>
// and <h2 id="time"></h2> elements in popup.html
function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ? res.timer : 0;
    const hour =
      Math.floor(time / 3600) < 10
        ? `0${Math.floor(time / 3600)}`
        : Math.floor(time / 3600);
    const minute =
      Math.floor((time % 3600) / 60) < 10
        ? `0${Math.floor((time % 3600) / 60)}`
        : Math.floor((time % 3600) / 60);
    const second = time % 60 < 10 ? `0${time % 60}` : time % 60;
    // update <h2 id="timer"></h2> element in popup.html
    timerElement.textContent = `Timer: ${hour}:${minute}:${second}`;
  });

  // according to currentTime, update <h2 id="time"></h2> element in popup.html
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The current time is ${currentTime}`;
}

// setInterval is used to call updateTimeElements function in every second.
updateTimeElements();
setInterval(updateTimeElements, 1000);

// get name from local storage and update <h1 id="name"></h1> element in popup.html
chrome.storage.sync.get(["name"], (data) => {
  const name = data.name;
  nameElement.textContent = name
    ? `Hello ${name}`
    : "Please enter your name in options section";
});

// references of buttons in popup.html
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});
stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});
resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
    timer: 0,
  });
});
