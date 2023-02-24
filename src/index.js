import React from "react";
import ReactDom from "react-dom/client";
import { Greetings } from "./Greeting";
import { ShowPokemonComponent } from "./pokemonsComponent";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Greetings greet="Hola po" name="" />
    <ShowPokemonComponent />
    <footer>
      <small>&copy; Todos los derechos reservados</small>
    </footer>
  </div>
);
