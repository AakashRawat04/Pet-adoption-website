import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <Pet name="Julie" animal="dog" breed="mix" />
      <Pet name="happy" animal="dog" breed="normal" />
      <Pet name="oreo" animal="dog" breed="normal" />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "Adopt me"),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "happy",
//       animal: "dog",
//       breed: "cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "oreo",
//       animal: "dog",
//       breed: "Normal",
//     }),
//   ]);
// };

render(<App />, document.getElementById("root"));
