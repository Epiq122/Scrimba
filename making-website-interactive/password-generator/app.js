const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generatePasswordEl = document.querySelector("#generate-password-el");
const showPasswordOne = document.querySelector("#field-1");
const showPasswordTwo = document.querySelector("#field-2");

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];

    }
    return randomPassword;

}

generatePasswordEl.addEventListener("click", () => {
    showPasswordOne.textContent = generatePassword();
    showPasswordTwo.textContent = generatePassword();
});

