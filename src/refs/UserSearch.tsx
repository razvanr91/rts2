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
		if (inputRef.current) {
			inputRef.current?.focus();
		}
	}, []);

	const onClick = () => {
		let user = users.find((u) => {
			return u.name.toLowerCase() === name.toLowerCase();
		});
		setUser(user);
	};

	return (
		<div>
			<h2>User search</h2>
			<input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find user</button>
			<div>
				{user && user.name} - {user && user.age}
			</div>
		</div>
	);
};

export default UserSearch;
