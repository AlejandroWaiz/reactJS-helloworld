import React from "react";
import ReactDom from "react-dom/client";
import { Greetings } from "./Greeting";
import { ShowPokemonComponent } from "./pokemonsComponent";

const root = ReactDom.createRoot(document.getElementById("root"));


root.render(
    <div>
        <nav className="menu">
  <ul>x
    <li>Inicio</li>
    <li>Sobre nosotros</li>
    <li>Contacto</li>
  </ul>
</nav>

        <Greetings greet="Hola cosita linda" name=""/>
        <ShowPokemonComponent/>
    </div>
);
