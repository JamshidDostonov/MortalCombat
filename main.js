const player1 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['spear', 'dagger', 'sword'],
    attack: function () {
        console.log('Scorpion ' + 'fight...');
    }
};
const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['spear', 'dagger', 'sword'],
    attack: function () {
        console.log('Sub-zero ' + 'fight...');
    }
};


function createPlayer(player, name, life) {

    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add(life);
    $life.style.width = '100 %';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    const character = document.createElement('div');
    character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    ;
    character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild(character);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
