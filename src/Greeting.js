// export function Greetings(props){
//     return <h1>{props.greet}</h1>
// }

//Another form to extract properties from component's tags
//Also when you're passing a prop only in some active components then you can set a default value
//for that info like 'entryProp = "defaultValue"' 
 export function Greetings({greet, name = "user"}){
    return <div>
        <h1>{greet} mi {name}</h1>
    </div>
 }

 export function GetPokemonData(){
    return <button onClick={() => {
        fetch("localhost:3333")
        .then(response => response.json())
        .then(data => console.log(data))
    }}>

    </button>
 }

//Another form to extract properties from component's tags 
// export function Greetings({title}){
//     return <h1>{title}</h1>
// }