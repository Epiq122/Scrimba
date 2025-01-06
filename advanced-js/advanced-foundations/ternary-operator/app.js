const playerGuess = 6;
const correctAnswer = 6;

// let message = '';
//
// if (playerGuess === correctAnswer) {
//     message = "Correct!"
// } else {
//     message = "Incorrect"
// }
// console.log(message)


/*
Challenge
1. Now improve the functionality of this code by
   letting the player know if their guess was too high,
   too low, or exactly right.
*/

const message = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!'

console.log(message)

/*
Challenge
1. Refactor the if else statement to use a ternary operator.
*/
const message = playerGuess === correctAnswer ? "exactly right!"
    : playerGuess < correctAnswer
        ? "too low"
        : "too high"
console.log(message)



