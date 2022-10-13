
const name = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const img = document.getElementById("sprite");
const buttonNext = document.getElementById("next");
const info = document.getElementById("info");
const moves = document.getElementById("moves");
const right = document.getElementById("right");
const status = document.getElementById("status");
const moveList = document.getElementById("moveList");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
let index = 0;
let onInfo = true;

info.style.backgroundColor = "#32CD32";
buttonNext.addEventListener("click", () => {
    index++;
    if (index!=-1 && onInfo)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            height.textContent = "height: " + data.height / 10 + "m";
            weight.textContent = "weight: " + data.weight / 10 + "kg";
            hp.textContent = "hp: " + data.stats[0].base_stat;
            attack.textContent = "attack: " + data.stats[1].base_stat;
            defense.textContent = "defense: " + data.stats[2].base_stat;
            specialAttack.textContent = "special-attack: " + data.stats[3].base_stat;
            specialDefense.textContent = "special-defense: " + data.stats[4].base_stat;
            speed.textContent = "speed: " + data.stats[5].base_stat;
            type1.textContent = data.types[0].type.name;
            type2.textContent = data.types[1].type.name;
            sprite.src=data.sprites.front_default;
        });
    else if (index!=-1 && !onInfo)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            sprite.src=data.sprites.front_default;
            height.textContent = data.moves[0].move.name;
            weight.textContent = data.moves[1].move.name;
            hp.textContent = data.moves[2].move.name;
            attack.textContent = data.moves[3].move.name;
            defense.textContent = data.moves[4].move.name;
            specialAttack.textContent = data.moves[5].move.name;
            specialDefense.textContent = data.moves[6].move.name;
            speed.textContent = data.moves[7].move.name;
            type1.textContent = data.types[0].type.name;
            type2.textContent = data.types[1].type.name;
        });  
        if (type1.textContent == "normal") {
            type1.style.backgroundColor = "#A8A77A";
        }
        if (type1.textContent == "fire") {
            type1.style.backgroundColor = "#EE8130";
        }
        if (type1.textContent == "water") {
            type1.style.backgroundColor = "#6390F0";
        }
        if (type1.textContent == "electric") {
            type1.style.backgroundColor = "#F7D02C";
        }
        if (type1.textContent == "grass") {
            type1.style.backgroundColor = "#7AC74C";
        }
        if (type1.textContent == "ice") {
            type1.style.backgroundColor = "#96D9D6";
        }
        if (type1.textContent == "fighting") {
            type1.style.backgroundColor = "#C22E28";
        }
        if (type1.textContent == "poison") {
            type1.style.backgroundColor = "#A33EA1";
        }
        if (type1.textContent == "ground") {
            type1.style.backgroundColor = "#E2BF65";
        }
        if (type1.textContent == "flying") {
            type1.style.backgroundColor = "#A98FF3";
        }
        if (type1.textContent == "psychic") {
            type1.style.backgroundColor = "#F95587";
        }
        if (type1.textContent == "bug") {
            type1.style.backgroundColor = "#A6B91A";
        }
        if (type1.textContent == "rock") {
            type1.style.backgroundColor = "#B6A136";
        }
        if (type1.textContent == "ghost") {
            type1.style.backgroundColor = "#735797";
        }
        if (type1.textContent == "dragon") {
            type1.style.backgroundColor = "#6F35FC";
        }
        if (type1.textContent == "dark") {
            type1.style.backgroundColor = "#705746";
        }
        if (type1.textContent == "steel") {
            type1.style.backgroundColor = "#B7B7CE";
        }
        if (type1.textContent == "fairy") {
            type1.style.backgroundColor = "#D685AD";
        }  
        if (type2.textContent == "normal") {
            type2.style.backgroundColor = "#A8A77A";
        }
        if (type2.textContent == "fire") {
            type2.style.backgroundColor = "#EE8130";
        }
        if (type2.textContent == "water") {
            type2.style.backgroundColor = "#6390F0";
        }
        if (type2.textContent == "electric") {
            type2.style.backgroundColor = "#F7D02C";
        }
        if (type2.textContent == "grass") {
            type2.style.backgroundColor = "#7AC74C";
        }
        if (type2.textContent == "ice") {
            type2.style.backgroundColor = "#96D9D6";
        }
        if (type2.textContent == "fighting") {
            type2.style.backgroundColor = "#C22E28";
        }
        if (type2.textContent == "poison") {
            type2.style.backgroundColor = "#A33EA1";
        }
        if (type2.textContent == "ground") {
            type2.style.backgroundColor = "#E2BF65";
        }
        if (type2.textContent == "flying") {
            type2.style.backgroundColor = "#A98FF3";
        }
        if (type2.textContent == "psychic") {
            type2.style.backgroundColor = "#F95587";
        }
        if (type2.textContent == "bug") {
            type2.style.backgroundColor = "#A6B91A";
        }
        if (type2.textContent == "rock") {
            type2.style.backgroundColor = "#B6A136";
        }
        if (type2.textContent == "ghost") {
            type2.style.backgroundColor = "#735797";
        }
        if (type2.textContent == "dragon") {
            type2.style.backgroundColor = "#6F35FC";
        }
        if (type2.textContent == "dark") {
            type2.style.backgroundColor = "#705746";
        }
        if (type2.textContent == "steel") {
            type2.style.backgroundColor = "#B7B7CE";
        }
        if (type2.textContent == "fairy") {
            type2.style.backgroundColor = "#D685AD";
        }
});
const buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", () => {
    if (index > 1)
    index--;
    if (index!=-1 && onInfo)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            height.textContent = "height: " + data.height / 10 + "m";
            weight.textContent = "weight: " + data.weight / 10 + "kg";
            hp.textContent = "hp: " + data.stats[0].base_stat;
            attack.textContent = "attack: " + data.stats[1].base_stat;
            defense.textContent = "defense: " + data.stats[2].base_stat;
            specialAttack.textContent = "special-attack: " + data.stats[3].base_stat;
            specialDefense.textContent = "special-defense: " + data.stats[4].base_stat;
            speed.textContent = "speed: " + data.stats[5].base_stat;
            sprite.src=data.sprites.front_default;
            type1.textContent = data.types[0].type.name;
            type2.textContent = data.types[1].type.name;
        });
    else if (index!=-1 && !onInfo)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            sprite.src=data.sprites.front_default;
            height.textContent = data.moves[0].move.name;
            weight.textContent = data.moves[1].move.name;
            hp.textContent = data.moves[2].move.name;
            attack.textContent = data.moves[3].move.name;
            defense.textContent = data.moves[4].move.name;
            specialAttack.textContent = data.moves[5].move.name;
            specialDefense.textContent = data.moves[6].move.name;
            speed.textContent = data.moves[7].move.name;
            type1.textContent = data.types[0].type.name;
            type2.textContent = data.types[1].type.name;
        });
});

