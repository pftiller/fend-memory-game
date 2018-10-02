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





function generateCards() {
    console.log('starting to run function');
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


function flipCard(event) {
    console.log('hello', event.target);
    if(event.target.classList.contains('back')) {
        event.target.classList.remove('back');
        event.target.classList.add('front');
        event.target.classList.toggle("active");;
        subtractClick();
    }
    else {
        event.target.classList.remove('front');
        event.target.classList.toggle("active");;
        addClick();
    }
}
function addClick() {
    currentClicks += 1;
    if(currentClicks === 2) {
        currentClicks = 0;
        console.log(currentClicks);
        compareCards();
    }
    else {
        console.log(currentClicks);
    }
}

function subtractClick() {
    if(currentClicks > 0) {
        currentClicks -= 1;
        console.log(currentClicks);
    }
}


function compareCards() {
    console.log('in compareCards');
    let comparisonArray = document.querySelectorAll('.active');
    console.log(comparisonArray);
    if(comparisonArray[0].previousElementSibling.classList == comparisonArray[1].previousElementSibling.classList) {
        alert('match!')
    }
    else {
        let activeCards = document.querySelectorAll('.active');
        activeCards.classList.toggle("active");
        activeCards.classList.remove('front');
        activeCards.classList.add('.back');
    }
}