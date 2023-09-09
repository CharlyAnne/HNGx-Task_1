function updateCurrentTime() {
  const currentUTCTimeElement = document.getElementById('current-utc-time');

  const now = new Date();
  const options = {
    timeZone: 'Africa/Lagos', // (WAT)
  };
  const watTime = now.toLocaleTimeString('en-US', options);

  currentUTCTimeElement.textContent = `${watTime}`;
}
updateCurrentTime();

function updateCurrentDay() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDayElement = document.getElementById('current-day');

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];

  currentDayElement.textContent = `Today is ${dayOfWeek}`;
}
updateCurrentDay();
