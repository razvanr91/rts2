import { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGuests] = useState<string[]>([]);

	const onClick = () => {
		setGuests([...guests, name]);
		setName("");
	};

	return (
		<div>
			<h2>Guest List</h2>
			<ul>
				{guests.map((guest) => {
					return <li key={guest}>{guest}</li>;
				})}
			</ul>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Add guest</button>
		</div>
	);
};

export default GuestList;