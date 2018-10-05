let icons = [
    'fa-birthday-cake',
    'fa-anchor',
    'fa-apple-alt',
    'fa-bicycle',
    'fa-bowling-ball',
    'fa-cloud',
    'fa-fish',
    'fa-grin',
    'fa-birthday-cake',
    'fa-anchor',
    'fa-apple-alt',
    'fa-bicycle',
    'fa-bowling-ball',
    'fa-cloud',
    'fa-fish',
    'fa-grin'
]

document.addEventListener('DOMContentLoaded', generateCards);

let currentClicks = 0;
let correctMatches = 0;
let moves = 0;
let fragment = document.createDocumentFragment();
let cardContainer = document.createElement('div');
let firstTarget;
let secondTarget;
let guessOne;
let guessTwo;





function generateCards() {
    console.log('starting to run function');
    document.body.innerHTML = `<h1>Matching Game</h1><h2 class="left">Matches: ${correctMatches}</h2><h2 class="right">Moves: ${moves}</h2>`;
    for (let i = icons.length; i > 0; i--) {
            let backOfCard = document.createElement('div');
            let frontOfCard = document.createElement('div');
            let card = document.createElement('div');
            cardContainer.classList.add('container');
            card.classList.add('card');
            let randomNumber = Math.floor((Math.random() * icons.length));
            card.addEventListener('click', flipCard)
            frontOfCard.classList.add('back');
            backOfCard.classList.add('front', 'fas', `${icons[randomNumber]}`);
            card.appendChild(backOfCard);
            card.appendChild(frontOfCard);
            fragment.appendChild(card)
            icons.splice(randomNumber, 1);
    }
    cardContainer.appendChild(fragment);
    document.body.appendChild(cardContainer);
}


function flipCard(event) {
    console.log('event fired');
    var element = event.currentTarget;
	if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
            currentClicks -= 1;  
            element.style.transform = "rotateY(0deg)";
        
    }
    else {
      element.style.transform = "rotateY(180deg)";
      currentClicks += 1;
      if(currentClicks ===1) {
            firstTarget = element;
            guessOne = firstTarget.querySelector('div').classList[2];
            console.log(guessOne);
      }
      else if(currentClicks === 2) {
            secondTarget = element;
            guessTwo = secondTarget.querySelector('div').classList[2];
            document.querySelector('.right').innerText=`Moves: ${moves +=1}`;
            currentClicks = 0;
                if(guessOne == guessTwo) {
                    document.querySelector('.left').innerText=`Matches: ${correctMatches +=1}`;
                    firstTarget.removeEventListener('click', flipCard);
                    firstTarget.querySelector('div').classList.add('matched');
                    secondTarget.removeEventListener('click', flipCard);
                    secondTarget.querySelector('div').classList.add('matched');
                }
                else {
                    setTimeout(() => {
                        firstTarget.style.transform = "rotateY(0deg)";
                        secondTarget.style.transform = "rotateY(0deg)";
                    }, 1500);
                }
        }
    }
  }
};