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
let guessOne;
let guessTwo;




function generateCards() {
    console.log('starting to run function');
    document.body.innerHTML = `<h1>Matching Game</h1>`;
    for (let i = icons.length; i > 0; i--) {
            let backOfCard = document.createElement('div');
            let frontOfCard = document.createElement('div');
            let cardContainer = document.createElement('div');
            let randomNumber = Math.floor((Math.random() * icons.length));
            cardContainer.classList.add('container');
            cardContainer.addEventListener('click', function(event){
                 
                flipCard(event)
            });
            frontOfCard.classList.add('card', 'front');
            backOfCard.classList.add('card', 'back', 'fas', `${icons[randomNumber]}`);
            cardContainer.appendChild(backOfCard);
            cardContainer.appendChild(frontOfCard);
            fragment.appendChild(cardContainer)
            icons.splice(randomNumber, 1);
    }
    document.body.appendChild(fragment);
}


function flipCard(event, u) {
    console.log('hello', event.target);
    if(event.target.classList.contains('back')) {
        event.target.classList.replace('back', 'front');
        event.target.classList.toggle('active');  
        currentClicks -= 1;
    }
    else {
        event.target.classList.replace('front','back');
        event.target.classList.toggle('active');  
        currentClicks += 1;
        if(currentClicks === 1) {
            guessOne = event.target.previousElementSibling.classList[3];
        }
        else if(currentClicks === 2) {
            guessTwo = event.target.previousElementSibling.classList[3];
            currentClicks = 0;
            if(guessOne == guessTwo) {
                correctMatches += 1;
                    let firstMatchedCard = document.querySelector('.active')
                    firstMatchedCard.classList.replace('active', 'matched');
                    firstMatchedCard.removeEventListener('click', flipCard)
                    let secondMatchedCard = document.querySelector('.active')
                    secondMatchedCard.classList.replace('active', 'matched');
                    secondMatchedCard.removeEventListener('click', flipCard)
            }
            else {
                setTimeout(() => {
                    let firstUnmatchedCard = document.querySelector('.active')
                    firstUnmatchedCard.classList.replace('back', 'front');
                    firstUnmatchedCard.classList.toggle('active');
                    let secondUnmatchedCard = document.querySelector('.active')
                    secondUnmatchedCard.classList.replace('back', 'front');
                    secondUnmatchedCard.classList.toggle('active');
                }, 1000);
                
            }
        }
        else {
          
        }
    }
}
