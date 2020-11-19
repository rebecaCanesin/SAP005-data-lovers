import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const dados = data.results;

for (const x in dados) {
    const id = dados[x].id;

    if (id == 1) {
    const nome = dados[x].name;
    const genero = dados[x].gender;
    console.log(nome);
    console.log(genero);
    document.getElementById("texto").innerHTML = nome;
    }  
}


const x = document.getElementById("textos");
const y = x.firstChild;

for (let index = 0; index < dados.length; index++) {
    
    const y_clone = y.cloneNode(true);
    x.appendChild(y_clone);
    
}









    //  const personagens = dados.filter(personagem => (personagem.id ===1));
    //  console.log(personagens);
    //  document.getElementById("texto").innerHTML = personagens;
    

// for (let index = 0; index < dados.length; index++) {
   
    
//         const element = dados[index];
//          console.log(element.id)
//          console.log(element.name)
//          console.log(element.gender)
    
//         document.getElementById("texto").innerHTML += element.name;
//         document.getElementById("texto2").innerHTML += element.status;
//         document.getElementById("texto3").innerHTML += element.gender;
//         document.getElementById("texto4").innerHTML += element.species;
    
     
// }

// for (const element in dados) {
//     const i = dados.length
//    if (dados[i]) {
//         const element = dados[index];
//         console.log(element.id)
//         console.log(element.name)
//         console.log(element.gender)
//         document.getElementById("texto").innerHTML = element.name + element.gender;
//    }else{

//    }
// }