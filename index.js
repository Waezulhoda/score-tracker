homeScore=0
home_el=document.getElementById("home")

function home1func(){
    homeScore+=1
    home_el.textContent=homeScore
}
function home2func(){
    homeScore+=2
    home_el.textContent=homeScore
}
function home3func(){
    homeScore+=3
    home_el.textContent=homeScore
}

guestScore=0
guest_el=document.getElementById("guest")

function guest1func(){
    guestScore+=1
    guest_el.textContent=guestScore
}

function guest2func(){
    guestScore+=2
    guest_el.textContent=guestScore
}

function guest3func(){
    guestScore+=3
    guest_el.textContent=guestScore
}