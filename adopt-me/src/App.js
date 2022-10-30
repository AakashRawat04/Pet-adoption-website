const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
