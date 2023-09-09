function updateCurrentTime() {
    const currentUTCTimeElement = document.getElementById('current-utc-time');

    const now = new Date();
    const westAfricaOffset = 60; // UTC+1, WAT.
    const utcTime = new Date(now.getTime() + westAfricaOffset * 60000);

    currentUTCTimeElement.textContent = `Current Time in West Africa: ${utcTime.toLocaleTimeString()}`;
}

updateCurrentTime();

function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayElement = document.getElementById('current-day');
    
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    
    currentDayElement.textContent = `Today is ${dayOfWeek}`;
}
updateCurrentDay();

