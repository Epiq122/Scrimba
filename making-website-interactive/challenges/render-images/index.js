// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgContainer = document.querySelector('#container')

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]


const fragment = document.createDocumentFragment();

function renderImages() {
    for (let i = 0; i < imgs.length; i++) {
        const newImg = document.createElement("img");
        newImg.src = imgs[i]
        newImg.setAttribute("class", "team-img")
        fragment.appendChild(newImg)

    }
    imgContainer.appendChild(fragment)
}

renderImages()
