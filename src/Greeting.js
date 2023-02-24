// export function Greetings(props){
//     return <h1>{props.greet}</h1>
// }

//Another form to extract properties from component's tags
//Also when you're passing a prop only in some active components then you can set a default value
//for that info like 'entryProp = "defaultValue"'
export function Greetings({ greet, name = "user" }) {
  return (
    <div>
      <h1>
        {greet} wn {name}
      </h1>
    </div>
  );
}

// export function GetPokemonData() {

    
//   const pokemonArray = fetch("http://localhost:4000/pokemon").then(
//     (response) => (pokemonArray = response.json())
//   );

//   const pokemonsList = pokemonArray.map((pokemon) => {
//     <li key={pokemon.ID.toString()}>{pokemon}</li>;
  
// });

//   return <ul>{pokemonsList}</ul>;
// }

//Another form to extract properties from component's tags
// export function Greetings({title}){
//     return <h1>{title}</h1>
// }

// export function GetPokemonData(){
//     return <button onClick={() => {
//         fetch("http://localhost:4000/pokemon")
//         .then(response => response.json())
//         .then(json => console.log(json))

//     }}>

//     </button>
//  }
