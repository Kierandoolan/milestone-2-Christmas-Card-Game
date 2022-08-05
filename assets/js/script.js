const cards = document.querySelectorAll('.card') // For getting cards
const resultDisplay = document.querySelector('#score') // To get my score
var overLay = false;
let score = null; // Score number
score++;
var totalScore;
const timercount = document.querySelector('.timer'); //grabbing the timer Id
let time = null;
let seconds = 0; //The seconds starting point
var timerRunning= false; 
let turnCard = false; 
let lockBoard = false; // To lock the board. help from https://www.youtube.com/watch?v=ZniVgo8U7ek
let firstCard, secondCard;
// const endTime= localStorage.getItem('timer');
// document.getElementById("endtimer").innerHTML = endTime;






// Function for Flip Card
function flipCard () {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip'); // to add flip class

  if (!timerRunning) {  
    timerRunning= true;
     startTimer()   // to start the timer
    }
   // first click
  if (!turnCard) {
      turnCard = true; //change the varible turnCard to true
      firstCard = this; 
  return;  
    }
  
 // second click
  turnCard = false;
  secondCard = this;

  //check if the cards are a match with my checkMatch Function
  checkMatch();


}

 // The function to check if the matches are correct and if not to return back
    function checkMatch (){
        let isMatch = firstCard.dataset.name ===
            secondCard.dataset.name;

            isMatch ? disableCards() : unflipCards();  // The use of ternary operator with the help of freeCodeCamp.Org
            
    }
     // If card are a match it will remove the function flipC ard and leave them as a match
    function disableCards () {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
    // to move score up one 
    resultDisplay.textContent = score++;
    
    if(score === 9) {
    stopTime();
    overlayOn ();
    }
    }
    
    // Aid from https://stackoverflow.com/questions/5480945/refreshing-page-on-click-of-a-button
    function refreshPage(){
      window.location.reload();
  } 

    
    
    

     // function to  unflip card which will be active when two cards match
    //also to lock the board for a certain amount of time incase of user clicking too fast and making errors.
    function unflipCards () {
        lockBoard = true;

        setTimeout(() =>{  //to allow enough time to flip
            
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

    // timer set for doubleClick Function
            doubleClick ()
    }, 1000);
    }
    //In aid to help any errors happening
    function doubleClick (){
    [turnCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]; // The es6 destructuring assignment to keep code small learned from freeCampCode.Org
    }
    // To shuffle the cards at the start of the game help from https://www.youtube.com/watch?v=ZniVgo8U7ek
    (function shuffle() {
        cards.forEach(card => {
          let mixUp = Math.floor(Math.random()  * 12);
          card.style.order = mixUp;
        });
      })();

    
   // To start timer from 0 seconds
timercount.innerHTML = `${seconds}`;

function startTimer(){
  time = setInterval(function () {
    seconds += 1;
    timercount.innerHTML = seconds;
}, 1000);
    console.log('time', time);
  }

 
  // function to stop the time
  
  function stopTime() {
    clearInterval(time);
            time = timercount.innerHTML
            timercount.innerHTML = '0';
    localStorage.setItem('timer', time);
    
    
}

// function to turn on overlay help from https://www.w3schools.com/howto/howto_css_overlay.asp
  function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    
    const end_time= localStorage.getItem('timer');
    console.log('end_time', end_time)
    document.getElementById("endtimer").innerHTML = end_time;
  }

// Aid from https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    cards. forEach(card => card.addEventListener('click', flipCard)) 