import { Component } from "react";

interface User {
	name: string;
	age: number;
}

interface Props {
	users: User[];
}

interface State {
	name: string;
	user: User | undefined;
}

class UserSearch extends Component<Props> {
	state: State = {
		name: "",
		user: undefined,
	};

	onClick = () => {
		const foundUser = this.props.users.find((user) => {
			return user.name === this.state.name;
		});

		this.setState({ user: foundUser });
	};

	render() {
		const { name, user } = this.state;
		return (
			<div>
				<h2>User Search</h2>
				<input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
				<button onClick={this.onClick}>Find user</button>
				<div>
					{user && (
						<div>
							<h2>User name: {user.name}</h2>
							<h2>User age: {user.age}</h2>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default UserSearch;
