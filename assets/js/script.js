const cards = document.querySelectorAll('.card')

let turnCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;
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
        lockBoard = true;

        setTimeout(() =>{
            
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');


            doubleClick ()
    }, 1000);
    }
    
    function doubleClick (){
    [turnCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    }


    cards. forEach(card => card.addEventListener('click', flipCard)) 
    
