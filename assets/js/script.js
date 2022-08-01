

const cards = document.querySelectorAll('.card') // For getting cards
const resultDisplay = document.querySelector('#score') // To get my score
var cardsChosen = [] // to have score at 0


let turnCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Function for Flip Card
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
    //check if the cards are a match with my checkMatch Function
    checkMatch();

    
    }

    

 // The function to check if the matches are correct and if not to return back
    function checkMatch (){
        let isMatch = firstCard.dataset.name ===
            secondCard.dataset.name;

            isMatch ? disableCards() : unflipCards();  
    }
     // If card are a match it will remove the function flip card and leave them as a match
    function disableCards () {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    // to move score up one (still working in it)
        resultDisplay.textContent = cardsWon.length     
    }
     // function to  unflip card which will be active when two cards match
    //also to lock the board for a certain amount of time incase of user clicking too fast and making errors.
    function unflipCards () {
        lockBoard = true;

        setTimeout(() =>{
            
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

    // timer set for doubleClick Function
            doubleClick ()
    }, 1000);
    }
    //In aid to help any errors happening
    function doubleClick (){
    [turnCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    }
    // To shuffle the cards at the start of the game
    (function shuffle() {
        cards.forEach(card => {
          let mixUp = Math.floor(Math.random()  * 12);
          card.style.order = mixUp;
        });
      })();


    cards. forEach(card => card.addEventListener('click', flipCard)) 
    
