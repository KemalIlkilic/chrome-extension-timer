const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is ${currentTime}`;

chrome.action.setBadgeText({ text: "TIME" }, () =>
  console.log("Badge text set")
);
