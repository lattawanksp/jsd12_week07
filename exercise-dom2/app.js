const container = document.getElementById("pokemon-container");
const addBtn = document.getElementById("btnAdd");
const removeBtn = document.getElementById("btnRemove");

function fetchRandomPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) throw new Error("not ok 200");
      return response.json();
    })
    .then(function (data) {
      renderPokemon(data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

function renderPokemon(pokemonData) {
  const card = document.createElement("div");
  card.style.border = "1px solid black";
  card.style.padding = "10px";
  card.style.margin = "2px";
  card.style.display = "inline-block";

  const img = document.createElement("img");
  img.src = pokemonData.sprites.front_default;
  img.alt = pokemonData.name;

  const name = document.createElement("name");
  name.innerText = pokemonData.name;

  card.appendChild(img);
  card.appendChild(name);
  container.appendChild(card);
}

function removeLastPokemon() {
  const lastCard = container.lastElementChild;
  if (lastCard) {
    container.removeChild(lastCard);
  }
}

addBtn.addEventListener("click", fetchRandomPokemon);
removeBtn.addEventListener("click", removeLastPokemon);
