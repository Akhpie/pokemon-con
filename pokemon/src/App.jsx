import React, { createContext, useState } from "react";
import "./App.css";
import PokemonCard from "./contexts/PokemonCard";
import PokemonData from "./data/PokemonData"; // Importing the data from the new location

export const Pokemoncon = createContext(null);

function App() {
  const [data, setData] = useState(PokemonData); // Using the imported data
  const handleCardClick = (pokemonName) => {
    alert("You clicked on " + pokemonName);
  };
  const values = { data, setData };
  return (
    <div className="App">
      <Pokemoncon.Provider value={values}>
        <header>
          <h1>Pokemon Page</h1>
        </header>

        {/* MAPPING THE DATA */}
        <div className="pokemon-container">
          {/* Pokemon Cards */}
          {data.map((item, index) => (
            <PokemonCard
              key={index} // Adding a unique key prop
              name={item.name}
              image={item.image}
              description={item.description}
              powers={item.powers}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </Pokemoncon.Provider>
    </div>
  );
}

export default App;
