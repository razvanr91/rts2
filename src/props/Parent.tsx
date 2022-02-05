import { Child, ChildAsFC } from "./Child";

const Parent = () => {
	return (
		<div>
			<Child color="blue" onClick={() => console.log("click")} />
			<ChildAsFC color="red" />
		</div>
	);
};

export default Parent;
