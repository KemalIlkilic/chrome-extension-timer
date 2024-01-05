// Description: This file is responsible for the background process of the extension.
/* 
in every second, it will create alarm.
when the alarm is triggered, it will get the timer from local storage and increment it by 1
and set new value to local storage.
Then it will set the badge text to the incremented value.
 */
chrome.alarms.create({ periodInMinutes: 1 / 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ? res.timer : 0;
    const newTime = time + 1;
    chrome.storage.local.set({ timer: newTime });

    chrome.action.setBadgeText({
      text: `${newTime}`,
    });
    chrome.storage.sync.get(["notificationTime"], (res) => {
      // show notification in every x seconds
      const notificationTime = res.notificationTime
        ? res.notificationTime
        : 100;
      if (time % notificationTime == 0) {
        this.registration.showNotification("Chrome Timer Extension", {
          body: `You have been working for ${notificationTime} seconds.`,
          icon: "icon.png",
        });
      }
    });
  });
});
