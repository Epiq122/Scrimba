const messageEl = document.querySelector('#message-el');
const sumEl = document.querySelector('#sum-el');
const cardsEl = document.querySelector('#cards-el');
const playerEl = document.querySelector('#player-el');


let cards = [];


let hasBlackJack = false
let isAlive = false

let sum = 0

let message;


const player = {
    name: 'epiq',
    chips: 120
}
playerEl.textContent = `${player.name}: $${player.chips} `;


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random

    }

}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum += firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards:  `;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = `Do you want a new card?`

    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }


}

