"use strict";

const user1 = "Rob";
const user2 = "Bucky";

const message = `User (user) says: (text)`;

function echo(input) {
  let greeting;
  console.log(input);
}

// console.log(greeting);
echo("welcome to my nightmare");

let greeting2 = function echo2(input) {
  console.log(input);
};

// console.log(greeting);
echo2("welcome to my nightmare");
