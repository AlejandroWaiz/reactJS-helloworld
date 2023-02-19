import React from "react";
import ReactDom from "react-dom/client";
import { Greetings, GetPokemonData } from "./Greeting";

const root = ReactDom.createRoot(document.getElementById("root"));


root.render(
    <div>
        <Greetings greet="Hola cosita linda" name="Lissi"/>
        <GetPokemonData></GetPokemonData>
    </div>
);
