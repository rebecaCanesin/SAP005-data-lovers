import { statusChange, genderChange, speciesChange, originChange, locationChange, searchChange, sortCharacters} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// console.log(data);



const dataComplete = data.results;


const genderFilter = document.querySelector("#genderFilter");
const speciesFilter = document.querySelector("#speciesFilter");
const statusFilter = document.querySelector("#statusFilter");
const originFilter = document.querySelector("#originFilter");
const locationFilter = document.querySelector("#locationFilter");
const searchInput = document.querySelector("#searchCharacter");
const sortFilter = document.querySelector("#sortFilter");
const numberOfCharacters = dataComplete.length;

function cards(arrayCharacters) {
    let cardCharacter = " ";

    for (let character of arrayCharacters) {
        cardCharacter += 
        `<div class="card">
            <div class="front">
                <h2 class="text-front">${character.name}</h2>
                <img src="${character.image}" class="image-character"></img>
            </div>
            <div class="back">
                <ul>
                    <li class="text-back-status">Status: ${character.status}</li>
                    <li class="text-back-species">Species: ${character.species}</li>
                    <li class="text-back-gender">Gender: ${character.gender}</li>
                    <li class="text-back-origin">Origin: ${character.origin.name}</li>
                    <li class="text-back-location">Location: ${character.location.name}</li>
                    <li class="text-back-episodes">Number of episodes: ${character.episode.length}</li>
                </ul>
            </div>
        </div>`; 
    }
    return cardCharacter
}

const cardsComplete = document.querySelector(".card-container");
cardsComplete.innerHTML = cards(dataComplete);

function clear () {
    document.querySelector(".card-container").innerHTML = " ";
    document.querySelector("#curiosity-paragraph").innerHTML = " ";
}



searchInput.addEventListener("keyup", () => {
    clear();
    document.querySelector("#curiosity-paragraph").innerHTML = " ";
    const searchResult = searchChange(searchInput, dataComplete);
    document.querySelector(".card-container").innerHTML = cards(searchResult);
});


statusFilter.addEventListener("change", () => {
    clear();
    const statusResult = statusChange(statusFilter, dataComplete);
    document.querySelector(".card-container").innerHTML = cards(statusResult);
    const quantCharacterStatus = statusResult.length;
    const calcStatus = Math.round(((quantCharacterStatus / numberOfCharacters)*100));
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterStatus} characters with ${statusFilter.value} status in the show. This means ${calcStatus}% of the characters are ${statusFilter.value}.`
    
    if(statusFilter.value === "Status"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
});




genderFilter.addEventListener("change", () => {
    clear();
    const genderResult = genderChange(genderFilter, dataComplete);
    document.querySelector(".card-container").innerHTML += cards(genderResult);
    const quantCharacterGender = genderResult.length;
    const calcGender = Math.round(((quantCharacterGender / numberOfCharacters)*100));
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterGender} ${genderFilter.value} gender characters in the show. This means ${calcGender}% of the characters are ${genderFilter.value} gender.`
    if(genderFilter.value === "Gender"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
});




speciesFilter.addEventListener("change", () => {
    clear();
    const speciesResult = speciesChange(speciesFilter, dataComplete);
    document.querySelector(".card-container").innerHTML += cards(speciesResult);
    const quantCharacterSpecies = speciesResult.length;
    const calcSpecies = Math.round(((quantCharacterSpecies / numberOfCharacters)*100));
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterSpecies} characters of the ${speciesFilter.value} species in the show. This means ${calcSpecies}% are ${speciesFilter.value}.`
    if(speciesFilter.value === "Species"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
});



originFilter.addEventListener("change", () => {
    clear();
    const originResult = originChange(originFilter, dataComplete);
    document.querySelector(".card-container").innerHTML += cards(originResult);
    const quantCharacterOrigin = originResult.length;
    const calcOrigin = Math.round(((quantCharacterOrigin / numberOfCharacters)*100));
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterOrigin} characters from ${originFilter.value} in the show. THis means ${calcOrigin}% of the characters are from there.`
    if(originFilter.value === "Origin"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
});



locationFilter.addEventListener("change", () => {
    clear()
    const locationResult = locationChange(locationFilter, dataComplete);
    document.querySelector(".card-container").innerHTML += cards(locationResult);
    const quantCharacterLocation = locationResult.length;
    const calcLocation = Math.round(((quantCharacterLocation / numberOfCharacters)*100));
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterLocation} characters living or dead at ${locationFilter.value} in the show. This represents ${calcLocation}% of the characters.`
    if(locationFilter.value === "Location"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
});



sortFilter.addEventListener ("change", () => {
    clear();
    const orderedCharacters = sortCharacters(sortFilter.value, dataComplete);
    document.querySelector(".card-container").innerHTML += cards(orderedCharacters);
    
});