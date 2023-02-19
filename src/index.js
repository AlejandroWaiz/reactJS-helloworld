import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greetings() {
  return <h1>Hello cosita preciosa</h1>;
}

root.render(Greetings());
