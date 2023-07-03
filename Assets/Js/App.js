let player = {
    name: "Arslan",
    chips: 145,
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messagEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandonCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    renderGame()
}

function renderGame() {
    cardEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "wohoo! you have got blackjack!"
        hasBlackJack = true

    } else {
        message = "you are out of game!"
        isAlive = false
    }
    // console.log(message)
    messagEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandonCard()
        cards.push(card)
        sum += card
        renderGame()

    }

}


