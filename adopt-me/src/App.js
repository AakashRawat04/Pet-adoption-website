import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt me"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "happy",
      animal: "dog",
      breed: "cocktiel",
    }),
    React.createElement(Pet, {
      name: "oreo",
      animal: "dog",
      breed: "Normal",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
