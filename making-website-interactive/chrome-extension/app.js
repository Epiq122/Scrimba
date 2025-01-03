const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')


let myLeads = []
const fragment = document.createDocumentFragment();


//Local Storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener('click', () => {
    const value = inputEl.value
    myLeads.push(value)
    inputEl.value = ''

    // saves my leads to local storage
    localStorage.setItem('leads', JSON.stringify(myLeads))

    renderLeads();
    console.log(localStorage.getItem('leads'))
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    renderLeads()

})


function renderLeads() {
    ulEl.innerHTML = '';
    for (let i = 0; i < myLeads.length; i++) {
        const newLi = document.createElement('li')
        const newAnchor = document.createElement('a')

        newAnchor.href = myLeads[i] // sets the url
        newAnchor.textContent = myLeads[i] // adds the text inside the anchor
        newAnchor.target = "_blank" // sets the target inside the anchor

        newLi.appendChild(newAnchor)
        fragment.appendChild(newLi)
    }
    ulEl.appendChild(fragment)
}



