import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);



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



searchInput.addEventListener("keyup", searchCharacter);

function searchCharacter () {
    clear();
    document.querySelector("#curiosity-paragraph").innerHTML = " ";
    const nameShow = dataComplete.filter(characterCard => characterCard.name.startsWith(searchInput.value));
    document.querySelector(".card-container").innerHTML = cards(nameShow);
}


   
statusFilter.addEventListener("change", statusFilterChange);

function statusFilterChange() {
    clear();
    const statusShow = dataComplete.filter(characterCard => characterCard.status === statusFilter.value);
    const quantCharacterStatus = statusShow.length;
    const calcStatus = Math.round(((quantCharacterStatus / numberOfCharacters)*100));
    document.querySelector(".card-container").innerHTML = cards(statusShow);
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterStatus} characters with ${statusFilter.value} status in the show. This means ${calcStatus}% of the characters are ${statusFilter.value}.`
    if(statusFilter.value === "Status"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
}


genderFilter.addEventListener("change", genderFilterChange);

function genderFilterChange() {
    clear();
    const genderShow = dataComplete.filter(characterCard => characterCard.gender === genderFilter.value);
    const quantCharacterGender = genderShow.length;
    const calcGender = Math.round(((quantCharacterGender / numberOfCharacters)*100));
    document.querySelector(".card-container").innerHTML += cards(genderShow);
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterGender} ${genderFilter.value} characters in the show. This means ${calcGender}% of the characters are ${genderFilter.value}.`
    if(genderFilter.value === "Gender"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
}


speciesFilter.addEventListener("change", speciesFilterFilterChange);

function speciesFilterFilterChange() {
    clear();
    const speciesShow = dataComplete.filter(characterCard => characterCard.species === speciesFilter.value);
    const quantCharacterSpecies = speciesShow.length;
    const calcSpecies = Math.round(((quantCharacterSpecies / numberOfCharacters)*100));
    document.querySelector(".card-container").innerHTML += cards(speciesShow);
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterSpecies} characters of the ${speciesFilter.value} species in the show. This means ${calcSpecies}% are ${speciesFilter.value}.`
    if(speciesFilter.value === "Species"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
}

originFilter.addEventListener("change", originFilterChange);

function originFilterChange() {
    clear();
    const originShow = dataComplete.filter(characterCard => characterCard.origin.name === originFilter.value);
    const quantCharacterOrigin = originShow.length;
    const calcOrigin = Math.round(((quantCharacterOrigin / numberOfCharacters)*100));
    document.querySelector(".card-container").innerHTML += cards(originShow);
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterOrigin} characters from ${originFilter.value} in the show. THis means ${calcOrigin}% of the characters are from there.`
    if(originFilter.value === "Origin"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
}

locationFilter.addEventListener("change", locationFilterChange);

function locationFilterChange() {
    clear()
    const locationShow = dataComplete.filter(characterCard => characterCard.location.name === locationFilter.value);
    const quantCharacterLocation = locationShow.length;
    const calcLocation = Math.round(((quantCharacterLocation / numberOfCharacters)*100));
    document.querySelector(".card-container").innerHTML += cards(locationShow);
    document.querySelector("#curiosity-paragraph").innerHTML = `There are ${quantCharacterLocation} characters living or dead at ${locationFilter.value} in the show. This represents ${calcLocation}% of the characters.`
    if(locationFilter.value === "Location"){
        document.querySelector(".card-container").innerHTML = cards(dataComplete);
        document.querySelector("#curiosity-paragraph").innerHTML = "";
    }
}

sortFilter.addEventListener ("change", sortCharacters)

function sortCharacters () {
    clear()
    if(sortFilter.value === "A"){

        const orderedCharacters = dataComplete.sort((a, b) => ((a.name).localeCompare(b.name)));
        document.querySelector(".card-container").innerHTML += cards(orderedCharacters);
        
    }else if (sortFilter.value === "Z"){
        const orderedCharacters = dataComplete.sort((a, b) => ((a.name).localeCompare(b.name)));
        const orderInReverse = orderedCharacters.reverse();
        document.querySelector(".card-container").innerHTML += cards(orderInReverse);
       

    }else if (sortFilter.value === "Sort"){
        document.querySelector(".card-container").innerHTML += cards(dataComplete);
    }
    
}