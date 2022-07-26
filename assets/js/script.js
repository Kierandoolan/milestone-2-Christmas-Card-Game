const cards = document.querySelectorAll('.card')

let turnCard = false;
let firstCard, secondCard;

function flipCard () {
    this.classList.add('flip')

    if (!turnCard) {
        turnCard = true ;
        firstCard = this; 
}   else {
    turnCard = false ; 
    secondCard= this;

    console.log ({firstCard, secondCard})
}
}
    cards. forEach(card => card.addEventListener('click', flipCard))
