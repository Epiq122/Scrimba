const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginFormData = new FormData(loginForm);
  const email = loginFormData.get("astronautEmail");
  const password = loginFormData.get("astronautPassword");

  console.log(email, password);
});
