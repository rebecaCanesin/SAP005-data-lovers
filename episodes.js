import data from './data/rickandmorty/episodesRM.js';

console.log(data);

const episodeData = data.episodes;

window.onload = episodeList;

const curiosityText = document.querySelector("#curiosity-paragraph");
const seasonFilter = document.querySelector("#seasonFilter");


function episodeList (){

    let epiList = " ";
    for (let episode of episodeData) {
        epiList += 
        `<div class="epi-card">
        <div class="epi-front">
            <h2 class="text-front">Episode Name: ${episode.name}</h2>
            <h2 class="text-front">First air date: ${episode.air_date}</h2>
            <h2 class="text-front">Number of the episode: ${episode.episode}</h2>
            <h2 class="text-front">Season: ${episode.season}</h2>
            <h2 class="text-front">List of characters: ${episode.characters.length}</h2>
        </div>
        <div class="epi-back">
            <p>Sinopse</p>
            <p>${episode.sinopse}</p>
        </div>
    </div>`; 
    }
    document.querySelector(".episode-list").innerHTML += epiList;
    
}

function clear () {
    document.querySelector(".episode-list").innerHTML = " ";
}

seasonFilter.addEventListener('change', seasonChange);

function seasonChange () {
    clear();
    const seasonShow = episodeData.filter(epiCard => epiCard.season === seasonFilter.value);

    let epiList = " ";
    for (let episode of seasonShow) {
        epiList += 
        `<div class="epi-card">
            <div class="epi-front">
                <h2 class="text-front">Episode Name: ${episode.name}</h2>
                <h2 class="text-front">First air date: ${episode.air_date}</h2>
                <h2 class="text-front">Number of the episode: ${episode.episode}</h2>
                <h2 class="text-front">Season: ${episode.season}</h2>
                <h2 class="text-front">List of characters: ${episode.characters.length}</h2>
            </div>
            <div class="epi-back">
                <p>Sinopse</p>
                <p>${episode.sinopse}</p>
            </div>
        </div>`; 
    }
    document.querySelector(".episode-list").innerHTML += epiList;

    if (seasonFilter.value == "1") {
       console.log( curiosityText.innerHTML = ("There are" + "x" + "episodes in this season."))
    }
}




