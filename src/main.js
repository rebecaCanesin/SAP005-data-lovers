import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const dataComplete = data.results;


window.onload = cards();

function cards() {

    for (let character of dataComplete) {
        
        let cardCharacter = document.createElement("div");
        document.querySelector(".card-container").appendChild(cardCharacter);

        cardCharacter.innerHTML = 
        `<div class="card">
            <div class="front">
                <p class="text-front">Name: ${character.name}</p>
                <img src="${character.image}" class="image-character"></img>
            </div>
            <div class="back">
                <p class="text-back-status">Status: ${character.status}</p>
                <p class="text-back-species">Species: ${character.species}</p>
                <p class="text-back-gender">Gender: ${character.gender}</p>
                <p class="text-back-origin">Location of origin: ${character.origin.name}</p>
                <p class="text-back-location">Location of residence: ${character.location.name}</p>
                <p class="text-back-episodes">Number of episodes: ${character.episode.length}</p>
            </div>
        </div>`;
        console.log(cardCharacter);
        
    }

}

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
    document.getElementById('menu').style.borderRadius = '41px';
    }
};