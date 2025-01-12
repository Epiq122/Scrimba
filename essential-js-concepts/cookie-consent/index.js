const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalTextEl = document.querySelector("#modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (event) => {
  const consentFormData = new FormData(consentForm);
  console.log(consentFormData);

  event.preventDefault();
  modalTextEl.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading" alt="">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
  `;

  // changes the message
  setTimeout(function () {
    document.querySelector("#uploadText").textContent = "Making the sale... ";
  }, 1500);

  setTimeout(function () {
    // document.querySelector("#uploadText").display = "none";

    modal.innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif" alt="pirate laughing"/>
    </div>`;
  }, 3000);
});
