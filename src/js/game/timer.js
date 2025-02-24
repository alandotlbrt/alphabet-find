let timerInterval;
let startTime;
let elapsedTime = 0;

export function start_timer() {
  
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  startTime = new Date().getTime() - elapsedTime;

  timerInterval = setInterval(updateTimer, 1000);


}

export function stop_timer() {

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;

    startTime = new Date().getTime();
    elapsedTime = 0;
  }
  
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsed = currentTime - startTime;

  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);


  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  document.getElementById('timer').innerText = formattedTime;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}
  