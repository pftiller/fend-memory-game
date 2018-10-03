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
let fragment = document.createDocumentFragment();
let cardContainer = document.createElement('div');
let firstTarget;
let secondTarget;
let guessOne;
let guessTwo;




function generateCards() {
    console.log('starting to run function');
    document.body.innerHTML = `<h1>Matching Game</h1>`;
    for (let i = icons.length; i > 0; i--) {
            let backOfCard = document.createElement('div');
            let frontOfCard = document.createElement('div');
            let card = document.createElement('div');
            cardContainer.classList.add('container');
            card.classList.add('card');
            let randomNumber = Math.floor((Math.random() * icons.length));
            card.addEventListener('click', function(event){
                flipCard(event)
            }, false);
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
    var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};





    // if(event.target.classList.contains('back')) {
    //     event.target.previousElementSibling.classList.toggle('visible');
    //     currentClicks += 1;
    //     if(currentClicks === 1) {
    //         firstTarget = event.target;
    //         guessOne = event.target.previousElementSibling.classList[2];
    //     }
    //     else if(currentClicks === 2) {
    //         secondTarget = event.target;
    //         guessTwo = event.target.previousElementSibling.classList[2];
    //         currentClicks = 0;
    //         if(guessOne == guessTwo) {
    //             correctMatches += 1;
    //                 let firstMatchedCard = document.querySelector('.visible')
    //                 firstMatchedCard.classList.replace('visible', 'matched');
    //                 firstTarget.parentElement.removeEventListener('click', flipCard);
    //                 let secondMatchedCard = document.querySelector('.visible')
    //                 secondMatchedCard.classList.replace('visible', 'matched');
    //                 secondTarget.parentElement.removeEventListener('click', flipCard);
    //         }
    //         else {
    //             setTimeout(() => {
    //                 let firstUnmatchedCard = document.querySelector('.visible')
    //                 firstUnmatchedCard.classList.toggle('visible');
    //                 let secondUnmatchedCard = document.querySelector('.visible')
    //                 secondUnmatchedCard.classList.toggle('visible');
    //             }, 1000);
                
    //         }
    //     }
    // }
    // else {
    //     event.target.classList.toggle('visible');
    //     currentClicks -= 1;
    // }
