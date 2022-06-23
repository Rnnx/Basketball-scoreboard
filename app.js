const buttons = document.querySelectorAll('.btn')
const resetButton = document.getElementById('reset-btn')
const homeContainer = document.getElementById('home-score-container')
const guestContainer = document.getElementById('guest-score-container')

let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')

let currentHomeScore = 0
let currentGuestScore = 0

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (btn.id == 'home-btn-1') {
            currentHomeScore += 1
            renderGame()
        }
        else if (btn.id == 'home-btn-2') {
            currentHomeScore += 2
            renderGame()
        }
        else if (btn.id == 'home-btn-3') {
            currentHomeScore += 3
            renderGame()
        }
        else if (btn.id == 'guest-btn-1') {
            currentGuestScore += 1
            renderGame()
        }
        else if (btn.id == 'guest-btn-2') {
            currentGuestScore += 2
            renderGame()
        }
        else {
            currentGuestScore += 3
            renderGame()
        }
    })
});

resetButton.addEventListener('click', function() {
    currentHomeScore = 0
    currentGuestScore = 0
    renderGame()
});

function renderGame() {
    scoreHome.textContent = currentHomeScore;
    scoreGuest.textContent = currentGuestScore;
    
    if (currentHomeScore > currentGuestScore) {
        homeContainer.style.border = "1px solid #f5f5f5"
        guestContainer.style.border = "1px solid #050505"
    }   
    else if (currentHomeScore < currentGuestScore) {
        guestContainer.style.border = "1px solid #f5f5f5"
        homeContainer.style.border = "1px solid #050505"
    }
    else {
        homeContainer.style.border = "1px solid #050505"
        guestContainer.style.border = "1px solid #050505"
    }
}