// function searchPokemon() {

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// const searchInput = getElement('.search-input'),
//       searchButton = getElement('.search-button'),
//       container = getElement('.pokemon');

// var pokeName, 
//     pokemon; 

// function getElement(element) {
//   return document.querySelector(element);
// }

// function requestPokeInfo(url, name) {
//   fetch(url + name)
//     .then(response => response.json())
//     .then(data => {
//       pokemon = data;
//     })
//     .catch(err => console.log(err));
// }

// function startApp(pokeName) {
//   requestPokeInfo(baseUrl, pokeName);

// }

// searchButton.addEventListener('click', event => {
//   event.preventDefault();
//   pokeName = searchInput.value.toLowerCase();
//   startApp(pokeName);
// });
// }

// export default searchPokemon;