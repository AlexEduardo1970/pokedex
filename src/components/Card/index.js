import React from 'react'

import './styles.css';
import pokemonType from '../Colors/pokemonsTypes';

function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="Card_img">
        <img src={pokemon.sprites.front_default} alt=""/>
      </div>

      <div className="Card_name">
        {pokemon.name}
      </div>

      <div className="Card_types">
        {pokemon.types.map(type => {
          return (
            <div className="Card_type" style={{ backgroundColor: pokemonType[type.type.name]}}>
              {type.type.name}
            </div>
          )
        })}
      </div>

      <div className="Card_info">
        <div className="Card_data Card_data--height">
          <p className='title'>Altura</p>
          <p>{pokemon.weight} Cm</p>
        </div>

        <div className="Card_data Card_data--weight">
          <p className='title'>Peso</p>
          <p>{pokemon.height} Kg</p>
        </div>

        <div className="Card_data Card_data--ability">
          <p className='title'>Abilidade</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>

      </div>
    </div>
  )
}

export default Card;
