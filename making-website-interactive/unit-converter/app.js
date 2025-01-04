const convertBtn = document.querySelector('#convert-btn');
const lengthEl = document.querySelector('#length-el');
const volumeEl = document.querySelector('#volume-el');
const massEl = document.querySelector('#mass-el');
const inputEl = document.querySelector('#display-unit');


function updateConversions(value) {
    const metersToFeet = (value * 3.281).toFixed(3);
    const feetToMeters = (value / 3.281).toFixed(3);
    const litersToGallons = (value * 0.264).toFixed(3);
    const gallonsToLiters = (value / 0.264).toFixed(3);
    const kilogramsToPounds = (value * 2.204).toFixed(3);
    const poundsToKilograms = (value / 2.204).toFixed(3);


    // add to the tags
    lengthEl.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
    volumeEl.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
    massEl.textContent = `${value} kilograms = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilograms} kilograms`;

}


convertBtn.addEventListener('click', () => {
    // takes the value from the input and converts it to a number
    const value = Number(inputEl.value);
    updateConversions(value)

})

