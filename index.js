//Current Day of the Week

let today = new Date();
let now = today.getDay();
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let dayOfWeek = daysOfWeek[today.getDay()];
document.getElementById('current-day').textContent = `Today is ${dayOfWeek}`;

// UTC time
function updateUTC() {
  let currentDate = new Date();
  let utcTime = currentDate.getTime();

  document.getElementById('currentUTCTime').innerHTML = utcTime;
}

updateUTC();
setInterval(updateUTC, 100);
