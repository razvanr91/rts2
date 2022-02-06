import { useEffect, useRef, useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 20 },
	{ name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name.toLowerCase() === name.toLowerCase();
		});

		setUser(foundUser);
		console.log(foundUser);
	};

	return (
		<div>
			<h2>User Search</h2>
			<input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find user</button>
			<div>
				{user && (
					<div>
						<h2>Found user</h2>
						<h2>User name: {user.name}</h2>
						<h2>User age : {user.age}</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserSearch;
