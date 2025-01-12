const response = "epiq";

// let username;

// if (response) {
//   username = response;
// } else {
//   username = "guest";
// }

// const username = response ? response : "guest";

// OR ||
// const username = response || "guest";
// console.log(username);

// || OR - one true

// const response = "epiq";
const isEmailVerified = true;

// let username;
//
// if (response) {
//   if (isEmailVerified) {
//     username = response;
//   }
// } else {
//   username = "guest";
// }

//  AND both need to be true
const anotherUser = (isEmailVerified && response) || "guest";
console.log(anotherUser);
