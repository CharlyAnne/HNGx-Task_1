function updateUTCTime() {
  const utcTimeElement = document.getElementById('utc-time');
  const currentUTCTime = new Date().toUTCString();
  utcTimeElement.textContent = currentUTCTime;
}
updateUTCTime();
// UTC time updated every second (for real-time updating)
setInterval(updateUTCTime, 1000);

function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayElement = document.getElementById('current-day');
    
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    
    currentDayElement.textContent = `Today is ${dayOfWeek}`;
}
updateCurrentDay();
