//
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');


function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let displayEntry = count + " - "
    saveEl.textContent += displayEntry;
    countEl.innerText = 0
    count = 0;


}



