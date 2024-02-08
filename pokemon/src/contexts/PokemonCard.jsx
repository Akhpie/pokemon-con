import React, { useContext } from "react";
import { Pokemoncon } from "../App";

const PokemonCard = ({ name, image, description, powers, onClick }) => {
  const { data, setData } = useContext(Pokemoncon);
  console.log(data);
  return (
    <div className="pokemon-card" onClick={() => onClick(name)}>
      <img src={image} className="pokemon-image" />
      <div className="pokemon-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Powers: {powers}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
