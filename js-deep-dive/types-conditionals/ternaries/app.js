const isAuthenticated = false;
// let cartItemCount = 0;0

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
//   console.log("Please login!");
// }

const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount);

const age = 20;

// let greeting;
//
// if (age < 10) {
//   greeting = "Hey there";
// } else {
//   greeting = "Weird age bruh";
// }
// console.log(greeting);

const greeting = age < 10 ? "Hey there" : "Weird age huh";
console.log(greeting);
