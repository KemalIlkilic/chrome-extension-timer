const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is ${currentTime}`;

// konu ile alakasi yok 4 karakterlik label icin kullaniliyor.
chrome.action.setBadgeText({ text: "TIME" }, () =>
  console.log("Badge text set")
);

const nameElement = document.getElementById("name");
chrome.storage.sync.get(["name"], (data) => {
  //const name = data.name ?? "???";
  //nameElement.textContent = `Hello ${name}`;
  const name = data.name;
  nameElement.textContent = name
    ? `Hello ${name}`
    : "Please enter your name in options section";
});
