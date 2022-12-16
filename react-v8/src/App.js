const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, React.createElement("h2", {}, props.breed)),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "julie",
			animal: "Dog",
			breed: "Mix",
		}),
		React.createElement(Pet, {
			name: "Happy",
			animal: "Dog",
			breed: "labrador",
		}),
		React.createElement(Pet, {
			name: "Oreo",
			animal: "Dog",
			breed: "Landseer",
		}),
	]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
