import { useEffect, useState } from "react";

export function ShowPokemonComponent() {
  const [pokemons, setPokemons] = useState([]);

  const getApiData = async () => {
    await fetch("http://localhost:4000/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(pokemons);

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.ID}>
            <h5>Pokemon ID:{pokemon.ID}</h5>
            <h5>Pokemon name:{pokemon.Name}</h5>
          </div>
        ))}
    </div>
  );
}
