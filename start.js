import fetch from "node-fetch";

const name = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.name));

const order = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.order));

const types = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.types));

const sprite = fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
    .then((data) => console.log(data.sprites.front_default));
