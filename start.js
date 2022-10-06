
/*
let next = document.getElementById("next");
let index = 0;
next.addEventListener("click", () => {
    counter++;
})

let print = document.getElementById("print");
print.addEventListener("click", () => {
    console.log(counter);
});
*/
/*const redText = document.getElementById("to-have-red-text");

redText.style.color = "red";

redText.addEventListener("click", (e) => {
  redText.textContent = "Bog";
});



const button = document.getElementById("next");
button.addEventListener("click", function handleClick() { 
    button.textContent = "Button Clicked";
})
*/
const name = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const buttonNext = document.getElementById("next");
let index = 1;
buttonNext.addEventListener("click", () => {
    if (index!=0)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            height.textContent = "height: " + data.height;
            weight.textContent = "weight: " + data.weight;
            hp.textContent = "hp: " + data.stats[0].base_stat;
            attack.textContent = "attack: " + data.stats[1].base_stat;
            defense.textContent = "defense: " + data.stats[2].base_stat;
            specialAttack.textContent = "special-attack: " + data.stats[3].base_stat;
            specialDefense.textContent = "special-defense: " + data.stats[4].base_stat;
            speed.textContent = "speed: " + data.stats[5].base_stat;
        });
    index++;
});
const buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", () => {
    if (index!=0)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {
            name.textContent = data.name;
            height.textContent = "height: " + data.height;
            weight.textContent = "weight: " + data.weight;
            hp.textContent = "hp: " + data.hp;
            attack.textContent = "attack: " + data.attack;
            defense.textContent = "defense: " + data.defense;
            specialAttack.textContent = "special-attack: " + data.specialAttack;
            specialDefense.textContent = "special-defense: " + data.specialDefense;
        });
    index--;
});
const order = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.order));

const types = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.types));

const sprite = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.sprites.front_default));
