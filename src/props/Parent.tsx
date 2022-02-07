import { Child, ChildAsFC } from "./Child";

const Parent = () => {
	return (
		<div>
			<Child color="red" onClick={() => console.log("Clicked in Child")} />
			<ChildAsFC color="blue" onClick={() => console.log("Clicked in ChildAsFC")} />
		</div>
	);
};

export default Parent;
