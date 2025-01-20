const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalTextEl = document.querySelector("#modal-text");
const modalInner = document.querySelector(".modal-inner");
const declineBtn = document.querySelector("#decline-btn");
const modalChoiceBtn = document.querySelector(".modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtn.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (event) => {
  const consentFormData = new FormData(consentForm);
  const username = consentFormData.get("fullName");

  event.preventDefault();
  modalTextEl.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  // changes the message
  setTimeout(function () {
    document.querySelector("#uploadText").textContent = "Making the sale... ";
  }, 1500);

  setTimeout(function () {
    // document.querySelector("#uploadText").display = "none";

    modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${username} </span>you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif" alt="pirate laughing"/>
    </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
