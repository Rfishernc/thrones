import {writeToDom} from '../helper/util.js';
import {charBuilder, getCharz} from './characters.js';

function detailsBuilder(character) {
    let string = '';
    string +=   `<div class='col-6 offset-md-3>`
    string +=       `<button type='button' id='x'>X</button>`
    string +=       `<div class='row'>`
    string +=           `<div class='col'>`
    string +=               `<img src=${character.image}>`
    string +=           `</div>`
    string +=           `<div class='col'>`
    string +=               `<h1>${character.name}</h1>`
    string +=               `<h3>${character.house}</h3>`
    string +=           `</div>`
    string +=       `</div>`
    string +=   `</div>`;
    writeToDom(string);
    clickX();
}

function clickX() {
    document.getElementById('x').addEventListener('click', function() {
    charBuilder(getCharz());
    });
}

export {detailsBuilder};