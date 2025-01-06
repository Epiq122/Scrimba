function checkUsername(username) {
  if (username) {
    console.log(username);
  } else {
    throw new Error("No username provided");
  }
}
checkUsername("Toast22");
checkUsername();
