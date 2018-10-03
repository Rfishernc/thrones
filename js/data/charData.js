import {setCharacters, charBuilder, getCharz} from '../component/characters.js';

function postLoad() {
    let data = JSON.parse(this.responseText);
    setCharacters(data.char);
    charBuilder(getCharz());
}

function postFail() {
    console.log('shits fucked');    
}

function getChar() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', postLoad);
    request.addEventListener('error', postFail);
    request.open('GET', './db/char.json');
    request.send();
}

export {getChar};