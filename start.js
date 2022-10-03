
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
const button = document.getElementById("button");
let index = 1;
button.addEventListener("click", () => {
    if (index!=0)
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((data) => {

        });
    index++;
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
