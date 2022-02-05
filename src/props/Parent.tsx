import { Child, ChildAsFC } from "./Child";

const Parent = () => {
	return (
		<div>
			<Child color="blue" onClick={() => console.log("click")} />
			<ChildAsFC color="red" onClick={() => console.log("click")} />
		</div>
	);
};

export default Parent;
