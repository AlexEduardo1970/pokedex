import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Card from './components/Card';
import { getAllPokemon, getPokemon } from './servises/pokemon';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]); 
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results)
      console.log(pokemon)
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
  }

  const [inputSearch, setInputSearch] = useState('');
  

  return (
    <div className="App">
      { loading ? <h1>Carregando...</h1> : (
        <>
        <Navbar />
        
        <div className="searchInput">
          <input 
          value={inputSearch}
          type="text"
          onChange={e => setInputSearch(e.target.value)}
          />
          <button
          type="submit"
          className="search-button"
          >
            Pesquisar
          </button>
        </div>

        <div className="btn">
          <button onClick={prev}>Anterior</button>
          <button onClick={next}>Próximo</button>
        </div>
          <div className="grid_container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

//firebase init
//build
//npm rum build
//firebase deploy