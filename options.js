const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

// callback functionlara dikkat et () => {} gibi.
// Event Handling, Promises and async functions, Array methods map() gibi, buralarda kullaniliyor.
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name: name }, () => {
    console.log(`Saved name: ${name}`);
  });
});

// get ile ['a', 'b'] diyerek birden fazla key icin birden fazla value alabilirsin.
// sonuc olarak data objesi aliyorsun. data = {name: 'babam'}
chrome.storage.sync.get(["name"], (data) => {
  nameInput.value = data.name ?? "???";
  console.log(data);
});
