
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
let index = 0;
buttonNext.addEventListener("click", () => {
    index++;
    if (index!=-1)
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
        });
        
});
const buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", () => {
    if (index > 1)
    index--;
    if (index!=-1)
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
        });
});

info.addEventListener("click", () => {
    info.style.backgroundColor = "#32CD32";
    moves.style.backgroundColor = "rgb(218, 216, 216)";

})
moves.addEventListener("click", () => {
    moves.style.backgroundColor = "#32CD32";
    info.style.backgroundColor = "rgb(218, 216, 216)";
})
