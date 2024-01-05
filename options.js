const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const timeInput = document.getElementById("time-input");

// callback functionlara dikkat et () => {} gibi.
// Event Handling, Promises and async functions, Array methods map() gibi, buralarda kullaniliyor.
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({ name, notificationTime });
});

// get ile ['a', 'b'] diyerek birden fazla key icin birden fazla value alabilirsin.
// sonuc olarak data objesi aliyorsun. data = {name: 'babam'}
//inputa Kemal yazdigi ise daha once kayitli sekilde durmasini sagliyor.
chrome.storage.sync.get(["name", "notificationTime"], (data) => {
  nameInput.value = data.name ?? "???";
  timeInput.value = data.notificationTime ?? 100;
});
