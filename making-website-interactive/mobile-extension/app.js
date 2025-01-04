import {initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-6e048-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

console.log(database)

const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')


const fragment = document.createDocumentFragment();


inputBtn.addEventListener('click', () => {
    push(referenceInDB, inputEl.value)

    inputEl.value = ''


})

deleteBtn.addEventListener('dblclick', () => {
    remove(referenceInDB)
    ulEl.innerHTML = '';
})

//Get the data from the database
onValue(referenceInDB, (snapshot) => {
    // only runs if the snapshot exists
    const snapshotDoesExist = snapshot.exists();
    if (snapshotDoesExist) {
        const leads = Object.values(snapshot.val())
        render(leads)
    }


})


function render(leads) {
    ulEl.innerHTML = '';
    for (let i = 0; i < leads.length; i++) {
        const newLi = document.createElement('li')
        const newAnchor = document.createElement('a')

        newAnchor.href = leads[i] // sets the url
        newAnchor.textContent = leads[i] // adds the text inside the anchor
        newAnchor.target = "_blank" // sets the target inside the anchor

        newLi.appendChild(newAnchor)
        fragment.appendChild(newLi)
    }
    ulEl.appendChild(fragment)
}



