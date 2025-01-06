function startCountdown(device) {
  let secondsRemaining = 3;
  const interval = setInterval(() => {
    console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`);
    secondsRemaining--;
    if (secondsRemaining === 0) {
      clearInterval(interval);
      console.log(`Your ${device} is shutting down`);
    }
  }, 1000);
}

startCountdown("computer");
/*
Challenge:
1. Every 1000 milliseconds, log out:
  `Your device will shut down in ${secondsRemaining} seconds`.
  Decrement 'secondsRemaining'.
2. When 'secondsRemaining' hits zero, you should log out
  `Your device is shutting down`.
  At this point, the setInterval should be cleared. What method
  can you use to do that? (We used clearTimeout to cancel setTimeout.) */
