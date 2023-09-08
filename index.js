function updateUTCTime() {
  const utcTimeElement = document.getElementById('utc-time');
  const currentUTCTime = new Date().toUTCString();
  utcTimeElement.textContent = currentUTCTime;
}
updateUTCTime();

// UTC time updated every second (for real-time updating)
setInterval(updateUTCTime, 1000);
