const cards = document.querySelectorAll('.card')

let turnCard = false;
let firstCard, secondCard;

function flipCard () {
    this.classList.add('flip')

    if (!turnCard) {
        turnCard = true;
        firstCard = this; 

    return; 
    }
    turnCard = false;
    secondCard = this;
    
    checkMatch();
    }


    function checkMatch (){
        let isMatch = firstCard.dataset.name ===
            secondCard.dataset.name;

            isMatch ? disableCards() : unflipCards();  
    }
     
    function disableCards () {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } 
    
    function unflipCards () {
        setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    }, 1000);
    }
    



    cards. forEach(card => card.addEventListener('click', flipCard)) 
    
