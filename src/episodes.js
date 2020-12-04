import data from './data/rickandmorty/episodesRM.js';

console.log(data);

const episodeData = data.episodes;

// const curiosityText = document.querySelector("#curiosity-paragraph");
const seasonFilter = document.querySelector("#seasonFilter");


function episodeCards (episodes){
    let epiCard = " ";

    for (let episode of episodes) {
        epiCard += 
        `<div class="epi-card">
        <div class="epi-front">
            <div>
                <h2 class="text-front">Episode Name: ${episode.name}</h2>
                <h2 class="text-front">First air date: ${episode.air_date}</h2>
                <h2 class="text-front">Number of the episode: ${episode.episode}</h2>
                <h2 class="text-front">Season: ${episode.season}</h2>
               
            </div>
            <div>
            <iframe src=${episode.image} width="100%" height="50%" frameBorder="0" class="giphy-embed" allowFullScreen>
            </iframe>
            </div>
        </div>
        <div class="epi-back">
            <p>Sinopse</p>
            <p>${episode.sinopse}</p>
        </div>
    </div>`; 
    }
    return epiCard
}

const cardEpisode = document.querySelector(".episode-list");
cardEpisode.innerHTML = episodeCards(episodeData);

function clear () {
    document.querySelector(".episode-list").innerHTML = " ";
}

seasonFilter.addEventListener('change', () => {
    clear();
    const seasonShow = episodeData.filter(epiCard => epiCard.season === seasonFilter.value);
    document.querySelector(".episode-list").innerHTML = episodeCards(seasonShow);

    if (seasonFilter.value === "season"){
        document.querySelector(".episode-list").innerHTML = episodeCards(episodeData);
    };
});





