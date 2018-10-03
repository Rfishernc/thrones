import {writeToDom} from "../helper/util.js";
import {detailsBuilder} from './details.js';

let characters = [];

function setCharacters(newArray) {
    characters = newArray;
}

function getCharz() {
    return characters;
}

function charClick(e) {
    const charId = e.target.closest('.character-card').id;
    const currentChar = characters.find(x => x.id === charId);
    detailsBuilder(currentChar);
}

function createEvents() {
    let x = document.getElementsByClassName('character-card');
    for(let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function(e) {
            charClick(e);
        });
    }
}

function charBuilder(houseArray) {
    let string = '';
    houseArray.forEach((character) => {
        string+=`<div class='col-2 character-card' id=${character.id}>`
        string+=    `<div class="card">`
        string+=        `<img class="card-img-top" src="${character.image}" alt="${character.name}">`
        string+=        `<div class="card-body">`
        string+=            `<h5 class="card-title">${character.name}</h5>`
        string+=        `</div>`
        string+=    `</div>`
        string+=`</div>`;
    });
    writeToDom(string);
    createEvents();
}

export {charBuilder, setCharacters, getCharz};