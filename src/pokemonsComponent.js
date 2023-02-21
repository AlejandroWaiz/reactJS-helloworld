import { useEffect, useState } from "react";

export function ShowPokemonComponent() {
  const [pokemons, setPokemons] = useState([]);

  const getApiData = async () => {
     await fetch("http://localhost:4000/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(pokemons => ({
          ...pokemons,
          ...data
        }))
        console.log(data);
      });

      

  };

  useEffect(() => {
    getApiData();
  }, []);

  // return <h1>
  //   {pokemons}
  // </h1>

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div className="pokemon-Container">Pokemon name: {pokemon.Name}</div>
        ))}
    </div>
  );
}
