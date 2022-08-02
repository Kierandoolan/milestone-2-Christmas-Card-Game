
const cards = document.querySelectorAll('.card') // For getting cards
const resultDisplay = document.querySelector('#score') // To get my score
var score = 0;
score++;
const timercount = document.querySelector("#timer");


let turnCard = false;
let lockBoard = false;
let firstCard, secondCard;



// Function for Flip Card
function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip')
    startTimer();
      

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
    
    // to move score up one 
    resultDisplay.textContent = score++;
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

    
   
let time;
let seconds = 0;
let Starttime = false;
timercount.innerHTML = `${seconds}`;

function startTimer(){
    time = setInterval(() => {
        seconds++;
        timercount.innerHTML = seconds;
    }, 1000);
    
}
      
        
      
      
     

  

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
    cards. forEach(card => card.addEventListener('click', flipCard)) 
    
