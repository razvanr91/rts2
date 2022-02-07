import { useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 20 },
	{ name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const foundUser = users.find((user) => {
			return user.name.toLowerCase().includes(name.toLowerCase());
		});
		console.log(foundUser);
	};

	return (
		<div>
			<h2>User Search</h2>
			<input value={name} onChange={onChange} />
			<button onClick={onClick}>Search</button>
		</div>
	);
};

export default UserSearch;
