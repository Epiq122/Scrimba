function displayTrafficLight(light) {
  console.log(light);
}

setTimeout(displayTrafficLight, 3000, "🟢");

displayTrafficLight("🏮");

/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs.
       The answer is 'Lima' and it's 10 points for getting it right.
*/

function logAnswer(answer, points) {
  console.log(
    `The answer is ${answer} of course! If you got that right, give yourself ${points} points!.`,
  );
}
console.log("What is the capital of Peru");
setTimeout(logAnswer, 3000, "Lima", 10);
