import React from "react";
import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import UserSearch from "./refs/UserSearch";
import GuestList from "./state/GuestList";

const App = () => {
	return (
		<div>
			<h1>Hi there!</h1>
			<Parent />
			<GuestList />
			<UserSearch />
			<EventComponent />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
