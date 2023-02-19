import React from "react";
import ReactDom from "react-dom/client";
import { Greetings } from "./Greeting";

const root = ReactDom.createRoot(document.getElementById("root"));


root.render(
    <div>
        <Greetings/>
    </div>
);
