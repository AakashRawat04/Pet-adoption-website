import { createRoot } from "react-dom/client";
import Pet from "./Pet";


const App = () => {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<Pet name="julie" animal="dog" breed="mix" />
			<Pet name="Happy" animal="dog" breed="labradore" />
			<Pet name="Oreo" animal="dog" breed="landseer" />
		</div>
	)
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
