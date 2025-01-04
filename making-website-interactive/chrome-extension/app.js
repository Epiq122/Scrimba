const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')


let myLeads = []
const fragment = document.createDocumentFragment();


//Local Storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'))

// if the store has something in it
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener('click', () => {
    const value = inputEl.value
    myLeads.push(value)
    inputEl.value = ''

    // saves my leads to local storage
    localStorage.setItem('leads', JSON.stringify(myLeads))
    render(myLeads);

})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

//tab section

tabBtn.addEventListener('click', () => {
    //this is to work with firefox
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('leads', JSON.stringify(myLeads))
        render(myLeads)
    });


})

// tabBtn.addEventListener('click', () => {
//     // Check which API is available (Chrome or Firefox)
//     const browserAPI = chrome || browser;
//
//     browserAPI.tabs.query({active: true, currentWindow: true}, function (tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem('leads', JSON.stringify(myLeads))
//         render(myLeads)
//     });
// });


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



