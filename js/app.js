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

let fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', generateCards)

function generateCards() {

    console.log('starting to run function');
    for (let i = icons.length; i > 0; i--) {
            let backOfCard = document.createElement('div');
            let frontOfCard = document.createElement('div');
            let cardContainer = document.createElement('div');
            let randomNumber = Math.floor((Math.random() * icons.length));
            cardContainer.classList.add('container');
            frontOfCard.classList.add('front');
            backOfCard.classList.add('back', 'fas', `${icons[randomNumber]}`);
            frontOfCard.addEventListener('click', function(event){
                if(event.target.classList.contains('front')) {
                     event.target.classList.remove('front');
                     event.target.classList.add('back');
                }
                else {
                     event.target.classList.remove('back');
                     event.target.classList.add('front');
                }
             });
             backOfCard.addEventListener('click', function(event){
                 if(event.target.classList.contains('back')) {
                     event.target.classList.remove('back');
                     event.target.classList.add('front');
                }
                else {
                     event.target.classList.remove('front');
                     event.target.classList.add('back');
                }
             });
            cardContainer.appendChild(backOfCard);
            cardContainer.appendChild(frontOfCard);
            fragment.appendChild(cardContainer)
            icons.splice(randomNumber, 1);
    }
    document.body.appendChild(fragment);
}