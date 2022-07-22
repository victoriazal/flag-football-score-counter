let Home = document.getElementById("homeScore")
let homeScore = 0

function plusOneHome(){
    homeScore += 1
    Home.textContent = homeScore
}
function plusTwoHome(){
    homeScore += 2
    Home.textContent = homeScore
}
function plusSixHome(){
    homeScore += 6
    Home.textContent = homeScore
}


let Guest = document.getElementById("guestScore")
let guestScore = 0

function plusOneGuest(){
    guestScore += 1
    Guest.textContent = guestScore
}
function plusTwoGuest(){
    guestScore += 2
    Guest.textContent = guestScore
}
function plusSixGuest(){
    guestScore += 6
    Guest.textContent = guestScore
}
