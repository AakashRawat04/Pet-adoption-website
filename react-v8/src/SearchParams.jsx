import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
import useBreedList from "./useBreedList";
import AdoptedPetContext from "./AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
	const [animal, setAnimal] = useState("");
	const [breeds] = useBreedList(animal);
	const [adoptedPet] = useContext(AdoptedPetContext);

	const [requestParams, setRequestParams] = useState({
		location: "",
		animal: "",
		breed: "",
	});

	const results = useQuery(["search", requestParams], fetchSearch);
	const pets = results?.data?.pets ?? [];

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target);
					const obj = {
						animal: formData.get("animal") ?? "",
						breed: formData.get("breed") ?? "",
						location: formData.get("location") ?? "",
					};
					setRequestParams(obj);
				}}
			>
				{adoptedPet ? (
					<div className="pet image-container">
						<img src={adoptedPet.images[0]} alt={adoptedPet.name} />
					</div>
				) : null}
				
				<label htmlFor="location">
					Location
					<input name="location" id="location" placeholder="Location" />
				</label>

				<label htmlFor="animal">
					Animal
					<select
						name="animal"
						id="animal"
						onChange={(e) => {
							setAnimal(e.target.value);
						}}
						onBlur={(e) => {
							setAnimal(e.target.value);
						}}
					>
						<option />
						{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="breed">
					Breed
					<select name="breed" disabled={!breeds.length} id="breed">
						<option />
						{breeds.map((breed) => (
							<option key={breed} value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>

				<button>Submit</button>
			</form>
			<Results pets={pets} />;
		</div>
	);
};

export default SearchParams;
