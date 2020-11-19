//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

const dados = data.results;

console.log(dados);

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '41px';
    }
}

/*for (const nome in dados) {
    console.log(dados[nome].name);
}

for (const vida in dados) {
    console.log(dados[vida].status);
}

for (const especie in dados) {
    console.log(dados[especie].species);
}

for (const genero in dados) {
    console.log(dados[genero].gender);
}

for (const nome in dados) {
    console.log(dados[nome].name);
}
*/