import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);



const dataComplete = data.results;


window.onload = cards();

const genderFilter = document.querySelector("#genderFilter");
const speciesFilter = document.querySelector("#speciesFilter");
const statusFilter = document.querySelector("#statusFilter");
const originFilter = document.querySelector("#originFilter");
const locationFilter = document.querySelector("#locationFilter");
const searchInput = document.querySelector("#searchCharacter");



function cards() {
    let cardCharacter = " ";

    for (let character of dataComplete) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}

function clear () {
    document.querySelector(".card-container").innerHTML = " ";
}

searchInput.addEventListener("keyup", searchCharacter);

function searchCharacter () {
    clear();
    const nameShow = dataComplete.filter(characterCard => characterCard.name.startsWith(searchInput.value));
    if (searchInput.value === "Todos" || searchInput === "All") {
        cards();
    }

    let cardCharacter = " ";
    for (let character of nameShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}


statusFilter.addEventListener("change", statusFilterChange);
//console.log(statusFilter.length);

function statusFilterChange() {
    clear();
    const statusShow = dataComplete.filter(characterCard => characterCard.status === statusFilter.value);
    const quantCharacterStatus = statusShow.length;
    if (statusFilter.value === "Status") {
        cards();
    }
    //cards (statusShow);

    let cardCharacter = " ";
    for (let character of statusShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}

genderFilter.addEventListener("change", genderFilterChange);
//console.log(genderFilter.length);
function genderFilterChange() {
    clear();
    const genderShow = dataComplete.filter(characterCard => characterCard.gender === genderFilter.value);
    const quantCharacterGender = genderShow.length;
    
    if (genderFilter.value === "Gender") {
        cards();
    }

    let cardCharacter = " ";
    for (let character of genderShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}

speciesFilter.addEventListener("change", speciesFilterFilterChange);
//console.log(speciesFilter.length);
function speciesFilterFilterChange() {
    clear();
    const speciesShow = dataComplete.filter(characterCard => characterCard.species === speciesFilter.value);
    const quantCharacterSpecies = speciesShow.length;
    
    if (speciesFilter.value === "Species") {
        cards();
    }

    let cardCharacter = " ";
    for (let character of speciesShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}

originFilter.addEventListener("change", originFilterChange);
//console.log(originFilter.length);
function originFilterChange() {
    clear();
    const originShow = dataComplete.filter(characterCard => characterCard.origin.name === originFilter.value);
    const quantCharacterOrigin = originShow.length;
    
    if (originFilter.value === "Origin") {
        cards();
    }

    let cardCharacter = " ";
    for (let character of originShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}

locationFilter.addEventListener("change", locationFilterChange);
//console.log(locationFilter.length);
function locationFilterChange() {
    clear()
    const locationShow = dataComplete.filter(characterCard => characterCard.location.name === locationFilter.value);
    const quantCharacterLocation = locationShow.length;

    if (locationFilter.value === "Location") {
        cards();
    }

    let cardCharacter = " ";
    for (let character of locationShow) {
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
    document.querySelector(".card-container").innerHTML += cardCharacter;
}







function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
    document.getElementById('menu').style.borderRadius = '41px';
    }
};