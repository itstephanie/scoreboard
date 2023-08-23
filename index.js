let homeScore = document.getElementById("home-pts")
let homeCount = 0
let guestScore = document.getElementById("guest-pts")
let guestCount = 0


function addToHome(points) {
    homeCount += points
    homeScore.innerText = homeCount
}

function addToGuest(points) {
    guestCount += points
    guestScore.innerText = guestCount
}


