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
document.addEventListener('DOMContentLoaded', generateCards)


let fragment = document.createDocumentFragment();


function generateCards() {
    console.log('starting to run function');
        for (let i = icons.length; i > 0; i--) {
            let randomNumber = Math.floor((Math.random() * icons.length));
            let divToAdd = document.createElement('div');
            divToAdd.classList.add('fas');
            divToAdd.classList.add('card');
            divToAdd.classList.add(`${icons[randomNumber]}`);
            fragment.appendChild(divToAdd);
            icons.splice(randomNumber, 1);
        }
    document.body.appendChild(fragment);
}

