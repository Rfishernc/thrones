import {writeToDom} from "../helper/util.js";

const characters = [
    {name: 'John Snow',
    house: 'Stark',
    image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/3/14/1363276161917/Dr-John-Snow-009.jpg?width=300&quality=85&auto=format&fit=max&s=d72d361bf3d5b6e6ad66989f5f86d2e9',
    id: 'char1'},

    {name: 'Santa Claus',
    house: 'Claus',
    image: 'https://img.etimg.com/thumb/msid-61895405,width-643,imgsize-66918,resizemode-4/check-out-some-fun-facts-about-santa-claus.jpg',
    id: 'char2'},

    {name: 'Puff the Magic Dragon',
    house: 'Puff',
    image: 'https://i.ytimg.com/vi/Hkb2RQnc0nQ/maxresdefault.jpg',
    id: 'char3'},

    {name: 'Batman',
    house: 'bat',
    image: 'https://www.sideshowtoy.com/wp-content/uploads/2018/09/dc-comics-batman-animated-series-collection-statue-sideshow-feature-2005421.jpg',
    id: 'char4'}
];

function charBuilder() {
    let string = '';
    characters.forEach((character) => {
        string += `<h1>${character.name}</h1>`
    });
    writeToDom(string);
}

export {charBuilder};