const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginFormData = new FormData(loginForm);
  console.log(loginFormData);
});
