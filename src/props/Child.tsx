interface Props {
	color: string;
	onClick: () => void;
}

export const Child = ({ color, onClick }: Props) => {
	return (
		<div>
			<h2>Hello from Child!</h2>
			<p>The color is {color}</p>
			<button onClick={onClick}>Click me!</button>
		</div>
	);
};

export const ChildAsFC: React.FC<Props> = ({ color, onClick }) => {
	return (
		<div>
			<h2>Hello from ChildAsFC</h2>
			<p>The color is {color}</p>
			<button onClick={onClick}>Click me!</button>
		</div>
	);
};
