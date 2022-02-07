import { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGuests] = useState<string[]>([]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setGuests([...guests, name]);
		setName("");
	};

	return (
		<div>
			<h2>Guest List</h2>
			<input value={name} onChange={onChange} />
			<button onClick={onClick}>Add guest</button>
			{guests &&
				guests.map((guest) => {
					return (
						<div key={guest}>
							<h4>{guest}</h4>
						</div>
					);
				})}
		</div>
	);
};

export default GuestList;
