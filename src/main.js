import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const dataComplete = data.results;


window.onload = function (){ 
    cards ();
}

function cards() {

//     for (let character of dataComplete) {
        
//         const cardCharacter = document.createElement("div");
//         document.querySelector("#cards-division").appendChild = cardCharacter;

//         cardCharacter.innerHTML = `<div class="card">
//         <div class="front">
//     <p class="text-front">Name: ${character.name}</p>
//             <img src="${character.image}" class="image-character"></img>
//         </div>
//         <div class="back">
//     <p class="text-back-status">Status: ${character.status}</p>
//             <p class="text-back-species">Species: ${character.species}</p>
//             <p class="text-back-gender">Gender: ${character.gender}</p>
//             <p class="text-back-origin">Location of origin: ${character.origin.name}</p>
//             <p class="text-back-location">Location of residence: ${character.location.name}</p>
//             <p class="text-back-episodes">Number of episodes: ${character.episode.length}</p>
//         </div>
//     </div>`;
// console.log(cardCharacter);

    //}

    let cards = "";
   
    const card = document.querySelector(".card");

    

    for (let x in dataComplete) { 
    
        const cardCharacter = document.createElement("div");
        document.querySelector("#cards-division").appendChild = cardCharacter;

            const name = dataComplete[x].name;
            const image = dataComplete[x].image;
            const gender = dataComplete[x].gender;
            const episode = dataComplete[x].episode.length;
            const location = dataComplete[x].location.name;
            const origin = dataComplete[x].origin.name;
            const species = dataComplete[x].species;
            const status = dataComplete[x].status;

            const imageCharacter = document.querySelector(".image-character");
            const frenteCard = document.querySelector(".text-front");
            const versoCardStatus = document.querySelector(".text-back-status");
            const versoCardSpecies = document.querySelector(".text-back-species");
            const versoCardGender = document.querySelector(".text-back-gender");
            const versoCardOrigin = document.querySelector(".text-back-origin");
            const versoCardLocation = document.querySelector(".text-back-location");
            const versoCardEpisode = document.querySelector(".text-back-episodes");

        cards +=
            imageCharacter.src= image;
            frenteCard.textContent = ("Name: " + name);
            versoCardStatus.textContent = ("Status: " + status);
            versoCardSpecies.textContent = ("Specie: " + species);
            versoCardGender.textContent = ("Gender: " + gender);
            versoCardOrigin.textContent = ("Location of origin: " + origin);
            versoCardLocation.textContent = ("Location of residence: " + location);
            versoCardEpisode.textContent = ("Number of episodes: " + episode);


        
        
            console.log(card.innerHTML);
            cardCharacter.innerHTML += cards;
    //     // const cardClone = card.cloneNode(true);
    //     // document.querySelector(".card-container").appendChild = cardClone;
    //     //console.log(cardClone);  
     }
     
}



    //  const personagens = dados.filter(personagem => (personagem.id ===1));
    //  console.log(personagens);
    //  document.getElementById("texto").innerHTML = personagens;

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
    document.getElementById('menu').style.borderRadius = '41px';
    }
};