import { useRef, useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 20 },
	{ name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const foundUser = users.find((user) => {
			return user.name.toLowerCase().includes(name.toLowerCase());
		});
		setUser(foundUser);
	};

	return (
		<div>
			<h2>User Search</h2>
			<input ref={inputRef} value={name} onChange={onChange} />
			<button onClick={onClick}>Search</button>
			{user && (
				<div>
					<h4>
						{user.name} - {user.age}
					</h4>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