info.addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            height.textContent = "height: " + data.height / 10 + "m";
            weight.textContent = "weight: " + data.weight / 10 + "kg";
            hp.textContent = "hp: " + data.stats[0].base_stat;
            attack.textContent = "attack: " + data.stats[1].base_stat;
            defense.textContent = "defense: " + data.stats[2].base_stat;
            specialAttack.textContent = "special-attack: " + data.stats[3].base_stat;
            specialDefense.textContent = "special-defense: " + data.stats[4].base_stat;
            speed.textContent = "speed: " + data.stats[5].base_stat;
            sprite.src=data.sprites.front_default;
            type1.textContent = data.types[0].type.name;
            type2.textContent = data.types[1].type.name;
})
    info.style.backgroundColor = "#32CD32";
    moves.style.backgroundColor = "rgb(218, 216, 216)";
    onInfo = true;
})
moves.addEventListener("click", () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
    name.textContent = data.name;
    sprite.src=data.sprites.front_default;
    name.textContent = data.name;
    height.textContent = data.moves[0].move.name;
    weight.textContent = data.moves[1].move.name;
    hp.textContent = data.moves[2].move.name;
    attack.textContent = data.moves[3].move.name;
    defense.textContent = data.moves[4].move.name;
    specialAttack.textContent = data.moves[5].move.name;
    specialDefense.textContent = data.moves[6].move.name;
    speed.textContent = data.moves[7].move.name;
    type1.textContent = data.types[0].type.name;
    type2.textContent = data.types[1].type.name;
})
    onInfo = false;
    moves.style.backgroundColor = "#32CD32";
    info.style.backgroundColor = "rgb(218, 216, 216)";
})
